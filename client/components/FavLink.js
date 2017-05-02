class FavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handlePlay = this.handlePlay.bind(this);
  };
  
  render() {
    return (
    <div className='twitchlinks'>
      <a href= {this.props.stream.stream.channel.url} target="_blank">
        {this.props.stream.stream.channel.url}
      </a>
      <div>
       <button onClick={this.handlePlay}>Play Stream</button>
       <button>Remove From Favorites</button>
      </div>
    </div>
    );
  }

  handlePlay(){
    this.props.onPlay(this.props.stream);
  }
}

window.FavLink = FavLink;
