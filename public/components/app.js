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
      favStreams: [],
      topStreamData: [],
      inputValue: ''
    };

    _this.handleFavorite = _this.handleFavorite.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var player;

      if (this.state.topStreamData.length > 1) {
        player = React.createElement(TwitchPlayer, { channel: this.state.topStreamData[0].stream.channel.name });
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
          return React.createElement(TwitchLink, { key: streamLink.stream._id, stream: streamLink, onFavorite: _this2.handleFavorite });
        }),
        React.createElement(
          'h3',
          null,
          'FAVORITE STREAMS'
        ),
        this.state.favStreams.map(function (streamFavs) {
          return React.createElement(FavLink, { key: streamFavs.title, stream: streamFavs });
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
          console.log(data);
          _this4.setState({ favStreams: data });
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
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  }, {
    key: 'handleFavorite',
    value: function handleFavorite(stream) {
      var _this5 = this;

      console.log(stream);
      var data = {
        title: stream.stream.channel.url,
        url: stream.stream.channel.name
      };
      console.log(data);
      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: data,
        type: 'POST',
        success: function success(data) {
          _this5.setState({ inputValue: '' });
          _this5.fetch();
        },
        error: function error(data) {
          _this5.setState({ inputValue: '' });
          console.log('Did not receive:' + data);
        }
      });
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZmF2U3RyZWFtcyIsInRvcFN0cmVhbURhdGEiLCJpbnB1dFZhbHVlIiwiaGFuZGxlRmF2b3JpdGUiLCJiaW5kIiwicGxheWVyIiwibGVuZ3RoIiwic3RyZWFtIiwiY2hhbm5lbCIsIm5hbWUiLCJtYXAiLCJzdHJlYW1MaW5rIiwiX2lkIiwic3RyZWFtRmF2cyIsInRpdGxlIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInR5cGUiLCJoZWFkZXJzIiwic3VjY2VzcyIsImRhdGEiLCJzZXRTdGF0ZSIsImZlYXR1cmVkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJmZXRjaFRvcCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLHFCQUFlLEVBRko7QUFHWEMsa0JBQVk7QUFIRCxLQUFiOztBQU1BLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFSaUI7QUFTbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJQyxNQUFKOztBQUVBLFVBQUcsS0FBS04sS0FBTCxDQUFXRSxhQUFYLENBQXlCSyxNQUF6QixHQUFrQyxDQUFyQyxFQUF1QztBQUN0Q0QsaUJBQVMsb0JBQUMsWUFBRCxJQUFjLFNBQVMsS0FBS04sS0FBTCxDQUFXRSxhQUFYLENBQXlCLENBQXpCLEVBQTRCTSxNQUE1QixDQUFtQ0MsT0FBbkMsQ0FBMkNDLElBQWxFLEdBQVQ7QUFDQTs7QUFFRCxhQUNBO0FBQUE7QUFBQTtBQUNHSixjQURIO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0ssYUFBS04sS0FBTCxDQUFXRSxhQUFYLENBQXlCUyxHQUF6QixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGlCQUFPLG9CQUFDLFVBQUQsSUFBWSxLQUFLQSxXQUFXSixNQUFYLENBQWtCSyxHQUFuQyxFQUF3QyxRQUFRRCxVQUFoRCxFQUE0RCxZQUFZLE9BQUtSLGNBQTdFLEdBQVA7QUFDRCxTQUZBLENBSEw7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTkY7QUFPSyxhQUFLSixLQUFMLENBQVdDLFVBQVgsQ0FBc0JVLEdBQXRCLENBQTBCLFVBQUNHLFVBQUQsRUFBZTtBQUN4QyxpQkFBTyxvQkFBQyxPQUFELElBQVMsS0FBS0EsV0FBV0MsS0FBekIsRUFBZ0MsUUFBUUQsVUFBeEMsR0FBUDtBQUNELFNBRkE7QUFQTCxPQURBO0FBYUQ7QUFDRDs7OzsrQkFDVztBQUFBOztBQUNURSxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyx1REFEQTtBQUVMQyxrQkFBVSxNQUZMO0FBR0xDLGNBQU0sS0FIRDtBQUlMQyxpQkFBUztBQUNQLG9CQUFTLGtDQURGO0FBRVAsdUJBQVk7QUFGTCxTQUpKO0FBUUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDdEIsZUFBZXFCLEtBQUtFLFFBQXJCLEVBQWQ7QUFDRCxTQVZJO0FBV0xDLGVBQU8sZUFBQ0gsSUFBRCxFQUFVO0FBQ2ZJLGtCQUFRQyxHQUFSLENBQVkscUJBQXFCTCxJQUFqQztBQUNEO0FBYkksT0FBUDtBQWVEOztBQUVEOzs7OzRCQUNRO0FBQUE7O0FBQ05QLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGtDQURBO0FBRUxDLGtCQUFVLE1BRkw7QUFHTEMsY0FBTSxLQUhEO0FBSUxFLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJJLGtCQUFRQyxHQUFSLENBQVlMLElBQVo7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUN2QixZQUFZc0IsSUFBYixFQUFkO0FBQ0QsU0FQSTtBQVFMRyxlQUFPLGVBQUNILElBQUQsRUFBVTtBQUNmSSxrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkwsSUFBakM7QUFDRDtBQVZJLE9BQVA7QUFZRDs7O3dDQUVtQjtBQUNsQixXQUFLTSxLQUFMO0FBQ0EsV0FBS0MsUUFBTDtBQUNEOzs7c0NBRWlCQyxLLEVBQU87QUFDdkIsV0FBS1AsUUFBTCxDQUFjLEVBQUNyQixZQUFZNEIsTUFBTUMsTUFBTixDQUFhQyxLQUExQixFQUFkO0FBQ0Q7OzttQ0FFY3pCLE0sRUFBTztBQUFBOztBQUNwQm1CLGNBQVFDLEdBQVIsQ0FBWXBCLE1BQVo7QUFDQSxVQUFJZSxPQUFPO0FBQ1RSLGVBQU9QLE9BQU9BLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQlMsR0FEcEI7QUFFVEEsYUFBS1YsT0FBT0EsTUFBUCxDQUFjQyxPQUFkLENBQXNCQztBQUZsQixPQUFYO0FBSUFpQixjQUFRQyxHQUFSLENBQVlMLElBQVo7QUFDQVAsUUFBRUMsSUFBRixDQUFPO0FBQ0hDLGFBQUssa0NBREY7QUFFSEssY0FBTUEsSUFGSDtBQUdISCxjQUFNLE1BSEg7QUFJSEUsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQixpQkFBS0MsUUFBTCxDQUFjLEVBQUNyQixZQUFZLEVBQWIsRUFBZDtBQUNBLGlCQUFLMEIsS0FBTDtBQUNELFNBUEU7QUFRSEgsZUFBTyxlQUFDSCxJQUFELEVBQVU7QUFDZixpQkFBS0MsUUFBTCxDQUFjLEVBQUNyQixZQUFZLEVBQWIsRUFBZDtBQUNBd0Isa0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJMLElBQWpDO0FBQ0Q7QUFYRSxPQUFQO0FBYUQ7Ozs7RUFqR2VXLE1BQU1DLFM7O0FBb0d4QkMsT0FBT3RDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmYXZTdHJlYW1zOiBbXSxcclxuICAgICAgdG9wU3RyZWFtRGF0YTogW10sXHJcbiAgICAgIGlucHV0VmFsdWU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlRmF2b3JpdGUgPSB0aGlzLmhhbmRsZUZhdm9yaXRlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgcGxheWVyO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudG9wU3RyZWFtRGF0YS5sZW5ndGggPiAxKXtcclxuICAgICBwbGF5ZXIgPSA8VHdpdGNoUGxheWVyIGNoYW5uZWw9e3RoaXMuc3RhdGUudG9wU3RyZWFtRGF0YVswXS5zdHJlYW0uY2hhbm5lbC5uYW1lfT48L1R3aXRjaFBsYXllcj4gIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3BsYXllcn1cclxuICAgICAgPGgzPlRPUCA1IFNUUkVBTVM8L2gzPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubWFwKChzdHJlYW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFR3aXRjaExpbmsga2V5PXtzdHJlYW1MaW5rLnN0cmVhbS5faWR9IHN0cmVhbT17c3RyZWFtTGlua30gb25GYXZvcml0ZT17dGhpcy5oYW5kbGVGYXZvcml0ZX0+PC9Ud2l0Y2hMaW5rPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8aDM+RkFWT1JJVEUgU1RSRUFNUzwvaDM+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZmF2U3RyZWFtcy5tYXAoKHN0cmVhbUZhdnMpID0+e1xyXG4gICAgICAgICAgcmV0dXJuIDxGYXZMaW5rIGtleT17c3RyZWFtRmF2cy50aXRsZX0gc3RyZWFtPXtzdHJlYW1GYXZzfT48L0Zhdkxpbms+XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIC8vZmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgVHdpdGNoIFxyXG4gIGZldGNoVG9wKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkudHdpdGNoLnR2L2tyYWtlbi9zdHJlYW1zL2ZlYXR1cmVkP2xpbWl0PTUnLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQWNjZXB0XCI6XCJhcHBsaWNhdGlvbi92bmQudHdpdGNodHYudjUranNvblwiLFxyXG4gICAgICAgIFwiQ2xpZW50LUlkXCI6XCI5cjRncXZlaW1qanA2eW81cndieGY3aTZoYnk3NWxcIlxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcFN0cmVhbURhdGE6IGRhdGEuZmVhdHVyZWR9KVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL2ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIERCXHJcbiAgZmV0Y2goKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMzAvZmF2c3RyZWFtcycsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZhdlN0cmVhbXM6IGRhdGF9KVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2goKTtcclxuICAgIHRoaXMuZmV0Y2hUb3AoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUZhdm9yaXRlKHN0cmVhbSl7XHJcbiAgICBjb25zb2xlLmxvZyhzdHJlYW0pO1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHRpdGxlOiBzdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsLFxyXG4gICAgICB1cmw6IHN0cmVhbS5zdHJlYW0uY2hhbm5lbC5uYW1lXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbHVlOiAnJ30pO1xyXG4gICAgICAgICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbHVlOiAnJ30pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuQXBwID0gQXBwO1xyXG4iXX0=