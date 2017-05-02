"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FavLink = function (_React$Component) {
  _inherits(FavLink, _React$Component);

  function FavLink(props) {
    _classCallCheck(this, FavLink);

    var _this = _possibleConstructorReturn(this, (FavLink.__proto__ || Object.getPrototypeOf(FavLink)).call(this, props));

    _this.state = {};

    _this.handlePlay = _this.handlePlay.bind(_this);
    return _this;
  }

  _createClass(FavLink, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "twitchlinks" },
        React.createElement(
          "a",
          { href: this.props.stream.stream.channel.url, target: "_blank" },
          this.props.stream.stream.channel.url
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "button",
            { onClick: this.handlePlay },
            "Play Stream"
          ),
          React.createElement(
            "button",
            null,
            "Remove From Favorites"
          )
        )
      );
    }
  }, {
    key: "handlePlay",
    value: function handlePlay() {
      this.props.onPlay(this.props.stream);
    }
  }]);

  return FavLink;
}(React.Component);

window.FavLink = FavLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0ZhdkxpbmsuanMiXSwibmFtZXMiOlsiRmF2TGluayIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVQbGF5IiwiYmluZCIsInN0cmVhbSIsImNoYW5uZWwiLCJ1cmwiLCJvblBsYXkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBSmlCO0FBS2xCOzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkEsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUEzQyxFQUFnRCxRQUFPLFFBQXZEO0FBQ0csZUFBS04sS0FBTCxDQUFXSSxNQUFYLENBQWtCQSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDO0FBRHBDLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtKLFVBQXRCO0FBQUE7QUFBQSxXQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBSkYsT0FEQTtBQVdEOzs7aUNBRVc7QUFDVixXQUFLRixLQUFMLENBQVdPLE1BQVgsQ0FBa0IsS0FBS1AsS0FBTCxDQUFXSSxNQUE3QjtBQUNEOzs7O0VBeEJtQkksTUFBTUMsUzs7QUEyQjVCQyxPQUFPWCxPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJGYXZMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmF2TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZVBsYXkgPSB0aGlzLmhhbmRsZVBsYXkuYmluZCh0aGlzKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndHdpdGNobGlua3MnPlxyXG4gICAgICA8YSBocmVmPSB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsfVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUGxheX0+UGxheSBTdHJlYW08L2J1dHRvbj5cclxuICAgICAgIDxidXR0b24+UmVtb3ZlIEZyb20gRmF2b3JpdGVzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxheSgpe1xyXG4gICAgdGhpcy5wcm9wcy5vblBsYXkodGhpcy5wcm9wcy5zdHJlYW0pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LkZhdkxpbmsgPSBGYXZMaW5rO1xyXG4iXX0=