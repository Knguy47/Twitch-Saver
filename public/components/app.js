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

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
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
          console.log(data);
          _this3.setState({ topStreamData: data.featured });
        },
        error: function error(data) {
          console.log('Did not receive:' + data);
        }
      });
    }
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
    key: 'handleButtonClick',
    value: function handleButtonClick(event) {
      var _this5 = this;

      var data = {
        title: this.state.inputValue,
        url: this.state.inputValue
      };

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
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState({ inputValue: event.target.value });
    }
  }, {
    key: 'handleFavorite',
    value: function handleFavorite(stream) {
      var _this6 = this;

      var data = {
        title: stream.something,
        url: stream.something
      };

      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        data: data,
        type: 'POST',
        success: function success(data) {
          _this6.setState({ inputValue: '' });
          _this6.fetch();
        },
        error: function error(data) {
          _this6.setState({ inputValue: '' });
          console.log('Did not receive:' + data);
        }
      });
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZmF2U3RyZWFtcyIsInRvcFN0cmVhbURhdGEiLCJpbnB1dFZhbHVlIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJiaW5kIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVGYXZvcml0ZSIsInBsYXllciIsImxlbmd0aCIsInN0cmVhbSIsImNoYW5uZWwiLCJuYW1lIiwibWFwIiwic3RyZWFtTGluayIsIl9pZCIsIiQiLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJ0eXBlIiwiaGVhZGVycyIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZmVhdHVyZWQiLCJlcnJvciIsImZldGNoIiwiZmV0Y2hUb3AiLCJldmVudCIsInRpdGxlIiwidGFyZ2V0IiwidmFsdWUiLCJzb21ldGhpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLHFCQUFlLEVBRko7QUFHWEMsa0JBQVk7QUFIRCxLQUFiOztBQU1BLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6QjtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QixPQUF6QjtBQUNBLFVBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsT0FBdEI7QUFWaUI7QUFXbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJRyxNQUFKOztBQUVBLFVBQUcsS0FBS1IsS0FBTCxDQUFXRSxhQUFYLENBQXlCTyxNQUF6QixHQUFrQyxDQUFyQyxFQUF1QztBQUN0Q0QsaUJB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RjtBQUVISyxjQUFNQSxJQUZIO0FBR0hILGNBQU0sTUFISDtBQUlIRSxpQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCLGlCQUFLRyxRQUFMLENBQWMsRUFBQ3ZCLFlBQVksRUFBYixFQUFkO0FBQ0EsaUJBQUswQixLQUFMO0FBQ0QsU0FQRTtBQVFIRCxlQUFPLGVBQUNMLElBQUQsRUFBVTtBQUNmLGlCQUFLRyxRQUFMLENBQWMsRUFBQ3ZCLFlBQVksRUFBYixFQUFkO0FBQ0FxQixrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkYsSUFBakM7QUFDRDtBQVhFLE9BQVA7QUFhRDs7OztFQXJIZWEsTUFBTUMsUzs7QUF3SHhCQyxPQUFPeEMsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZhdlN0cmVhbXM6IFtdLFxyXG4gICAgICB0b3BTdHJlYW1EYXRhOiBbXSxcclxuICAgICAgaW5wdXRWYWx1ZTogJydcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVCdXR0b25DbGljayA9IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUZhdm9yaXRlID0gdGhpcy5oYW5kbGVGYXZvcml0ZS5iaW5kKHRoaXMpO1xyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHBsYXllcjtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGEubGVuZ3RoID4gMSl7XHJcbiAgICAgcGxheWVyID0gPFR3aXRjaFBsYXllciBjaGFubmVsPXt0aGlzLnN0YXRlLnRvcFN0cmVhbURhdGFbMF0uc3RyZWFtLmNoYW5uZWwubmFtZX0+PC9Ud2l0Y2hQbGF5ZXI+ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwbGF5ZXJ9XHJcbiAgICAgIDxoMz5UT1AgNSBTVFJFQU1TPC9oMz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS50b3BTdHJlYW1EYXRhLm1hcCgoc3RyZWFtTGluaykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxUd2l0Y2hMaW5rIGtleT17c3RyZWFtTGluay5zdHJlYW0uX2lkfSBzdHJlYW09e3N0cmVhbUxpbmt9IG9uRmF2b3JpdGU9e3RoaXMuaGFuZGxlRmF2b3JpdGV9PjwvVHdpdGNoTGluaz5cclxuICAgICAgICB9KX1cclxuICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfT48L2lucHV0PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQnV0dG9uQ2xpY2t9PlN1Ym1pdCBZb3VyIEZhdm9yaXRlIFN0cmVhbTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAvL2ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIERCXHJcbiAgZmV0Y2hUb3AoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdodHRwczovL2FwaS50d2l0Y2gudHYva3Jha2VuL3N0cmVhbXMvZmVhdHVyZWQ/bGltaXQ9NScsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2NlcHRcIjpcImFwcGxpY2F0aW9uL3ZuZC50d2l0Y2h0di52NStqc29uXCIsXHJcbiAgICAgICAgXCJDbGllbnQtSWRcIjpcIjlyNGdxdmVpbWpqcDZ5bzVyd2J4ZjdpNmhieTc1bFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9wU3RyZWFtRGF0YTogZGF0YS5mZWF0dXJlZH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaWQgbm90IHJlY2VpdmU6JyArIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZldGNoKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmYXZTdHJlYW1zOiBkYXRhfSlcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmZldGNoKCk7XHJcbiAgICB0aGlzLmZldGNoVG9wKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsXHJcbiAgICAgIHVybDogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlXHJcbiAgICB9XHJcbiAgICBcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDMwL2ZhdnN0cmVhbXMnLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbHVlOiAnJ30pO1xyXG4gICAgICAgICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dFZhbHVlOiAnJ30pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGYXZvcml0ZShzdHJlYW0pe1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIHRpdGxlOiBzdHJlYW0uc29tZXRoaW5nLFxyXG4gICAgICB1cmw6IHN0cmVhbS5zb21ldGhpbmdcclxuICAgIH1cclxuICAgIFxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMzAvZmF2c3RyZWFtcycsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsdWU6ICcnfSk7XHJcbiAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsdWU6ICcnfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGlkIG5vdCByZWNlaXZlOicgKyBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5BcHAgPSBBcHA7XHJcbiJdfQ==