class TwitchLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleAddToFavs = this.handleAddToFavs.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  };
  
  render() {
    return (
    <div className='twitchlinks'>
        
      <a href= {this.props.stream.stream.channel.url} target="_blank">
        <img src={this.props.stream.stream.preview.small}></img>
      </a>
      {this.props.stream.stream.game}
      <div>
        <button onClick={this.handlePlay}>Play Stream</button>
        <button onClick={this.handleAddToFavs}>Add to Favorites</button>
      </div>
    </div>
    );
  }
  handlePlay(){
    this.props.onPlay(this.props.stream);
  }
  
  handleAddToFavs (){
    this.props.onFavorite(this.props.stream);
  }

}

window.TwitchLink = TwitchLink;
