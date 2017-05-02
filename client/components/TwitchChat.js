class TwitchChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  render() {
    return (
    <div className='chat'>
      <iframe frameBorder={0}
        scrolling="no"
        id="chat_embed"
        src={"https://www.twitch.tv/"+ this.props.channel +"/chat"}
        height={300}
        width={1000}>
      </iframe>
    </div>
    );
  }

}

window.TwitchChat =TwitchChat;
