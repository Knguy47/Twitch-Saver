"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwitchLink = function (_React$Component) {
  _inherits(TwitchLink, _React$Component);

  function TwitchLink(props) {
    _classCallCheck(this, TwitchLink);

    var _this = _possibleConstructorReturn(this, (TwitchLink.__proto__ || Object.getPrototypeOf(TwitchLink)).call(this, props));

    _this.state = {};
    console.log(_this.props);
    return _this;
  }

  _createClass(TwitchLink, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "a",
        { href: this.props.stream.stream.channel.url, target: "_blank" },
        this.props.stream.stream.channel.url
      );
    }
  }]);

  return TwitchLink;
}(React.Component);

window.TwitchLink = TwitchLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1R3aXRjaExpbmsuanMiXSwibmFtZXMiOlsiVHdpdGNoTGluayIsInByb3BzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwic3RyZWFtIiwiY2hhbm5lbCIsInVybCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxNQUFLSCxLQUFqQjtBQUhpQjtBQUlsQjs7Ozs2QkFFUTtBQUNQLGFBQ0E7QUFBQTtBQUFBLFVBQUcsTUFBTyxLQUFLQSxLQUFMLENBQVdJLE1BQVgsQ0FBa0JBLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ0MsR0FBM0MsRUFBZ0QsUUFBTyxRQUF2RDtBQUNHLGFBQUtOLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkEsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQztBQURwQyxPQURBO0FBS0Q7Ozs7RUFic0JDLE1BQU1DLFM7O0FBaUIvQkMsT0FBT1YsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiVHdpdGNoTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFR3aXRjaExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9IHt0aGlzLnByb3BzLnN0cmVhbS5zdHJlYW0uY2hhbm5lbC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsfVxyXG4gICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cuVHdpdGNoTGluayA9IFR3aXRjaExpbms7XHJcbiJdfQ==