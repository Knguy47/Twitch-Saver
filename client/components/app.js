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
  };
  
  render() {
    //create a player only if a video exist
    var player;

    if(this.state.topStreamData.length > 1){
      this.setState({currentChannel: this.state.topStreamData[0].stream.channel.name})
     player = <TwitchPlayer channel={this.state.currentChannel}></TwitchPlayer>  
    }
    
    return (
    <div>
      {player}
      <h3>TOP 5 STREAMS</h3>
        {this.state.topStreamData.map((streamLink) => {
          return <TwitchLink key={streamLink.stream._id} stream={streamLink} onFavorite={this.handleFavorite} onPlay={this.handlePlay}></TwitchLink>
        })}
      <h3>FAVORITE STREAMS</h3>
        {this.state.favStreams.map((streamFavs) =>{
          return <FavLink key={streamFavs.stream._id} stream={streamFavs} onPlay={this.handlePlay}></FavLink>
        })}
    </div>
    );
  }
  //fetch the data from the Twitch 
  fetchTop() {
    $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/featured?limit=5',
      dataType: 'json',
      type: 'GET',
      headers: {
        "Accept":"application/vnd.twitchtv.v5+json",
        "Client-Id":"9r4gqveimjjp6yo5rwbxf7i6hby75l"
      },
      success: (data) => {
        this.setState({topStreamData: data.featured})
      },
      error: (data) => {
        console.log('Did not receive:' + data);
      }
    });
  }

  //fetch the data from the DB
  fetch() {
    $.ajax({
      url: 'http://127.0.0.1:3030/favstreams',
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        var mappedData = data.map((stream) =>{
          return stream.stream;
        });
        console.log(mappedData);
        this.setState({favStreams: mappedData})
      },
      error: (data) => {
        console.log('Did not receive:' + data);
      }
    });
  }

  componentDidMount() {
    this.fetch();
    this.fetchTop();
  }

  //Add Favorite Stream to Database
  handleFavorite(stream){
    console.log(stream);
    $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: stream,
        type: 'POST',
        success: (data) => {
          console.log('sucess')
          this.fetch();
        },
        error: (data) => {
          console.log('Did not receive:' + data);
        }
    });
  }

  //Change Player
  handlePlay(stream){
    console.log(stream.stream.channel.name);
    this.setState({currentChannel: stream.stream.channel.name})
  }
}

window.App = App;
