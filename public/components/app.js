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
    key: 'fetchTwitch',
    value: function fetchTwitch(query) {
      var _this3 = this;

      var options = {
        queryString: query
      };

      $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/' + options.queryString,
        dataType: 'json',
        type: 'GET',
        headers: {
          "Client-Id": somethingsomething,
          "Accept": "application/vnd.twitchtv.v5+json"
        },
        success: function success(data) {
          if (options.queryString === "featured?limit=5") {
            _this3.setState({ topStreamData: data.featured });
            _this3.setState({ currentChannel: data.featured[0].stream.channel.name });
          }
          console.log(data);
        },
        error: function error(data) {
          console.log('https://api.twitch.tv/kraken/streams/' + options.queryString);
          console.log('Did not receive:' + JSON.stringify(data));
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
          // this.fetchTwitch(this.state.favStreams[0].stream.channel.name);
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
      this.fetchTwitch("featured?limit=5");
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
      this.setState({ currentChannel: stream.stream.channel.name });
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudENoYW5uZWwiLCJmYXZTdHJlYW1zIiwidG9wU3RyZWFtRGF0YSIsImlucHV0VmFsdWUiLCJoYW5kbGVGYXZvcml0ZSIsImJpbmQiLCJoYW5kbGVQbGF5IiwiaGFuZGxlUmVtb3ZlIiwicGxheWVyIiwiY2hhdCIsImxlbmd0aCIsIm1hcCIsInN0cmVhbUxpbmsiLCJzdHJlYW0iLCJfaWQiLCJzdHJlYW1GYXZzIiwicXVlcnkiLCJvcHRpb25zIiwicXVlcnlTdHJpbmciLCIkIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwidHlwZSIsImhlYWRlcnMiLCJzb21ldGhpbmdzb21ldGhpbmciLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiZmVhdHVyZWQiLCJjaGFubmVsIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXBwZWREYXRhIiwibmV3U3RyZWFtIiwiZmV0Y2giLCJmZXRjaFR3aXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixFQURMO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMscUJBQWUsRUFISjtBQUlYQyxrQkFBWTtBQUpELEtBQWI7O0FBT0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElBQWxCLE9BQXBCO0FBWGlCO0FBWWxCOzs7OzZCQUVRO0FB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QkksT0FBUDtBQWtCRDs7O3dDQUVtQjtBQUNsQixXQUFLWSxLQUFMO0FBQ0EsV0FBS0MsV0FBTCxDQUFpQixrQkFBakI7QUFDRDs7QUFFRDs7OzttQ0FDZTNCLE0sRUFBTztBQUFBOztBQUNwQk0sUUFBRUMsSUFBRixDQUFPO0FBQ0hDLGFBQUssa0NBREY7QUFFSE0sY0FBTWQsTUFGSDtBQUdIVSxjQUFNLE1BSEg7QUFJSEcsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQkssa0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsaUJBQUtNLEtBQUw7QUFDRCxTQVBFO0FBUUhMLGVBQU8sZUFBQ1AsSUFBRCxFQUFVO0FBQ2ZLLGtCQUFRQyxHQUFSLENBQVkscUJBQXFCTixJQUFqQztBQUNEO0FBVkUsT0FBUDtBQVlEOzs7aUNBRVlkLE0sRUFBTztBQUFBOztBQUNsQk0sUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssa0NBREE7QUFFTE0sY0FBTWQsTUFGRDtBQUdMVSxjQUFNLFFBSEQ7QUFJTEcsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQkssa0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsaUJBQUtNLEtBQUw7QUFDRCxTQVBJO0FBUUxMLGVBQU8sZUFBQ1AsSUFBRCxFQUFVO0FBQ2ZLLGtCQUFRQyxHQUFSLENBQVkscUJBQXFCTixJQUFqQztBQUNEO0FBVkksT0FBUDtBQVlEOztBQUVEOzs7OytCQUNXZCxNLEVBQU87QUFDaEIsV0FBS2UsUUFBTCxDQUFjLEVBQUM1QixnQkFBZ0JhLE9BQU9BLE1BQVAsQ0FBY2lCLE9BQWQsQ0FBc0JDLElBQXZDLEVBQWQ7QUFDRDs7OztFQWpJZVUsTUFBTUMsUzs7QUFvSXhCQyxPQUFPOUMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRDaGFubmVsOiAnJyxcclxuICAgICAgZmF2U3RyZWFtczogW10sXHJcbiAgICAgIHRvcFN0cmVhbURhdGE6IFtdLFxyXG4gICAgICBpbnB1dFZhbHVlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUZhdm9yaXRlID0gdGhpcy5oYW5kbGVGYXZvcml0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NyZWF0ZSBhIHBsYXllciBvbmx5IGlmIGEgdmlkZW8gZXhpc3RcclxuICAgIHZhciBwbGF5ZXI7XHJcbiAgICB2YXIgY2hhdDtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgIHBsYXllciA9IDxUd2l0Y2hQbGF5ZXIgY2hhbm5lbD17dGhpcy5zdGF0ZS5jdXJyZW50Q2hhbm5lbH0+PC9Ud2l0Y2hQbGF5ZXI+ICBcclxuICAgICBjaGF0ID0gIDxUd2l0Y2hDaGF0IGNoYW5uZWw9e3RoaXMuc3RhdGUuY3VycmVudENoYW5uZWx9PjwvVHdpdGNoQ2hhdD4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3BsYXllcn1cclxuICAgICAge2NoYXR9XHJcbiAgICAgIDxoMz5UT1AgNSBTVFJFQU1TPC9oMz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS50b3BTdHJlYW1EYXRhLm1hcCgoc3RyZWFtTGluaykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxUd2l0Y2hMaW5rIGtleT17c3RyZWFtTGluay5zdHJlYW0uX2lkfSBzdHJlYW09e3N0cmVhbUxpbmt9IG9uRmF2b3JpdGU9e3RoaXMuaGFuZGxlRmF2b3JpdGV9IG9uUGxheT17dGhpcy5oYW5kbGVQbGF5fT48L1R3aXRjaExpbms+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDxoMz5GQVZPUklURSBTVFJFQU1TPC9oMz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5mYXZTdHJlYW1zLm1hcCgoc3RyZWFtRmF2cykgPT57XHJcbiAgICAgICAgICByZXR1cm4gPEZhdkxpbmsga2V5PXtzdHJlYW1GYXZzLnN0cmVhbS5faWR9IHN0cmVhbT17c3RyZWFtRmF2c30gb25QbGF5PXt0aGlzLmhhbmRsZVBsYXl9IG9uUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZX0+PC9GYXZMaW5rPlxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAvL0ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIFR3aXRjaCBcclxuICBmZXRjaFR3aXRjaChxdWVyeSkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgIHF1ZXJ5U3RyaW5nOiBxdWVyeVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwczovL2FwaS50d2l0Y2gudHYva3Jha2VuL3N0cmVhbXMvJyArIG9wdGlvbnMucXVlcnlTdHJpbmcsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDbGllbnQtSWRcIjogc29tZXRoaW5nc29tZXRoaW5nLFxyXG4gICAgICAgIFwiQWNjZXB0XCI6XCJhcHBsaWNhdGlvbi92bmQudHdpdGNodHYudjUranNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5xdWVyeVN0cmluZyA9PT0gXCJmZWF0dXJlZD9saW1pdD01XCIpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcFN0cmVhbURhdGE6IGRhdGEuZmVhdHVyZWR9KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRDaGFubmVsOiBkYXRhLmZlYXR1cmVkWzBdLnN0cmVhbS5jaGFubmVsLm5hbWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2h0dHBzOi8vYXBpLnR3aXRjaC50di9rcmFrZW4vc3RyZWFtcy8nICsgb3B0aW9ucy5xdWVyeVN0cmluZylcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9GZXRjaCB0aGUgZGF0YSBmcm9tIHRoZSBEQlxyXG4gIGZldGNoKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICB2YXIgbWFwcGVkRGF0YSA9IGRhdGEubWFwKChzdHJlYW0pID0+e1xyXG4gICAgICAgICAgdmFyIG5ld1N0cmVhbSA9IHN0cmVhbS5zdHJlYW1cclxuICAgICAgICAgIG5ld1N0cmVhbS5faWQgPSBzdHJlYW0uX2lkO1xyXG4gICAgICAgICAgcmV0dXJuIG5ld1N0cmVhbVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmF2U3RyZWFtczogbWFwcGVkRGF0YX0pO1xyXG4gICAgICAgIC8vIHRoaXMuZmV0Y2hUd2l0Y2godGhpcy5zdGF0ZS5mYXZTdHJlYW1zWzBdLnN0cmVhbS5jaGFubmVsLm5hbWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2goKTtcclxuICAgIHRoaXMuZmV0Y2hUd2l0Y2goXCJmZWF0dXJlZD9saW1pdD01XCIpO1xyXG4gIH1cclxuICBcclxuICAvL0FkZCBGYXZvcml0ZSBTdHJlYW0gdG8gRGF0YWJhc2VcclxuICBoYW5kbGVGYXZvcml0ZShzdHJlYW0pe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMzAvZmF2c3RyZWFtcycsXHJcbiAgICAgICAgZGF0YTogc3RyZWFtLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZShzdHJlYW0pe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICBkYXRhOiBzdHJlYW0sXHJcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaWQgbm90IHJlY2VpdmU6JyArIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vQ2hhbmdlIEN1cnJlbnQgUGxheWVyXHJcbiAgaGFuZGxlUGxheShzdHJlYW0pe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudENoYW5uZWw6IHN0cmVhbS5zdHJlYW0uY2hhbm5lbC5uYW1lfSk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuQXBwID0gQXBwO1xyXG4iXX0=