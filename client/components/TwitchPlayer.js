class TwitchPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  render() {
    return (
    <iframe
        src={"http://player.twitch.tv/?channel="+ this.props.channel}
        height={500}
        width={600}
        frameBorder={0}
        scrolling="no"
        allowFullScreen="true">
    </iframe>
    );
  }

}

window.TwitchPlayer =TwitchPlayer;
