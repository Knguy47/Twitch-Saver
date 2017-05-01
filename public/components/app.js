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
      streamData: window.fakeData,
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
        React.createElement('input', null),
        React.createElement(
          'button',
          { value: this.state.buttonValue },
          'Submit Your Favorite Stream'
        )
      );
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      $.ajax({
        url: 'http://127.0.0.1:3030/favstreams',
        dataType: 'json',
        type: 'GET',
        success: function success(data) {
          console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwic3RyZWFtRGF0YSIsIndpbmRvdyIsImZha2VEYXRhIiwiYnV0dG9uVmFsdWUiLCIkIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwidHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZmV0Y2giLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWUMsT0FBT0MsUUFEUjtBQUVYQyxtQkFBYTtBQUZGLEtBQWI7QUFGaUI7QUFNbEI7Ozs7NkJBRVE7QUFDUCxhQUNBO0FBQUE7QUFBQTtBQUNFLDBDQURGO0FBRUM7QUFBQTtBQUFBLFlBQVEsT0FBTyxLQUFLSixLQUFMLENBQVdJLFdBQTFCO0FBQUE7QUFBQTtBQUZELE9BREE7QUFNRDs7OzRCQUVNO0FBQ0xDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLGtDQURBO0FBRUxDLGtCQUFVLE1BRkw7QUFHTEMsY0FBTSxLQUhEO0FBSUxDLGlCQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDRCxTQU5JO0FBT0xHLGVBQU8sZUFBU0gsSUFBVCxFQUFlO0FBQ3BCQyxrQkFBUUMsR0FBUixDQUFZLHFCQUFxQkYsSUFBakM7QUFDRDtBQVRJLE9BQVA7QUFXRDs7O3dDQUNtQjtBQUNsQixXQUFLSSxLQUFMO0FBQ0Q7Ozs7RUFqQ2VDLE1BQU1DLFM7O0FBcUN4QmYsT0FBT0osR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0cmVhbURhdGE6IHdpbmRvdy5mYWtlRGF0YSxcclxuICAgICAgYnV0dG9uVmFsdWU6ICcnXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dD48L2lucHV0PlxyXG4gICAgIDxidXR0b24gdmFsdWU9e3RoaXMuc3RhdGUuYnV0dG9uVmFsdWV9PlN1Ym1pdCBZb3VyIEZhdm9yaXRlIFN0cmVhbTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2goKXtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAzMC9mYXZzdHJlYW1zJyxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBub3QgcmVjZWl2ZTonICsgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2goKTtcclxuICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cuQXBwID0gQXBwO1xyXG4iXX0=