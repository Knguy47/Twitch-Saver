class TwitchPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  render() {
    return (
    <div>
      <h1>You are watching {this.props.channel}</h1>
      <iframe className="player"
          src={"http://player.twitch.tv/?channel="+ this.props.channel}
          height={600}
          width={1000}
          frameBorder={0}
          scrolling="no"
          allowFullScreen="true">
      </iframe>
    </div>
    );
  }

}

window.TwitchPlayer =TwitchPlayer;
