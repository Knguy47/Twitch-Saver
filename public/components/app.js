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
    _this.handleRemove = _this.handleRemove.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      //create a player only if a video exist
      var player;
      var chat;

      if (this.state.topStreamData.length > 1) {
        player = React.createElement(TwitchPlayer, { channel: this.state.currentChannel });
        chat = React.createElement(TwitchChat, { channel: this.state.currentChannel });
      }

      return React.createElement(
        'div',
        null,
        player,
        chat,
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
          return React.createElement(FavLink, { key: streamFavs.stream._id, stream: streamFavs, onPlay: _this2.handlePlay, onRemove: _this2.handleRemove });
        })
      );
    }
    //Fetch the data from the Twitch 

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
          _this3.setState({ currentChannel: data.featured[0].stream.channel.name });
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }

    //Fetch the data from the DB

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
            var newStream = stream.stream;
            newStream._id = stream._id;
            return newStream;
          });
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

      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: stream,
        type: 'POST',
        success: function success(data) {
          console.log('success');
          _this5.fetch();
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(stream) {
      var _this6 = this;

      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: stream,
        type: 'DELETE',
        success: function success(data) {
          console.log('success');
          _this6.fetch();
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }

    //Change Current Player

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudENoYW5uZWwiLCJmYXZTdHJlYW1zIiwidG9wU3RyZWFtRGF0YSIsImlucHV0VmFsdWUiLCJoYW5kbGVGYXZvcml0ZSIsImJpbmQiLCJoYW5kbGVQbGF5IiwiaGFuZGxlUmVtb3ZlIiwicGxheWVyIiwiY2hhdCIsImxlbmd0aCIsIm1hcCIsInN0cmVhbUxpbmsiLCJzdHJlYW0iLCJfaWQiLCJzdHJlYW1GYXZzIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInR5cGUiLCJoZWFkZXJzIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImZlYXR1cmVkIiwiY2hhbm5lbCIsIm5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXBwZWREYXRhIiwibmV3U3RyZWFtIiwiZmV0Y2giLCJmZXRjaFRvcCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixFQURMO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMscUJBQWUsRUFISjtBQUlYQyxrQkFBWTtBQUpELEtBQWI7O0FBT0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElBQWxCLE9BQXBCO0FBWGlCO0FBWWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1A7QUFDQSxVQUFJRyxNQUFKO0FBQ0EsVUFBSUMsSUFBSjs7QUFFQSxVQUFHLEtBQUtWLEtBQUwsQ0FBV0csYUFBWCxD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UixDQUFZLHFCQUFxQlAsSUFBakM7QUFDRDtBQVZFLE9BQVA7QUFZRDs7O2lDQUVZVixNLEVBQU87QUFBQTs7QUFDbEJHLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGtDQURBO0FBRUxLLGNBQU1WLE1BRkQ7QUFHTE8sY0FBTSxRQUhEO0FBSUxFLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJNLGtCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLGlCQUFLRyxLQUFMO0FBQ0QsU0FQSTtBQVFMTCxlQUFPLGVBQUNMLElBQUQsRUFBVTtBQUNmTSxrQkFBUUMsR0FBUixDQUFZLHFCQUFxQlAsSUFBakM7QUFDRDtBQVZJLE9BQVA7QUFZRDs7QUFFRDs7OzsrQkFDV1YsTSxFQUFPO0FBQ2hCZ0IsY0FBUUMsR0FBUixDQUFZakIsT0FBT0EsTUFBUCxDQUFjYSxPQUFkLENBQXNCQyxJQUFsQztBQUNBLFdBQUtILFFBQUwsQ0FBYyxFQUFDeEIsZ0JBQWdCYSxPQUFPQSxNQUFQLENBQWNhLE9BQWQsQ0FBc0JDLElBQXZDLEVBQWQ7QUFDRDs7OztFQXhIZVEsTUFBTUMsUzs7QUEySHhCQyxPQUFPeEMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRDaGFubmVsOiAnJyxcclxuICAgICAgZmF2U3RyZWFtczogW10sXHJcbiAgICAgIHRvcFN0cmVhbURhdGE6IFtdLFxyXG4gICAgICBpbnB1dFZhbHVlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUZhdm9yaXRlID0gdGhpcy5oYW5kbGVGYXZvcml0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NyZWF0ZSBhIHBsYXllciBvbmx5IGlmIGEgdmlkZW8gZXhpc3RcclxuICAgIHZhciBwbGF5ZXI7XHJcbiAgICB2YXIgY2hhdDtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgIHBsYXllciA9IDxUd2l0Y2hQbGF5ZXIgY2hhbm5lbD17dGhpcy5zdGF0ZS5jdXJyZW50Q2hhbm5lbH0+PC9Ud2l0Y2hQbGF5ZXI+ICBcclxuICAgICBjaGF0ID0gIDxUd2l0Y2hDaGF0IGNoYW5uZWw9e3RoaXMuc3RhdGUuY3VycmVudENoYW5uZWx9PjwvVHdpdGNoQ2hhdD4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3BsYXllcn1cclxuICAgICAge2NoYXR9XHJcbiAgICAgIDxoMz5UT1AgNSBTVFJFQU1TPC9oMz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS50b3BTdHJlYW1EYXRhLm1hcCgoc3RyZWFtTGluaykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxUd2l0Y2hMaW5rIGtleT17c3RyZWFtTGluay5zdHJlYW0uX2lkfSBzdHJlYW09e3N0cmVhbUxpbmt9IG9uRmF2b3JpdGU9e3RoaXMuaGFuZGxlRmF2b3JpdGV9IG9uUGxheT17dGhpcy5oYW5kbGVQbGF5fT48L1R3aXRjaExpbms+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDxoMz5GQVZPUklURSBTVFJFQU1TPC9oMz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5mYXZTdHJlYW1zLm1hcCgoc3RyZWFtRmF2cykgPT57XHJcbiAgICAgICAgICByZXR1cm4gPEZhdkxpbmsga2V5PXtzdHJlYW1GYXZzLnN0cmVhbS5faWR9IHN0cmVhbT17c3RyZWFtRmF2c30gb25QbGF5PXt0aGlzLmhhbmRsZVBsYXl9IG9uUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZX0+PC9GYXZMaW5rPlxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAvL0ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIFR3aXRjaCBcclxuICBmZXRjaFRvcCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLnR3aXRjaC50di9rcmFrZW4vc3RyZWFtcy9mZWF0dXJlZD9saW1pdD01JyxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOlwiYXBwbGljYXRpb24vdm5kLnR3aXRjaHR2LnY1K2pzb25cIixcclxuICAgICAgICBcIkNsaWVudC1JZFwiOlwiOXI0Z3F2ZWltampwNnlvNXJ3YnhmN2k2aGJ5NzVsXCJcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b3BTdHJlYW1EYXRhOiBkYXRhLmZlYXR1cmVkfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudENoYW5uZWw6IGRhdGEuZmVhdHVyZWRbMF0uc3RyZWFtLmNoYW5uZWwubmFtZX0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIERCXHJcbiAgZmV0Y2goKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMzAvZmF2c3RyZWFtcycsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBtYXBwZWREYXRhID0gZGF0YS5tYXAoKHN0cmVhbSkgPT57XHJcbiAgICAgICAgICB2YXIgbmV3U3RyZWFtID0gc3RyZWFtLnN0cmVhbVxyXG4gICAgICAgICAgbmV3U3RyZWFtLl9pZCA9IHN0cmVhbS5faWQ7XHJcbiAgICAgICAgICByZXR1cm4gbmV3U3RyZWFtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmF2U3RyZWFtczogbWFwcGVkRGF0YX0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2goKTtcclxuICAgIHRoaXMuZmV0Y2hUb3AoKTtcclxuICB9XHJcbiAgXHJcbiAgLy9BZGQgRmF2b3JpdGUgU3RyZWFtIHRvIERhdGFiYXNlXHJcbiAgaGFuZGxlRmF2b3JpdGUoc3RyZWFtKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICAgIGRhdGE6IHN0cmVhbSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuICAgICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUoc3RyZWFtKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgZGF0YTogc3RyZWFtLFxyXG4gICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0NoYW5nZSBDdXJyZW50IFBsYXllclxyXG4gIGhhbmRsZVBsYXkoc3RyZWFtKXtcclxuICAgIGNvbnNvbGUubG9nKHN0cmVhbS5zdHJlYW0uY2hhbm5lbC5uYW1lKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRDaGFubmVsOiBzdHJlYW0uc3RyZWFtLmNoYW5uZWwubmFtZX0pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LkFwcCA9IEFwcDtcclxuIl19