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

    _this.handleAddToFavs = _this.handleAddToFavs.bind(_this);
    return _this;
  }

  _createClass(TwitchLink, [{
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
            null,
            "Play Stream"
          ),
          React.createElement(
            "button",
            { onClick: this.handleAddToFavs },
            "Add to Favorites"
          )
        )
      );
    }
  }, {
    key: "handleAddToFavs",
    value: function handleAddToFavs() {
      this.props.onFavorite(this.props.stream);
    }
  }]);

  return TwitchLink;
}(React.Component);

window.TwitchLink = TwitchLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1R3aXRjaExpbmsuanMiXSwibmFtZXMiOlsiVHdpdGNoTGluayIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVBZGRUb0ZhdnMiLCJiaW5kIiwic3RyZWFtIiwiY2hhbm5lbCIsInVybCIsIm9uRmF2b3JpdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBSmlCO0FBS2xCOzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkEsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUEzQyxFQUFnRCxRQUFPLFFBQXZEO0FBQ0csZUFBS04sS0FBTCxDQUFXSSxNQUFYLENBQWtCQSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDO0FBRHBDLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtKLGVBQXRCO0FBQUE7QUFBQTtBQUZGO0FBSkYsT0FEQTtBQVdEOzs7c0NBRWlCO0FBQ2hCLFdBQUtGLEtBQUwsQ0FBV08sVUFBWCxDQUFzQixLQUFLUCxLQUFMLENBQVdJLE1BQWpDO0FBQ0Q7Ozs7RUF4QnNCSSxNQUFNQyxTOztBQTRCL0JDLE9BQU9YLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6IlR3aXRjaExpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUd2l0Y2hMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQWRkVG9GYXZzID0gdGhpcy5oYW5kbGVBZGRUb0ZhdnMuYmluZCh0aGlzKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndHdpdGNobGlua3MnPlxyXG4gICAgICA8YSBocmVmPSB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsfVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5QbGF5IFN0cmVhbTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGRUb0ZhdnN9PkFkZCB0byBGYXZvcml0ZXM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUFkZFRvRmF2cyAoKXtcclxuICAgIHRoaXMucHJvcHMub25GYXZvcml0ZSh0aGlzLnByb3BzLnN0cmVhbSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxud2luZG93LlR3aXRjaExpbmsgPSBUd2l0Y2hMaW5rO1xyXG4iXX0=