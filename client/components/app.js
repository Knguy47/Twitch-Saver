class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favStreams: [],
      topStreamData: [],
      inputValue: ''
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  };
  
  render() {
    var player;

    if(this.state.topStreamData.length > 1){
     player = <TwitchPlayer channel={this.state.topStreamData[0].stream.channel.name}></TwitchPlayer>  
    }
    
    return (
    <div>
      {player}
      <h3>TOP 5 STREAMS</h3>
        {this.state.topStreamData.map((streamLink) => {
          return <TwitchLink key={streamLink.stream._id} stream={streamLink} onFavorite={this.handleFavorite}></TwitchLink>
        })}
      <input onChange={this.handleInputChange} value={this.state.inputValue}></input>
      <button onClick={this.handleButtonClick}>Submit Your Favorite Stream</button>
    </div>
    );
  }
  //fetch the data from the DB
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
        console.log(data);
        this.setState({topStreamData: data.featured})
      },
      error: (data) => {
        console.log('Did not receive:' + data);
      }
    });
  }

  fetch() {
    $.ajax({
      url: 'http://127.0.0.1:3030/favstreams',
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        console.log(data);
        this.setState({favStreams: data})
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

  handleButtonClick(event) {
    var data = {
      title: this.state.inputValue,
      url: this.state.inputValue
    }
    
    $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: data,
        type: 'POST',
        success: (data) => {
          this.setState({inputValue: ''});
          this.fetch();
        },
        error: (data) => {
          this.setState({inputValue: ''});
          console.log('Did not receive:' + data);
        }
    });
  }

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleFavorite(stream){
    var data = {
      title: stream.something,
      url: stream.something
    }
    
    $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: data,
        type: 'POST',
        success: (data) => {
          this.setState({inputValue: ''});
          this.fetch();
        },
        error: (data) => {
          this.setState({inputValue: ''});
          console.log('Did not receive:' + data);
        }
    });
  }
}

window.App = App;
