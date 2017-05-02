"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FavLinks = function (_React$Component) {
  _inherits(FavLinks, _React$Component);

  function FavLinks(props) {
    _classCallCheck(this, FavLinks);

    var _this = _possibleConstructorReturn(this, (FavLinks.__proto__ || Object.getPrototypeOf(FavLinks)).call(this, props));

    _this.state = {};

    return _this;
  }

  _createClass(FavLinks, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "FavLinks" },
        React.createElement(
          "a",
          { href: this.props.stream.stream.channel.url, target: "_blank" },
          this.props.stream.stream.channel.url
        ),
        React.createElement(
          "button",
          null,
          "Play Stream"
        )
      );
    }
  }]);

  return FavLinks;
}(React.Component);

window.FavLinks = FavLinks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0ZhdkxpbmtzLmpzIl0sIm5hbWVzIjpbIkZhdkxpbmtzIiwicHJvcHMiLCJzdGF0ZSIsInN0cmVhbSIsImNoYW5uZWwiLCJ1cmwiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFGaUI7QUFJbEI7Ozs7NkJBRVE7QUFDUCxhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQU8sS0FBS0QsS0FBTCxDQUFXRSxNQUFYLENBQWtCQSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDLEdBQTNDLEVBQWdELFFBQU8sUUFBdkQ7QUFDRyxlQUFLSixLQUFMLENBQVdFLE1BQVgsQ0FBa0JBLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ0M7QUFEcEMsU0FERjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixPQURBO0FBUUQ7Ozs7RUFoQm9CQyxNQUFNQyxTOztBQW9CN0JDLE9BQU9SLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6IkZhdkxpbmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmF2TGlua3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcblxyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdGYXZMaW5rcyc+XHJcbiAgICAgIDxhIGhyZWY9IHt0aGlzLnByb3BzLnN0cmVhbS5zdHJlYW0uY2hhbm5lbC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnN0cmVhbS5zdHJlYW0uY2hhbm5lbC51cmx9XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGJ1dHRvbj5QbGF5IFN0cmVhbTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5GYXZMaW5rcyA9IEZhdkxpbmtzO1xyXG4iXX0=