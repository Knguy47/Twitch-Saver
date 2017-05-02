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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1R3aXRjaExpbmsuanMiXSwibmFtZXMiOlsiVHdpdGNoTGluayIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVBZGRUb0ZhdnMiLCJiaW5kIiwiaGFuZGxlUGxheSIsInN0cmVhbSIsImNoYW5uZWwiLCJ1cmwiLCJvblBsYXkiLCJvbkZhdm9yaXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7O0FBRUEsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFMaUI7QUFNbEI7Ozs7NkJBRVE7QUFDUCxhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQU8sS0FBS0gsS0FBTCxDQUFXSyxNQUFYLENBQWtCQSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDLEdBQTNDLEVBQWdELFFBQU8sUUFBdkQ7QUFDRyxlQUFLUCxLQUFMLENBQVdLLE1BQVgsQ0FBa0JBLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ0M7QUFEcEMsU0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFNBQVMsS0FBS0gsVUFBdEI7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtGLGVBQXRCO0FBQUE7QUFBQTtBQUZGO0FBSkYsT0FEQTtBQVdEOzs7aUNBQ1c7QUFDVixXQUFLRixLQUFMLENBQVdRLE1BQVgsQ0FBa0IsS0FBS1IsS0FBTCxDQUFXSyxNQUE3QjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUtMLEtBQUwsQ0FBV1MsVUFBWCxDQUFzQixLQUFLVCxLQUFMLENBQVdLLE1BQWpDO0FBQ0Q7Ozs7RUE1QnNCSyxNQUFNQyxTOztBQWdDL0JDLE9BQU9iLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6IlR3aXRjaExpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUd2l0Y2hMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQWRkVG9GYXZzID0gdGhpcy5oYW5kbGVBZGRUb0ZhdnMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUGxheSA9IHRoaXMuaGFuZGxlUGxheS5iaW5kKHRoaXMpO1xyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd0d2l0Y2hsaW5rcyc+XHJcbiAgICAgIDxhIGhyZWY9IHt0aGlzLnByb3BzLnN0cmVhbS5zdHJlYW0uY2hhbm5lbC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnN0cmVhbS5zdHJlYW0uY2hhbm5lbC51cmx9XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUGxheX0+UGxheSBTdHJlYW08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkVG9GYXZzfT5BZGQgdG8gRmF2b3JpdGVzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVQbGF5KCl7XHJcbiAgICB0aGlzLnByb3BzLm9uUGxheSh0aGlzLnByb3BzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUFkZFRvRmF2cyAoKXtcclxuICAgIHRoaXMucHJvcHMub25GYXZvcml0ZSh0aGlzLnByb3BzLnN0cmVhbSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxud2luZG93LlR3aXRjaExpbmsgPSBUd2l0Y2hMaW5rO1xyXG4iXX0=