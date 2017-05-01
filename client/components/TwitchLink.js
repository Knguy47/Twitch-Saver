class TwitchLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props)
  };
  
  render() {
    return (
    <a href= {this.props.stream.stream.channel.url} target="_blank">
      {this.props.stream.stream.channel.url}
    </a>
    );
  }

}

window.TwitchLink = TwitchLink;
