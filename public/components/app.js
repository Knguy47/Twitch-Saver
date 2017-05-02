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
      topStreamData: window.fakeData.featured,
      inputValue: ''
    };

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'TOP 5 STREAMS'
        ),
        this.state.topStreamData.map(function (streamLink) {
          return React.createElement(TwitchLink, { key: streamLink.stream._id, stream: streamLink });
        }),
        React.createElement('input', { onChange: this.handleInputChange, value: this.state.inputValue }),
        React.createElement(
          'button',
          { onClick: this.handleButtonClick },
          'Submit Your Favorite Stream'
        )
      );
    }
    //fetch the data from the DB

  }, {
    key: 'fetchTop',
    value: function fetchTop() {
      var _this2 = this;

      $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/featured?limit=5',
        dataType: 'json',
        type: 'GET',
        headers: {
          "Accept": "application/vnd.twitchtv.v5+json",
          "Client-Id": "9r4gqveimjjp6yo5rwbxf7i6hby75l"
        },
        success: function success(data) {
          console.log(data);
          _this2.setState({ topStreamData: data.featured });
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      var _this3 = this;

      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        dataType: 'json',
        type: 'GET',
        success: function success(data) {
          console.log(data);
          _this3.setState({ favStreams: data });
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
    key: 'handleButtonClick',
    value: function handleButtonClick(event) {
      var _this4 = this;

      var data = {
        title: this.state.inputValue,
        url: this.state.inputValue
      };

      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: data,
        type: 'POST',
        success: function success(data) {
          _this4.setState({ inputValue: '' });
          _this4.fetch();
        },
        error: function error(data) {
          _this4.setState({ inputValue: '' });
          console.log('Did not receive:' + data);
        }
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZmF2U3RyZWFtcyIsInRvcFN0cmVhbURhdGEiLCJ3aW5kb3ciLCJmYWtlRGF0YSIsImZlYXR1cmVkIiwiaW5wdXRWYWx1ZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiYmluZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwibWFwIiwic3RyZWFtTGluayIsInN0cmVhbSIsIl9pZCIsIiQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJ0eXBlIiwiaGVhZGVycyIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXJyb3IiLCJmZXRjaCIsImZldGNoVG9wIiwiZXZlbnQiLCJ0aXRsZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxxQkFBZUMsT0FBT0MsUUFBUCxDQUFnQkMsUUFGcEI7QUFHWEMsa0JBQVk7QUFIRCxLQUFiOztBQU1BLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6QjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QixPQUF6QjtBQVRpQjtBQVVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0E7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUssYUFBS1IsS0FBTCxDQUFXRSxhQUFYLENBQXlCUSxHQUF6QixDQUE2QixVQUFDQyxVQUFELEVBQWdCO0FBQzVDLGlCQUFPLG9CQUFDLFVBQUQsSUFBWSxLQUFLQSxXQUFXQyxNQUFYLENBQWtCQyxHQUFuQyxFQUF3QyxRQUFRRixVQUFoRCxHQUFQO0FBQ0QsU0FGQSxDQUZMO0FBS0UsdUNBQU8sVUFBVSxLQUFLRixpQkFBdEIsRUFBeUMsT0FBTyxLQUFLVCxLQUFMLENBQVdNLFVBQTNELEdBTEY7QUFNRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtDLGlCQUF0QjtBQUFBO0FBQUE7QUFORixPQURBO0FBVUQ7QUFDRDs7OzsrQkFDVztBQUFBOztBQUNUTyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyx1REFEQTtBQUVMQyxrQkFBVSxNQUZMO0FBR0xDLGNBQU0sS0FIRDtBQUlMQyxpQkFBUztBQUNQLG9CQUFTLGtDQURGO0FBRVAsdUJBQVk7QUFGTCxTQUpKO0FBUUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQSxpQkFBS0csUUFBTCxDQUFjLEVBQUN0QixlQUFlbUIsS0FBS2hCLFFBQXJCLEVBQWQ7QUFDRCxTQVhJO0FBWUxvQixlQUFPLGVBQUNKLElBQUQsRUFBVTtBQUNmQyxrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkYsSUFBakM7QUFDRDtBQWRJLE9BQVA7QUFnQkQ7Ozs0QkFDTztBQUFBOztBQUNOUCxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxrQ0FEQTtBQUVMQyxrQkFBVSxNQUZMO0FBR0xDLGNBQU0sS0FIRDtBQUlMRSxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsaUJBQUtHLFFBQUwsQ0FBYyxFQUFDdkIsWUFBWW9CLElBQWIsRUFBZDtBQUNELFNBUEk7QUFRTEksZUFBTyxlQUFDSixJQUFELEVBQVU7QUFDZkMsa0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJGLElBQWpDO0FBQ0Q7QUFWSSxPQUFQO0FBWUQ7Ozt3Q0FFbUI7QUFDbEIsV0FBS0ssS0FBTDtBQUNBLFdBQUtDLFFBQUw7QUFDRDs7O3NDQUVpQkMsSyxFQUFPO0FBQUE7O0FBQ3ZCLFVBQUlQLE9BQU87QUFDVFEsZUFBTyxLQUFLN0IsS0FBTCxDQUFXTSxVQURUO0FBRVRVLGFBQUssS0FBS2hCLEtBQUwsQ0FBV007QUFGUCxPQUFYOztBQUtBUSxRQUFFQyxJQUFGLENBQU87QUFDSEMsYUFBSyxrQ0FERjtBQUVISyxjQUFNQSxJQUZIO0FBR0hILGNBQU0sTUFISDtBQUlIRSxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCLGlCQUFLRyxRQUFMLENBQWMsRUFBQ2xCLFlBQVksRUFBYixFQUFkO0FBQ0EsaUJBQUtvQixLQUFMO0FBQ0QsU0FQRTtBQVFIRCxlQUFPLGVBQUNKLElBQUQsRUFBVTtBQUNmLGlCQUFLRyxRQUFMLENBQWMsRUFBQ2xCLFlBQVksRUFBYixFQUFkO0FBQ0FnQixrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkYsSUFBakM7QUFDRDtBQVhFLE9BQVA7QUFhRDs7O3NDQUVpQk8sSyxFQUFPO0FBQ3ZCLFdBQUtKLFFBQUwsQ0FBYyxFQUFDbEIsWUFBWXNCLE1BQU1FLE1BQU4sQ0FBYUMsS0FBMUIsRUFBZDtBQUNEOzs7O0VBdkZlQyxNQUFNQyxTOztBQTBGeEI5QixPQUFPTCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZmF2U3RyZWFtczogW10sXHJcbiAgICAgIHRvcFN0cmVhbURhdGE6IHdpbmRvdy5mYWtlRGF0YS5mZWF0dXJlZCxcclxuICAgICAgaW5wdXRWYWx1ZTogJydcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVCdXR0b25DbGljayA9IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPlRPUCA1IFNUUkVBTVM8L2gzPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubWFwKChzdHJlYW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFR3aXRjaExpbmsga2V5PXtzdHJlYW1MaW5rLnN0cmVhbS5faWR9IHN0cmVhbT17c3RyZWFtTGlua30+PC9Ud2l0Y2hMaW5rPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9PjwvaW5wdXQ+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGlja30+U3VibWl0IFlvdXIgRmF2b3JpdGUgU3RyZWFtPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIC8vZmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgREJcclxuICBmZXRjaFRvcCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYXBpLnR3aXRjaC50di9rcmFrZW4vc3RyZWFtcy9mZWF0dXJlZD9saW1pdD01JyxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOlwiYXBwbGljYXRpb24vdm5kLnR3aXRjaHR2LnY1K2pzb25cIixcclxuICAgICAgICBcIkNsaWVudC1JZFwiOlwiOXI0Z3F2ZWltampwNnlvNXJ3YnhmN2k2aGJ5NzVsXCJcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b3BTdHJlYW1EYXRhOiBkYXRhLmZlYXR1cmVkfSlcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBmZXRjaCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmF2U3RyZWFtczogZGF0YX0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaWQgbm90IHJlY2VpdmU6JyArIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgdGhpcy5mZXRjaFRvcCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICB0aXRsZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLFxyXG4gICAgICB1cmw6IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTogJyd9KTtcclxuICAgICAgICAgIHRoaXMuZmV0Y2goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTogJyd9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWQgbm90IHJlY2VpdmU6JyArIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LkFwcCA9IEFwcDtcclxuIl19