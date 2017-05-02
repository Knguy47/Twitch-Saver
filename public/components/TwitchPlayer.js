"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwitchPlayer = function (_React$Component) {
  _inherits(TwitchPlayer, _React$Component);

  function TwitchPlayer(props) {
    _classCallCheck(this, TwitchPlayer);

    var _this = _possibleConstructorReturn(this, (TwitchPlayer.__proto__ || Object.getPrototypeOf(TwitchPlayer)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(TwitchPlayer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "You are watching ",
          this.props.channel
        ),
        React.createElement("iframe", { className: "player",
          src: "http://player.twitch.tv/?channel=" + this.props.channel,
          height: 600,
          width: 1000,
          frameBorder: 0,
          scrolling: "no",
          allowFullScreen: "true" })
      );
    }
  }]);

  return TwitchPlayer;
}(React.Component);

window.TwitchPlayer = TwitchPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1R3aXRjaFBsYXllci5qcyJdLCJuYW1lcyI6WyJUd2l0Y2hQbGF5ZXIiLCJwcm9wcyIsInN0YXRlIiwiY2hhbm5lbCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFzQixlQUFLRCxLQUFMLENBQVdFO0FBQWpDLFNBREY7QUFFRSx3Q0FBUSxXQUFVLFFBQWxCO0FBQ0ksZUFBSyxzQ0FBcUMsS0FBS0YsS0FBTCxDQUFXRSxPQUR6RDtBQUVJLGtCQUFRLEdBRlo7QUFHSSxpQkFBTyxJQUhYO0FBSUksdUJBQWEsQ0FKakI7QUFLSSxxQkFBVSxJQUxkO0FBTUksMkJBQWdCLE1BTnBCO0FBRkYsT0FEQTtBQWFEOzs7O0VBcEJ3QkMsTUFBTUMsUzs7QUF3QmpDQyxPQUFPTixZQUFQLEdBQXFCQSxZQUFyQiIsImZpbGUiOiJUd2l0Y2hQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUd2l0Y2hQbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPllvdSBhcmUgd2F0Y2hpbmcge3RoaXMucHJvcHMuY2hhbm5lbH08L2gxPlxyXG4gICAgICA8aWZyYW1lIGNsYXNzTmFtZT1cInBsYXllclwiXHJcbiAgICAgICAgICBzcmM9e1wiaHR0cDovL3BsYXllci50d2l0Y2gudHYvP2NoYW5uZWw9XCIrIHRoaXMucHJvcHMuY2hhbm5lbH1cclxuICAgICAgICAgIGhlaWdodD17NjAwfVxyXG4gICAgICAgICAgd2lkdGg9ezEwMDB9XHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj17MH1cclxuICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcclxuICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIj5cclxuICAgICAgPC9pZnJhbWU+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxud2luZG93LlR3aXRjaFBsYXllciA9VHdpdGNoUGxheWVyO1xyXG4iXX0=