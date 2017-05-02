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
      currentChannel: 'summit1g',
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

      if (this.state.topStreamData.length > 1) {
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
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({ currentChannel: this.state.topStreamData[0].stream.channel.name });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudENoYW5uZWwiLCJmYXZTdHJlYW1zIiwidG9wU3RyZWFtRGF0YSIsImlucHV0VmFsdWUiLCJoYW5kbGVGYXZvcml0ZSIsImJpbmQiLCJoYW5kbGVQbGF5IiwiaGFuZGxlUmVtb3ZlIiwicGxheWVyIiwibGVuZ3RoIiwibWFwIiwic3RyZWFtTGluayIsInN0cmVhbSIsIl9pZCIsInN0cmVhbUZhdnMiLCIkIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwidHlwZSIsImhlYWRlcnMiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiZmVhdHVyZWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXBwZWREYXRhIiwibmV3U3RyZWFtIiwiZmV0Y2giLCJmZXRjaFRvcCIsImNoYW5uZWwiLCJuYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCLFVBREw7QUFFWEMsa0JBQVksRUFGRDtBQUdYQyxxQkFBZSxFQUhKO0FBSVhDLGtCQUFZO0FBSkQsS0FBYjs7QUFPQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQixPQUFsQjtBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFYaUI7QUFZbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUDtBQUNBLFVBQUlHLE1BQUo7O0FBRUEsVUFBRyxLQUFLVCxLQUFMLENBQVdHLGFBQVgsQ0FBeUJPLE1BQXpCLEdBQWtDLENBQXJDLEVBQXVDO0FBQ3RDRCxpQkFBUyxvQkFBQyxZQUFELElBQWMsU0FBUyxLQUFLVCxLQUFMLENBQVdDLGNBQWxDLEdBQVQ7QUFDQTs7QUFFRCxhQUNBO0FBQUE7QUFBQTtBQUNHUSxjQURIO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0ssYUFBS1QsS0FBTCxDQUFXRyxhQUFYLENBQXlCUSxHQUF6QixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGlCQUFPLG9CQUFDLFVBQUQsSUFBWSxLQUFLQSxXQUFXQyxNQUFYLENBQWtCQyxHQUFuQyxFQUF3QyxRQUFRRixVQUFoRCxFQUE0RCxZQUFZLE9BQUtQLGNBQTdFLEVBQTZGLFFBQVEsT0FBS0UsVUFBMUcsR0FBUDtBQUNELFNBRkEsQ0FITDtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FORjtBQU9LLGFBQUtQLEtBQUwsQ0FBV0UsVUFBWCxDQUFzQlMsR0FBdEIsQ0FBMEIsVUFBQ0ksVUFBRCxFQUFlO0FBQ3hDLGlCQUFPLG9CQUFDLE9BQUQsSUFBUyxLQUFLQSxXQUFXRixNQUFYLENBQWtCQyxHQUFoQyxFQUFxQyxRQUFRQyxVQUE3QyxFQUF5RCxRQUFRLE9BQUtSLFVBQXRFLEVBQWtGLFVBQVUsT0FBS0MsWUFBakcsR0FBUDtBQUNELFNBRkE7QUFQTCxPQURBO0FBYUQ7QUFDRDs7OzsrQkFDVztBQUFBOztBQUNUUSxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyx1REFEQTtBQUVMQyxrQkFBVSxNQUZMO0FBR0xDLGNBQU0sS0FIRDtBQUlMQyxpQkFBUztBQUNQLG9CQUFTLGtDQURGO0FBRVAsdUJBQVk7QUFGTCxTQUpKO0FBUUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDckIsZUFBZW9CLEtBQUtFLFFBQXJCLEVBQWQ7QUFDRCxTQVZJO0FBV0xDLGVBQU8sZUFBQ0gsSUFBRCxFQUFVO0FBQ2ZJLGtCQUFRQyxHQUFSLENBQVkscUJBQXFCTCxJQUFqQztBQUNEO0FBYkksT0FBUDtBQWVEOztBQUVEOzs7OzRCQUNRO0FBQUE7O0FBQ05QLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGtDQURBO0FBRUxDLGtCQUFVLE1BRkw7QUFHTEMsY0FBTSxLQUhEO0FBSUxFLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakIsY0FBSU0sYUFBYU4sS0FBS1osR0FBTCxDQUFTLFVBQUNFLE1BQUQsRUFBVztBQUNuQyxnQkFBSWlCLFlBQVlqQixPQUFPQSxNQUF2QjtBQUNBaUIsc0JBQVVoQixHQUFWLEdBQWdCRCxPQUFPQyxHQUF2QjtBQUNBLG1CQUFPZ0IsU0FBUDtBQUNELFdBSmdCLENBQWpCO0FBS0EsaUJBQUtOLFFBQUwsQ0FBYyxFQUFDdEIsWUFBWTJCLFVBQWIsRUFBZDtBQUNELFNBWEk7QUFZTEgsZUFBTyxlQUFDSCxJQUFELEVBQVU7QUFDZkksa0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJMLElBQWpDO0FBQ0Q7QUFkSSxPQUFQO0FBZ0JEOzs7d0NBRW1CO0FBQ2xCLFdBQUtRLEtBQUw7QUFDQSxXQUFLQyxRQUFMO0FBQ0Q7OztnREFFMEI7QUFDeEIsV0FBS1IsUUFBTCxDQUFjLEVBQUN2QixnQkFBZ0IsS0FBS0QsS0FBTCxDQUFXRyxhQUFYLENBQXlCLENBQXpCLEVBQTRCVSxNQUE1QixDQUFtQ29CLE9BQW5DLENBQTJDQyxJQUE1RCxFQUFkO0FBQ0Y7O0FBRUQ7Ozs7bUNBQ2VyQixNLEVBQU87QUFBQTs7QUFDcEJHLFFBQUVDLElBQUYsQ0FBTztBQUNIQyxhQUFLLGtDQURGO0FBRUhLLGNBQU1WLE1BRkg7QUFHSE8sY0FBTSxNQUhIO0FBSUhFLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJJLGtCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLGlCQUFLRyxLQUFMO0FBQ0QsU0FQRTtBQVFITCxlQUFPLGVBQUNILElBQUQsRUFBVTtBQUNmSSxrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkwsSUFBakM7QUFDRDtBQVZFLE9BQVA7QUFZRDs7O2lDQUVZVixNLEVBQU87QUFBQTs7QUFDbEJHLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGtDQURBO0FBRUxLLGNBQU1WLE1BRkQ7QUFHTE8sY0FBTSxRQUhEO0FBSUxFLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJJLGtCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLGlCQUFLRyxLQUFMO0FBQ0QsU0FQSTtBQVFMTCxlQUFPLGVBQUNILElBQUQsRUFBVTtBQUNmSSxrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkwsSUFBakM7QUFDRDtBQVZJLE9BQVA7QUFZRDs7QUFFRDs7OzsrQkFDV1YsTSxFQUFPO0FBQ2hCYyxjQUFRQyxHQUFSLENBQVlmLE9BQU9BLE1BQVAsQ0FBY29CLE9BQWQsQ0FBc0JDLElBQWxDO0FBQ0EsV0FBS1YsUUFBTCxDQUFjLEVBQUN2QixnQkFBZ0JZLE9BQU9BLE1BQVAsQ0FBY29CLE9BQWQsQ0FBc0JDLElBQXZDLEVBQWQ7QUFDRDs7OztFQXhIZUMsTUFBTUMsUzs7QUEySHhCQyxPQUFPdkMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRDaGFubmVsOiAnc3VtbWl0MWcnLFxyXG4gICAgICBmYXZTdHJlYW1zOiBbXSxcclxuICAgICAgdG9wU3RyZWFtRGF0YTogW10sXHJcbiAgICAgIGlucHV0VmFsdWU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlRmF2b3JpdGUgPSB0aGlzLmhhbmRsZUZhdm9yaXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVBsYXkgPSB0aGlzLmhhbmRsZVBsYXkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUmVtb3ZlID0gdGhpcy5oYW5kbGVSZW1vdmUuYmluZCh0aGlzKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vY3JlYXRlIGEgcGxheWVyIG9ubHkgaWYgYSB2aWRlbyBleGlzdFxyXG4gICAgdmFyIHBsYXllcjtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubGVuZ3RoID4gMSl7XHJcbiAgICAgcGxheWVyID0gPFR3aXRjaFBsYXllciBjaGFubmVsPXt0aGlzLnN0YXRlLmN1cnJlbnRDaGFubmVsfT48L1R3aXRjaFBsYXllcj4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3BsYXllcn1cclxuICAgICAgPGgzPlRPUCA1IFNUUkVBTVM8L2gzPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubWFwKChzdHJlYW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFR3aXRjaExpbmsga2V5PXtzdHJlYW1MaW5rLnN0cmVhbS5faWR9IHN0cmVhbT17c3RyZWFtTGlua30gb25GYXZvcml0ZT17dGhpcy5oYW5kbGVGYXZvcml0ZX0gb25QbGF5PXt0aGlzLmhhbmRsZVBsYXl9PjwvVHdpdGNoTGluaz5cclxuICAgICAgICB9KX1cclxuICAgICAgPGgzPkZBVk9SSVRFIFNUUkVBTVM8L2gzPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmZhdlN0cmVhbXMubWFwKChzdHJlYW1GYXZzKSA9PntcclxuICAgICAgICAgIHJldHVybiA8RmF2TGluayBrZXk9e3N0cmVhbUZhdnMuc3RyZWFtLl9pZH0gc3RyZWFtPXtzdHJlYW1GYXZzfSBvblBsYXk9e3RoaXMuaGFuZGxlUGxheX0gb25SZW1vdmU9e3RoaXMuaGFuZGxlUmVtb3ZlfT48L0Zhdkxpbms+XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIC8vRmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgVHdpdGNoIFxyXG4gIGZldGNoVG9wKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkudHdpdGNoLnR2L2tyYWtlbi9zdHJlYW1zL2ZlYXR1cmVkP2xpbWl0PTUnLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQWNjZXB0XCI6XCJhcHBsaWNhdGlvbi92bmQudHdpdGNodHYudjUranNvblwiLFxyXG4gICAgICAgIFwiQ2xpZW50LUlkXCI6XCI5cjRncXZlaW1qanA2eW81cndieGY3aTZoYnk3NWxcIlxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcFN0cmVhbURhdGE6IGRhdGEuZmVhdHVyZWR9KVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIERCXHJcbiAgZmV0Y2goKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMzAvZmF2c3RyZWFtcycsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBtYXBwZWREYXRhID0gZGF0YS5tYXAoKHN0cmVhbSkgPT57XHJcbiAgICAgICAgICB2YXIgbmV3U3RyZWFtID0gc3RyZWFtLnN0cmVhbVxyXG4gICAgICAgICAgbmV3U3RyZWFtLl9pZCA9IHN0cmVhbS5faWQ7XHJcbiAgICAgICAgICByZXR1cm4gbmV3U3RyZWFtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmF2U3RyZWFtczogbWFwcGVkRGF0YX0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2goKTtcclxuICAgIHRoaXMuZmV0Y2hUb3AoKTtcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpe1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRDaGFubmVsOiB0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGFbMF0uc3RyZWFtLmNoYW5uZWwubmFtZX0pO1xyXG4gIH1cclxuXHJcbiAgLy9BZGQgRmF2b3JpdGUgU3RyZWFtIHRvIERhdGFiYXNlXHJcbiAgaGFuZGxlRmF2b3JpdGUoc3RyZWFtKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICAgIGRhdGE6IHN0cmVhbSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuICAgICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUoc3RyZWFtKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgZGF0YTogc3RyZWFtLFxyXG4gICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0NoYW5nZSBDdXJyZW50IFBsYXllclxyXG4gIGhhbmRsZVBsYXkoc3RyZWFtKXtcclxuICAgIGNvbnNvbGUubG9nKHN0cmVhbS5zdHJlYW0uY2hhbm5lbC5uYW1lKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRDaGFubmVsOiBzdHJlYW0uc3RyZWFtLmNoYW5uZWwubmFtZX0pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LkFwcCA9IEFwcDtcclxuIl19