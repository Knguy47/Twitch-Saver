class TwitchLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleAddToFavs = this.handleAddToFavs.bind(this);
  };
  
  render() {
    return (
    <div>
      <a href= {this.props.stream.stream.channel.url} target="_blank">
        {this.props.stream.stream.channel.url}
      </a>
      <button onClick={this.handleAddToFavs}>Add to Favorites</button>
    </div>
    );
  }
  
  handleAddToFavs= function(){
    this.props.onFavorite(this.props.stream);
  }

}

window.TwitchLink = TwitchLink;
