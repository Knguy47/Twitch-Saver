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
    _this.handleRemove = _this.handleRemove.bind(_this);
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
            { onClick: this.handleRemove },
            "Remove From Favorites"
          )
        )
      );
    }
  }, {
    key: "handleRemove",
    value: function handleRemove() {
      this.props.onRemove(this.props.stream);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0ZhdkxpbmsuanMiXSwibmFtZXMiOlsiRmF2TGluayIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVQbGF5IiwiYmluZCIsImhhbmRsZVJlbW92ZSIsInN0cmVhbSIsImNoYW5uZWwiLCJ1cmwiLCJvblJlbW92ZSIsIm9uUGxheSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiOztBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBTGlCO0FBTWxCOzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFPLEtBQUtILEtBQUwsQ0FBV0ssTUFBWCxDQUFrQkEsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUEzQyxFQUFnRCxRQUFPLFFBQXZEO0FBQ0csZUFBS1AsS0FBTCxDQUFXSyxNQUFYLENBQWtCQSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDO0FBRHBDLFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtMLFVBQXRCO0FBQUE7QUFBQSxXQUREO0FBRUM7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLRSxZQUF0QjtBQUFBO0FBQUE7QUFGRDtBQUpGLE9BREE7QUFXRDs7O21DQUVhO0FBQ1osV0FBS0osS0FBTCxDQUFXUSxRQUFYLENBQW9CLEtBQUtSLEtBQUwsQ0FBV0ssTUFBL0I7QUFDRDs7O2lDQUVXO0FBQ1YsV0FBS0wsS0FBTCxDQUFXUyxNQUFYLENBQWtCLEtBQUtULEtBQUwsQ0FBV0ssTUFBN0I7QUFDRDs7OztFQTdCbUJLLE1BQU1DLFM7O0FBZ0M1QkMsT0FBT2IsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiRmF2TGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZhdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcblxyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3R3aXRjaGxpbmtzJz5cclxuICAgICAgPGEgaHJlZj0ge3RoaXMucHJvcHMuc3RyZWFtLnN0cmVhbS5jaGFubmVsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc3RyZWFtLnN0cmVhbS5jaGFubmVsLnVybH1cclxuICAgICAgPC9hPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVBsYXl9PlBsYXkgU3RyZWFtPC9idXR0b24+XHJcbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlfT5SZW1vdmUgRnJvbSBGYXZvcml0ZXM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZVJlbW92ZSgpe1xyXG4gICAgdGhpcy5wcm9wcy5vblJlbW92ZSh0aGlzLnByb3BzLnN0cmVhbSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGF5KCl7XHJcbiAgICB0aGlzLnByb3BzLm9uUGxheSh0aGlzLnByb3BzLnN0cmVhbSk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuRmF2TGluayA9IEZhdkxpbms7XHJcbiJdfQ==