class FavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  };
  
  render() {
    var redDot;
    if(this.state.online === true) {
      redDot = <img id="onlinebutton" src="./assets/imgs/red_dot.png"></img>
    }
    return (
    <div className='twitchlinks'>
      <a href= {this.props.stream.stream.channel.url} target="_blank">
        {this.props.stream.stream.channel.url}
      </a>
      {redDot}
      <div>
       <button onClick={this.handlePlay}>Play Stream</button>
       <button onClick={this.handleRemove}>Remove From Favorites</button>
      </div>
    </div>
    );
  }
  
  handleRemove(){
    this.props.onRemove(this.props.stream);
  }

  handlePlay(){
    this.props.onPlay(this.props.stream);
  }
}

window.FavLink = FavLink;
