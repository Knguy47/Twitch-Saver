class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favStreams: [],
      streamData: window.fakeData.featured,
      buttonValue: ''
    };
  };
  
  render() {
    return (
    <div>
      {this.state.streamData.map((streamLink) => {
        return <TwitchLink key={streamLink.stream._id} stream={streamLink}></TwitchLink>
      })}
      <input></input>
      <button>Submit Your Favorite Stream</button>
    </div>
    );
  }
  //fetch the data from the DB
  fetch(){
    $.ajax({
      url: 'http://127.0.0.1:3030/favstreams',
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        console.log(data);
        this.setState({favStreams: data})
      },
      error: function(data) {
        console.log('Did not receive:' + data);
      }
    });
  }
  componentDidMount() {
    this.fetch();
  }

}

window.App = App;
