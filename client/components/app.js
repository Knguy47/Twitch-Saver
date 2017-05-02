class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannel: '',
      favStreams: [],
      topStreamData: [],
      inputValue: ''
    };

    this.handleFavorite = this.handleFavorite.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  };
  
  render() {
    //create a player only if a video exist
    var player;
    var chat;

    if(this.state.topStreamData.length > 1) {
     player = <TwitchPlayer channel={this.state.currentChannel}></TwitchPlayer>  
     chat =  <TwitchChat channel={this.state.currentChannel}></TwitchChat>  
    }
    
    return (
    <div>
      {player}
      {chat}
      <h3>TOP 5 STREAMS</h3>
        {this.state.topStreamData.map((streamLink) => {
          return <TwitchLink key={streamLink.stream._id} stream={streamLink} onFavorite={this.handleFavorite} onPlay={this.handlePlay}></TwitchLink>
        })}
      <h3>FAVORITE STREAMS</h3>
        {this.state.favStreams.map((streamFavs) =>{
          return <FavLink key={streamFavs.stream._id} stream={streamFavs} onPlay={this.handlePlay} onRemove={this.handleRemove}></FavLink>
        })}
    </div>
    );
  }
  //Fetch the data from the Twitch 
  fetchTwitch(query) {
    var options = {
      queryString: query
    }
    
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/' + options.queryString,
      dataType: 'json',
      type: 'GET',
      headers: {
        "Client-Id": somethingsomething,
        "Accept":"application/vnd.twitchtv.v5+json"
      },
      success: (data) => {
        if(options.queryString === "featured?limit=5") {
          this.setState({topStreamData: data.featured});
          this.setState({currentChannel: data.featured[0].stream.channel.name});
        }
          console.log(data);
      },
      error: (data) => {
        console.log('https://api.twitch.tv/kraken/streams/' + options.queryString)
        console.log('Did not receive:' + JSON.stringify(data));
      }
    });
  }

  //Fetch the data from the DB
  fetch() {
    $.ajax({
      url: 'http://127.0.0.1:3030/favstreams',
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        var mappedData = data.map((stream) =>{
          var newStream = stream.stream
          newStream._id = stream._id;
          return newStream
        });
       
        this.setState({favStreams: mappedData});
        // this.fetchTwitch(this.state.favStreams[0].stream.channel.name);
      },
      error: (data) => {
        console.log('Did not receive:' + data);
      }
    });
  }

  componentDidMount() {
    this.fetch();
    this.fetchTwitch("featured?limit=5");
  }
  
  //Add Favorite Stream to Database
  handleFavorite(stream){
    $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: stream,
        type: 'POST',
        success: (data) => {
          console.log('success')
          this.fetch();
        },
        error: (data) => {
          console.log('Did not receive:' + data);
        }
    });
  }

  handleRemove(stream){
    $.ajax({
      url: 'http://127.0.0.1:3030/favstreams',
      data: stream,
      type: 'DELETE',
      success: (data) => {
        console.log('success')
        this.fetch();
      },
      error: (data) => {
        console.log('Did not receive:' + data);
      }
    });
  }

  //Change Current Player
  handlePlay(stream){
    this.setState({currentChannel: stream.stream.channel.name});
  }
}

window.App = App;
