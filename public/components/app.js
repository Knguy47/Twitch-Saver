'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentChannel: '',
      favStreams: [],
      topStreamData: [],
      inputValue: ''
    };

    _this.handleFavorite = _this.handleFavorite.bind(_this);
    _this.handlePlay = _this.handlePlay.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      //create a player only if a video exist
      var player;

      if (this.state.topStreamData.length > 1) {
        this.setState({ currentChannel: this.state.topStreamData[0].stream.channel.name });
        player = React.createElement(TwitchPlayer, { channel: this.state.currentChannel });
      }

      return React.createElement(
        'div',
        null,
        player,
        React.createElement(
          'h3',
          null,
          'TOP 5 STREAMS'
        ),
        this.state.topStreamData.map(function (streamLink) {
          return React.createElement(TwitchLink, { key: streamLink.stream._id, stream: streamLink, onFavorite: _this2.handleFavorite, onPlay: _this2.handlePlay });
        }),
        React.createElement(
          'h3',
          null,
          'FAVORITE STREAMS'
        ),
        this.state.favStreams.map(function (streamFavs) {
          return React.createElement(FavLink, { key: streamFavs.stream._id, stream: streamFavs, onPlay: _this2.handlePlay });
        })
      );
    }
    //fetch the data from the Twitch 

  }, {
    key: 'fetchTop',
    value: function fetchTop() {
      var _this3 = this;

      $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/featured?limit=5',
        dataType: 'json',
        type: 'GET',
        headers: {
          "Accept": "application/vnd.twitchtv.v5+json",
          "Client-Id": "9r4gqveimjjp6yo5rwbxf7i6hby75l"
        },
        success: function success(data) {
          _this3.setState({ topStreamData: data.featured });
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }

    //fetch the data from the DB

  }, {
    key: 'fetch',
    value: function fetch() {
      var _this4 = this;

      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        dataType: 'json',
        type: 'GET',
        success: function success(data) {
          var mappedData = data.map(function (stream) {
            return stream.stream;
          });
          console.log(mappedData);
          _this4.setState({ favStreams: mappedData });
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetch();
      this.fetchTop();
    }

    //Add Favorite Stream to Database

  }, {
    key: 'handleFavorite',
    value: function handleFavorite(stream) {
      var _this5 = this;

      console.log(stream);
      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: stream,
        type: 'POST',
        success: function success(data) {
          console.log('sucess');
          _this5.fetch();
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }

    //Change Player

  }, {
    key: 'handlePlay',
    value: function handlePlay(stream) {
      console.log(stream.stream.channel.name);
      this.setState({ currentChannel: stream.stream.channel.name });
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudENoYW5uZWwiLCJmYXZTdHJlYW1zIiwidG9wU3RyZWFtRGF0YSIsImlucHV0VmFsdWUiLCJoYW5kbGVGYXZvcml0ZSIsImJpbmQiLCJoYW5kbGVQbGF5IiwicGxheWVyIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJzdHJlYW0iLCJjaGFubmVsIiwibmFtZSIsIm1hcCIsInN0cmVhbUxpbmsiLCJfaWQiLCJzdHJlYW1GYXZzIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInR5cGUiLCJoZWFkZXJzIiwic3VjY2VzcyIsImRhdGEiLCJmZWF0dXJlZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcHBlZERhdGEiLCJmZXRjaCIsImZldGNoVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCLEVBREw7QUFFWEMsa0JBQVksRUFGRDtBQUdYQyxxQkFBZSxFQUhKO0FBSVhDLGtCQUFZO0FBSkQsS0FBYjs7QUFPQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQixPQUFsQjtBQVZpQjtBQVdsQjs7Ozs2QkFFUTtBQUFBOztBQUNQO0FBQ0EsVUFBSUUsTUFBSjs7QUFFQSxVQUFHLEtBQUtSLEtBQUwsQ0FBV0csYUFBWCxDQUF5Qk0sTUFBekIsR0FBa0MsQ0FBckMsRUFBdUM7QUFDckMsYUFBS0MsUUFBTCxDQUFjLEVBQUNULGdCQUFnQixLQUFLRCxLQUFMLENBQVdHLGFBQVgsQ0FBeUIsQ0FBekIsRUFB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QUFkO0FBQ0Q7Ozs7RUFyR2VvQixNQUFNQyxTOztBQXdHeEJDLE9BQU9yQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY3VycmVudENoYW5uZWw6ICcnLFxyXG4gICAgICBmYXZTdHJlYW1zOiBbXSxcclxuICAgICAgdG9wU3RyZWFtRGF0YTogW10sXHJcbiAgICAgIGlucHV0VmFsdWU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlRmF2b3JpdGUgPSB0aGlzLmhhbmRsZUZhdm9yaXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVBsYXkgPSB0aGlzLmhhbmRsZVBsYXkuYmluZCh0aGlzKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vY3JlYXRlIGEgcGxheWVyIG9ubHkgaWYgYSB2aWRlbyBleGlzdFxyXG4gICAgdmFyIHBsYXllcjtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubGVuZ3RoID4gMSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRDaGFubmVsOiB0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGFbMF0uc3RyZWFtLmNoYW5uZWwubmFtZX0pXHJcbiAgICAgcGxheWVyID0gPFR3aXRjaFBsYXllciBjaGFubmVsPXt0aGlzLnN0YXRlLmN1cnJlbnRDaGFubmVsfT48L1R3aXRjaFBsYXllcj4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3BsYXllcn1cclxuICAgICAgPGgzPlRPUCA1IFNUUkVBTVM8L2gzPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubWFwKChzdHJlYW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFR3aXRjaExpbmsga2V5PXtzdHJlYW1MaW5rLnN0cmVhbS5faWR9IHN0cmVhbT17c3RyZWFtTGlua30gb25GYXZvcml0ZT17dGhpcy5oYW5kbGVGYXZvcml0ZX0gb25QbGF5PXt0aGlzLmhhbmRsZVBsYXl9PjwvVHdpdGNoTGluaz5cclxuICAgICAgICB9KX1cclxuICAgICAgPGgzPkZBVk9SSVRFIFNUUkVBTVM8L2gzPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmZhdlN0cmVhbXMubWFwKChzdHJlYW1GYXZzKSA9PntcclxuICAgICAgICAgIHJldHVybiA8RmF2TGluayBrZXk9e3N0cmVhbUZhdnMuc3RyZWFtLl9pZH0gc3RyZWFtPXtzdHJlYW1GYXZzfSBvblBsYXk9e3RoaXMuaGFuZGxlUGxheX0+PC9GYXZMaW5rPlxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAvL2ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIFR3aXRjaCBcclxuICBmZXRjaFRvcCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLnR3aXRjaC50di9rcmFrZW4vc3RyZWFtcy9mZWF0dXJlZD9saW1pdD01JyxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOlwiYXBwbGljYXRpb24vdm5kLnR3aXRjaHR2LnY1K2pzb25cIixcclxuICAgICAgICBcIkNsaWVudC1JZFwiOlwiOXI0Z3F2ZWltampwNnlvNXJ3YnhmN2k2aGJ5NzVsXCJcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b3BTdHJlYW1EYXRhOiBkYXRhLmZlYXR1cmVkfSlcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9mZXRjaCB0aGUgZGF0YSBmcm9tIHRoZSBEQlxyXG4gIGZldGNoKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICB2YXIgbWFwcGVkRGF0YSA9IGRhdGEubWFwKChzdHJlYW0pID0+e1xyXG4gICAgICAgICAgcmV0dXJuIHN0cmVhbS5zdHJlYW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWFwcGVkRGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmF2U3RyZWFtczogbWFwcGVkRGF0YX0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaWQgbm90IHJlY2VpdmU6JyArIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgdGhpcy5mZXRjaFRvcCgpO1xyXG4gIH1cclxuXHJcbiAgLy9BZGQgRmF2b3JpdGUgU3RyZWFtIHRvIERhdGFiYXNlXHJcbiAgaGFuZGxlRmF2b3JpdGUoc3RyZWFtKXtcclxuICAgIGNvbnNvbGUubG9nKHN0cmVhbSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgICBkYXRhOiBzdHJlYW0sXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjZXNzJylcclxuICAgICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0NoYW5nZSBQbGF5ZXJcclxuICBoYW5kbGVQbGF5KHN0cmVhbSl7XHJcbiAgICBjb25zb2xlLmxvZyhzdHJlYW0uc3RyZWFtLmNoYW5uZWwubmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50Q2hhbm5lbDogc3RyZWFtLnN0cmVhbS5jaGFubmVsLm5hbWV9KVxyXG4gIH1cclxufVxyXG5cclxud2luZG93LkFwcCA9IEFwcDtcclxuIl19