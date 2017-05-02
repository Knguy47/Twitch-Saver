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
          console.log(data);
          var mappedData = data.map(function (stream) {
            var newStream = stream.stream;
            newStream._id = stream._id;
            return newStream;
          });
          console.log(JSON.stringify(mappedData));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudENoYW5uZWwiLCJmYXZTdHJlYW1zIiwidG9wU3RyZWFtRGF0YSIsImlucHV0VmFsdWUiLCJoYW5kbGVGYXZvcml0ZSIsImJpbmQiLCJoYW5kbGVQbGF5IiwiaGFuZGxlUmVtb3ZlIiwicGxheWVyIiwibGVuZ3RoIiwibWFwIiwic3RyZWFtTGluayIsInN0cmVhbSIsIl9pZCIsInN0cmVhbUZhdnMiLCIkIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwidHlwZSIsImhlYWRlcnMiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiZmVhdHVyZWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXBwZWREYXRhIiwibmV3U3RyZWFtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwiZmV0Y2hUb3AiLCJjaGFubmVsIiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixVQURMO0FBRVhDLGtCQUFZLEVBRkQ7QUFHWEMscUJBQWUsRUFISjtBQUlYQyxrQkFBWTtBQUpELEtBQWI7O0FBT0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElBQWxCLE9BQXBCO0FBWGlCO0FBWWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1A7QUFDQSxVQUFJRyxNQUFKOztBQUVBLFVBQUcsS0FBS1QsS0FBTCxDQUFXRyxhQUFYLENBQXlCTyxNQUF6QixHQUFrQyxDQUFyQyxFQUF1QztBQUN0Q0QsaUJBQVMsb0JBQUMsWUFBRCxJQUFjLFNBQVMsS0FBS1QsS0FBTCxDQUFXQyxjQUFsQyxHQUFUO0FBQ0E7O0FBRUQsYUFDQTtBQUFBO0FBQUE7QUFDR1EsY0FESDtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdLLGFBQUtULEtBQUwsQ0FBV0csYUFBWCxDQUF5QlEsR0FBekIsQ0FBNkIsVUFBQ0MsVUFBRCxFQUFnQjtBQUM1QyxpQkFBTyxvQkFBQyxVQUFELElBQVksS0FBS0EsV0FBV0MsTUFBWCxDQUFrQkMsR0FBbkMsRUFBd0MsUUFBUUYsVUFBaEQsRUFBNEQsWUFBWSxPQUFLUCxjQUE3RSxFQUE2RixRQUFRLE9BQUtFLFVBQTFHLEdBQVA7QUFDRCxTQUZBLENBSEw7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTkY7QUFPSyxhQUFLUCxLQUFMLENBQVdFLFVBQVgsQ0FBc0JTLEdBQXRCLENBQTBCLFVBQUNJLFVBQUQsRUFBZTtBQUN4QyxpQkFBTyxvQkFBQyxPQUFELElBQVMsS0FBS0EsV0FBV0YsTUFBWCxDQUFrQkMsR0FBaEMsRUFBcUMsUUFBUUMsVUFBN0MsRUFBeUQsUUFBUSxPQUFLUixVQUF0RSxFQUFrRixVQUFVLE9BQUtDLFlBQWpHLEdBQVA7QUFDRCxTQUZBO0FBUEwsT0FEQTtBQWFEO0FBQ0Q7Ozs7K0JBQ1c7QUFBQTs7QUFDVFEsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssdURBREE7QUFFTEMsa0JBQVUsTUFGTDtBQUdMQyxjQUFNLEtBSEQ7QUFJTEMsaUJBQVM7QUFDUCxvQkFBUyxrQ0FERjtBQUVQLHVCQUFZO0FBRkwsU0FKSjtBQVFMQyxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCLGlCQUFLQyxRQUFMLENBQWMsRUFBQ3JCLGVBQWVvQixLQUFLRSxRQUFyQixFQUFkO0FBQ0QsU0FWSTtBQVdMQyxlQUFPLGVBQUNILElBQUQsRUFBVTtBQUNmSSxrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkwsSUFBakM7QUFDRDtBQWJJLE9BQVA7QUFlRDs7QUFFRDs7Ozs0QkFDUTtBQUFBOztBQUNOUCxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxrQ0FEQTtBQUVMQyxrQkFBVSxNQUZMO0FBR0xDLGNBQU0sS0FIRDtBQUlMRSxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCSSxrQkFBUUMsR0FBUixDQUFZTCxJQUFaO0FBQ0EsY0FBSU0sYUFBYU4sS0FBS1osR0FBTCxDQUFTLFVBQUNFLE1BQUQsRUFBVztBQUNuQyxnQkFBSWlCLFlBQVlqQixPQUFPQSxNQUF2QjtBQUNBaUIsc0JBQVVoQixHQUFWLEdBQWdCRCxPQUFPQyxHQUF2QjtBQUNBLG1CQUFPZ0IsU0FBUDtBQUNELFdBSmdCLENBQWpCO0FBS0FILGtCQUFRQyxHQUFSLENBQVlHLEtBQUtDLFNBQUwsQ0FBZUgsVUFBZixDQUFaO0FBQ0EsaUJBQUtMLFFBQUwsQ0FBYyxFQUFDdEIsWUFBWTJCLFVBQWIsRUFBZDtBQUNELFNBYkk7QUFjTEgsZUFBTyxlQUFDSCxJQUFELEVBQVU7QUFDZkksa0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJMLElBQWpDO0FBQ0Q7QUFoQkksT0FBUDtBQWtCRDs7O3dDQUVtQjtBQUNsQixXQUFLVSxLQUFMO0FBQ0EsV0FBS0MsUUFBTDtBQUNEOzs7Z0RBRTBCO0FBQ3hCLFdBQUtWLFFBQUwsQ0FBYyxFQUFDdkIsZ0JBQWdCLEtBQUtELEtBQUwsQ0FBV0csYUFBWCxDQUF5QixDQUF6QixFQUE0QlUsTUFBNUIsQ0FBbUNzQixPQUFuQyxDQUEyQ0MsSUFBNUQsRUFBZDtBQUNGOztBQUVEOzs7O21DQUNldkIsTSxFQUFPO0FBQUE7O0FBQ3BCRyxRQUFFQyxJQUFGLENBQU87QUFDSEMsYUFBSyxrQ0FERjtBQUVISyxjQUFNVixNQUZIO0FBR0hPLGNBQU0sTUFISDtBQUlIRSxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCSSxrQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxpQkFBS0ssS0FBTDtBQUNELFNBUEU7QUFRSFAsZUFBTyxlQUFDSCxJQUFELEVBQVU7QUFDZkksa0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJMLElBQWpDO0FBQ0Q7QUFWRSxPQUFQO0FBWUQ7OztpQ0FFWVYsTSxFQUFPO0FBQUE7O0FBQ2xCRyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxrQ0FEQTtBQUVMSyxjQUFNVixNQUZEO0FBR0xPLGNBQU0sUUFIRDtBQUlMRSxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCSSxrQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxpQkFBS0ssS0FBTDtBQUNELFNBUEk7QUFRTFAsZUFBTyxlQUFDSCxJQUFELEVBQVU7QUFDZkksa0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJMLElBQWpDO0FBQ0Q7QUFWSSxPQUFQO0FBWUQ7O0FBRUQ7Ozs7K0JBQ1dWLE0sRUFBTztBQUNoQmMsY0FBUUMsR0FBUixDQUFZZixPQUFPQSxNQUFQLENBQWNzQixPQUFkLENBQXNCQyxJQUFsQztBQUNBLFdBQUtaLFFBQUwsQ0FBYyxFQUFDdkIsZ0JBQWdCWSxPQUFPQSxNQUFQLENBQWNzQixPQUFkLENBQXNCQyxJQUF2QyxFQUFkO0FBQ0Q7Ozs7RUExSGVDLE1BQU1DLFM7O0FBNkh4QkMsT0FBT3pDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjdXJyZW50Q2hhbm5lbDogJ3N1bW1pdDFnJyxcclxuICAgICAgZmF2U3RyZWFtczogW10sXHJcbiAgICAgIHRvcFN0cmVhbURhdGE6IFtdLFxyXG4gICAgICBpbnB1dFZhbHVlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUZhdm9yaXRlID0gdGhpcy5oYW5kbGVGYXZvcml0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICAvL2NyZWF0ZSBhIHBsYXllciBvbmx5IGlmIGEgdmlkZW8gZXhpc3RcclxuICAgIHZhciBwbGF5ZXI7XHJcblxyXG4gICAgaWYodGhpcy5zdGF0ZS50b3BTdHJlYW1EYXRhLmxlbmd0aCA+IDEpe1xyXG4gICAgIHBsYXllciA9IDxUd2l0Y2hQbGF5ZXIgY2hhbm5lbD17dGhpcy5zdGF0ZS5jdXJyZW50Q2hhbm5lbH0+PC9Ud2l0Y2hQbGF5ZXI+ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwbGF5ZXJ9XHJcbiAgICAgIDxoMz5UT1AgNSBTVFJFQU1TPC9oMz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS50b3BTdHJlYW1EYXRhLm1hcCgoc3RyZWFtTGluaykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxUd2l0Y2hMaW5rIGtleT17c3RyZWFtTGluay5zdHJlYW0uX2lkfSBzdHJlYW09e3N0cmVhbUxpbmt9IG9uRmF2b3JpdGU9e3RoaXMuaGFuZGxlRmF2b3JpdGV9IG9uUGxheT17dGhpcy5oYW5kbGVQbGF5fT48L1R3aXRjaExpbms+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDxoMz5GQVZPUklURSBTVFJFQU1TPC9oMz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5mYXZTdHJlYW1zLm1hcCgoc3RyZWFtRmF2cykgPT57XHJcbiAgICAgICAgICByZXR1cm4gPEZhdkxpbmsga2V5PXtzdHJlYW1GYXZzLnN0cmVhbS5faWR9IHN0cmVhbT17c3RyZWFtRmF2c30gb25QbGF5PXt0aGlzLmhhbmRsZVBsYXl9IG9uUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZX0+PC9GYXZMaW5rPlxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAvL0ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIFR3aXRjaCBcclxuICBmZXRjaFRvcCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLnR3aXRjaC50di9rcmFrZW4vc3RyZWFtcy9mZWF0dXJlZD9saW1pdD01JyxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOlwiYXBwbGljYXRpb24vdm5kLnR3aXRjaHR2LnY1K2pzb25cIixcclxuICAgICAgICBcIkNsaWVudC1JZFwiOlwiOXI0Z3F2ZWltampwNnlvNXJ3YnhmN2k2aGJ5NzVsXCJcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b3BTdHJlYW1EYXRhOiBkYXRhLmZlYXR1cmVkfSlcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9GZXRjaCB0aGUgZGF0YSBmcm9tIHRoZSBEQlxyXG4gIGZldGNoKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIHZhciBtYXBwZWREYXRhID0gZGF0YS5tYXAoKHN0cmVhbSkgPT57XHJcbiAgICAgICAgICB2YXIgbmV3U3RyZWFtID0gc3RyZWFtLnN0cmVhbVxyXG4gICAgICAgICAgbmV3U3RyZWFtLl9pZCA9IHN0cmVhbS5faWQ7XHJcbiAgICAgICAgICByZXR1cm4gbmV3U3RyZWFtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobWFwcGVkRGF0YSkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZhdlN0cmVhbXM6IG1hcHBlZERhdGF9KTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmZldGNoKCk7XHJcbiAgICB0aGlzLmZldGNoVG9wKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKXtcclxuICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50Q2hhbm5lbDogdGhpcy5zdGF0ZS50b3BTdHJlYW1EYXRhWzBdLnN0cmVhbS5jaGFubmVsLm5hbWV9KTtcclxuICB9XHJcblxyXG4gIC8vQWRkIEZhdm9yaXRlIFN0cmVhbSB0byBEYXRhYmFzZVxyXG4gIGhhbmRsZUZhdm9yaXRlKHN0cmVhbSl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgICBkYXRhOiBzdHJlYW0sXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpXHJcbiAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWQgbm90IHJlY2VpdmU6JyArIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlKHN0cmVhbSl7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMzAvZmF2c3RyZWFtcycsXHJcbiAgICAgIGRhdGE6IHN0cmVhbSxcclxuICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9DaGFuZ2UgQ3VycmVudCBQbGF5ZXJcclxuICBoYW5kbGVQbGF5KHN0cmVhbSl7XHJcbiAgICBjb25zb2xlLmxvZyhzdHJlYW0uc3RyZWFtLmNoYW5uZWwubmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50Q2hhbm5lbDogc3RyZWFtLnN0cmVhbS5jaGFubmVsLm5hbWV9KTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5BcHAgPSBBcHA7XHJcbiJdfQ==