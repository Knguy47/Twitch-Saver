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
    _this.handlePlay = _this.handlePlay.bind(_this);
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
          React.createElement("img", { src: this.props.stream.stream.preview.small })
        ),
        this.props.stream.stream.game,
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
            { onClick: this.handleAddToFavs },
            "Add to Favorites"
          )
        )
      );
    }
  }, {
    key: "handlePlay",
    value: function handlePlay() {
      this.props.onPlay(this.props.stream);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1R3aXRjaExpbmsuanMiXSwibmFtZXMiOlsiVHdpdGNoTGluayIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVBZGRUb0ZhdnMiLCJiaW5kIiwiaGFuZGxlUGxheSIsInN0cmVhbSIsImNoYW5uZWwiLCJ1cmwiLCJwcmV2aWV3Iiwic21hbGwiLCJnYW1lIiwib25QbGF5Iiwib25GYXZvcml0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiOztBQUVBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBTGlCO0FBTWxCOzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFFRTtBQUFBO0FBQUEsWUFBRyxNQUFPLEtBQUtILEtBQUwsQ0FBV0ssTUFBWCxDQUFrQkEsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUEzQyxFQUFnRCxRQUFPLFFBQXZEO0FBQ0UsdUNBQUssS0FBSyxLQUFLUCxLQUFMLENBQVdLLE1BQVgsQ0FBa0JBLE1BQWxCLENBQXlCRyxPQUF6QixDQUFpQ0MsS0FBM0M7QUFERixTQUZGO0FBS0csYUFBS1QsS0FBTCxDQUFXSyxNQUFYLENBQWtCQSxNQUFsQixDQUF5QkssSUFMNUI7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtOLFVBQXRCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLRixlQUF0QjtBQUFBO0FBQUE7QUFGRjtBQU5GLE9BREE7QUFhRDs7O2lDQUNXO0FBQ1YsV0FBS0YsS0FBTCxDQUFXVyxNQUFYLENBQWtCLEtBQUtYLEtBQUwsQ0FBV0ssTUFBN0I7QUFDRDs7O3NDQUVpQjtBQUNoQixXQUFLTCxLQUFMLENBQVdZLFVBQVgsQ0FBc0IsS0FBS1osS0FBTCxDQUFXSyxNQUFqQztBQUNEOzs7O0VBOUJzQlEsTUFBTUMsUzs7QUFrQy9CQyxPQUFPaEIsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiVHdpdGNoTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFR3aXRjaExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcblxyXG4gICAgdGhpcy5oYW5kbGVBZGRUb0ZhdnMgPSB0aGlzLmhhbmRsZUFkZFRvRmF2cy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3R3aXRjaGxpbmtzJz5cclxuICAgICAgICBcclxuICAgICAgPGEgaHJlZj0ge3RoaXMucHJvcHMuc3RyZWFtLnN0cmVhbS5jaGFubmVsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuc3RyZWFtLnN0cmVhbS5wcmV2aWV3LnNtYWxsfT48L2ltZz5cclxuICAgICAgPC9hPlxyXG4gICAgICB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmdhbWV9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVBsYXl9PlBsYXkgU3RyZWFtPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFRvRmF2c30+QWRkIHRvIEZhdm9yaXRlczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgaGFuZGxlUGxheSgpe1xyXG4gICAgdGhpcy5wcm9wcy5vblBsYXkodGhpcy5wcm9wcy5zdHJlYW0pO1xyXG4gIH1cclxuICBcclxuICBoYW5kbGVBZGRUb0ZhdnMgKCl7XHJcbiAgICB0aGlzLnByb3BzLm9uRmF2b3JpdGUodGhpcy5wcm9wcy5zdHJlYW0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5Ud2l0Y2hMaW5rID0gVHdpdGNoTGluaztcclxuIl19