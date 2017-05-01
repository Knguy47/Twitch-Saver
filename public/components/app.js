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
      streamData: window.fakeData.featured,
      buttonValue: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.streamData.map(function (streamLink) {
          return React.createElement(TwitchLink, { key: streamLink.stream._id, stream: streamLink });
        }),
        React.createElement('input', null),
        React.createElement(
          'button',
          null,
          'Submit Your Favorite Stream'
        )
      );
    }
    //fetch the data from the DB

  }, {
    key: 'fetch',
    value: function fetch() {
      var _this2 = this;

      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        dataType: 'json',
        type: 'GET',
        success: function success(data) {
          console.log(data);
          _this2.setState({ favStreams: data });
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
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZmF2U3RyZWFtcyIsInN0cmVhbURhdGEiLCJ3aW5kb3ciLCJmYWtlRGF0YSIsImZlYXR1cmVkIiwiYnV0dG9uVmFsdWUiLCJtYXAiLCJzdHJlYW1MaW5rIiwic3RyZWFtIiwiX2lkIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImVycm9yIiwiZmV0Y2giLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUREO0FBRVhDLGtCQUFZQyxPQUFPQyxRQUFQLENBQWdCQyxRQUZqQjtBQUdYQyxtQkFBYTtBQUhGLEtBQWI7QUFGaUI7QUFPbEI7Ozs7NkJBRVE7QUFDUCxhQUNBO0FBQUE7QUFBQTtBQUNHLGFBQUtOLEtBQUwsQ0FBV0UsVUFBWCxDQUFzQkssR0FBdEIsQ0FBMEIsVUFBQ0MsVUFBRCxFQUFnQjtBQUN6QyxpQkFBTyxvQkFBQyxVQUFELElBQVksS0FBS0EsV0FBV0MsTUFBWCxDQUFrQkMsR0FBbkMsRUFBd0MsUUFBUUYsVUFBaEQsR0FBUDtBQUNELFNBRkEsQ0FESDtBQUlFLDBDQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLE9BREE7QUFTRDtBQUNEOzs7OzRCQUNPO0FBQUE7O0FBQ0xHLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGtDQURBO0FBRUxDLGtCQUFVLE1BRkw7QUFHTEMsY0FBTSxLQUhEO0FBSUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQSxpQkFBS0csUUFBTCxDQUFjLEVBQUNuQixZQUFZZ0IsSUFBYixFQUFkO0FBQ0QsU0FQSTtBQVFMSSxlQUFPLGVBQVNKLElBQVQsRUFBZTtBQUNwQkMsa0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJGLElBQWpDO0FBQ0Q7QUFWSSxPQUFQO0FBWUQ7Ozt3Q0FDbUI7QUFDbEIsV0FBS0ssS0FBTDtBQUNEOzs7O0VBdENlQyxNQUFNQyxTOztBQTBDeEJyQixPQUFPTCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZmF2U3RyZWFtczogW10sXHJcbiAgICAgIHN0cmVhbURhdGE6IHdpbmRvdy5mYWtlRGF0YS5mZWF0dXJlZCxcclxuICAgICAgYnV0dG9uVmFsdWU6ICcnXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt0aGlzLnN0YXRlLnN0cmVhbURhdGEubWFwKChzdHJlYW1MaW5rKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxUd2l0Y2hMaW5rIGtleT17c3RyZWFtTGluay5zdHJlYW0uX2lkfSBzdHJlYW09e3N0cmVhbUxpbmt9PjwvVHdpdGNoTGluaz5cclxuICAgICAgfSl9XHJcbiAgICAgIDxpbnB1dD48L2lucHV0PlxyXG4gICAgICA8YnV0dG9uPlN1Ym1pdCBZb3VyIEZhdm9yaXRlIFN0cmVhbTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICAvL2ZldGNoIHRoZSBkYXRhIGZyb20gdGhlIERCXHJcbiAgZmV0Y2goKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmF2U3RyZWFtczogZGF0YX0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2goKTtcclxuICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cuQXBwID0gQXBwO1xyXG4iXX0=