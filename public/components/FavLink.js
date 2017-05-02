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

    _this.state = {
      online: true
    };

    _this.handlePlay = _this.handlePlay.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    return _this;
  }

  _createClass(FavLink, [{
    key: "render",
    value: function render() {
      var redDot;
      if (this.state.online === true) {
        redDot = React.createElement("img", { id: "onlinebutton", src: "./assets/imgs/red_dot.png" });
      }
      return React.createElement(
        "div",
        { className: "twitchlinks" },
        React.createElement(
          "a",
          { href: this.props.stream.stream.channel.url, target: "_blank" },
          this.props.stream.stream.channel.url
        ),
        redDot,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0ZhdkxpbmsuanMiXSwibmFtZXMiOlsiRmF2TGluayIsInByb3BzIiwic3RhdGUiLCJvbmxpbmUiLCJoYW5kbGVQbGF5IiwiYmluZCIsImhhbmRsZVJlbW92ZSIsInJlZERvdCIsInN0cmVhbSIsImNoYW5uZWwiLCJ1cmwiLCJvblJlbW92ZSIsIm9uUGxheSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRO0FBREcsS0FBYjs7QUFJQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVBpQjtBQVFsQjs7Ozs2QkFFUTtBQUNQLFVBQUlFLE1BQUo7QUFDQSxVQUFHLEtBQUtMLEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixJQUF6QixFQUErQjtBQUM3QkksaUJBQVMsNkJBQUssSUFBRyxjQUFSLEVBQXVCLEtBQUksMkJBQTNCLEdBQVQ7QUFDRDtBQUNELGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBTyxLQUFLTixLQUFMLENBQVdPLE1BQVgsQ0FBa0JBLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ0MsR0FBM0MsRUFBZ0QsUUFBTyxRQUF2RDtBQUNHLGVBQUtULEtBQUwsQ0FBV08sTUFBWCxDQUFrQkEsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQztBQURwQyxTQURGO0FBSUdILGNBSkg7QUFLRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtILFVBQXRCO0FBQUE7QUFBQSxXQUREO0FBRUM7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLRSxZQUF0QjtBQUFBO0FBQUE7QUFGRDtBQUxGLE9BREE7QUFZRDs7O21DQUVhO0FBQ1osV0FBS0wsS0FBTCxDQUFXVSxRQUFYLENBQW9CLEtBQUtWLEtBQUwsQ0FBV08sTUFBL0I7QUFDRDs7O2lDQUVXO0FBQ1YsV0FBS1AsS0FBTCxDQUFXVyxNQUFYLENBQWtCLEtBQUtYLEtBQUwsQ0FBV08sTUFBN0I7QUFDRDs7OztFQXBDbUJLLE1BQU1DLFM7O0FBdUM1QkMsT0FBT2YsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiRmF2TGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZhdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBvbmxpbmU6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgcmVkRG90O1xyXG4gICAgaWYodGhpcy5zdGF0ZS5vbmxpbmUgPT09IHRydWUpIHtcclxuICAgICAgcmVkRG90ID0gPGltZyBpZD1cIm9ubGluZWJ1dHRvblwiIHNyYz1cIi4vYXNzZXRzL2ltZ3MvcmVkX2RvdC5wbmdcIj48L2ltZz5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndHdpdGNobGlua3MnPlxyXG4gICAgICA8YSBocmVmPSB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zdHJlYW0uc3RyZWFtLmNoYW5uZWwudXJsfVxyXG4gICAgICA8L2E+XHJcbiAgICAgIHtyZWREb3R9XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUGxheX0+UGxheSBTdHJlYW08L2J1dHRvbj5cclxuICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmV9PlJlbW92ZSBGcm9tIEZhdm9yaXRlczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlUmVtb3ZlKCl7XHJcbiAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKHRoaXMucHJvcHMuc3RyZWFtKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYXkoKXtcclxuICAgIHRoaXMucHJvcHMub25QbGF5KHRoaXMucHJvcHMuc3RyZWFtKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5GYXZMaW5rID0gRmF2TGluaztcclxuIl19