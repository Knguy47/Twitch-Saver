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
      return React.createElement("iframe", {
        src: "http://player.twitch.tv/?channel=" + this.props.channel,
        height: 500,
        width: 600,
        frameBorder: 0,
        scrolling: "no",
        allowFullScreen: "true" });
    }
  }]);

  return TwitchPlayer;
}(React.Component);

window.TwitchPlayer = TwitchPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1R3aXRjaFBsYXllci5qcyJdLCJuYW1lcyI6WyJUd2l0Y2hQbGF5ZXIiLCJwcm9wcyIsInN0YXRlIiwiY2hhbm5lbCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUNJLGFBQUssc0NBQXFDLEtBQUtELEtBQUwsQ0FBV0UsT0FEekQ7QUFFSSxnQkFBUSxHQUZaO0FBR0ksZUFBTyxHQUhYO0FBSUkscUJBQWEsQ0FKakI7QUFLSSxtQkFBVSxJQUxkO0FBTUkseUJBQWdCLE1BTnBCLEdBREE7QUFVRDs7OztFQWpCd0JDLE1BQU1DLFM7O0FBcUJqQ0MsT0FBT04sWUFBUCxHQUFxQkEsWUFBckIiLCJmaWxlIjoiVHdpdGNoUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHdpdGNoUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxpZnJhbWVcclxuICAgICAgICBzcmM9e1wiaHR0cDovL3BsYXllci50d2l0Y2gudHYvP2NoYW5uZWw9XCIrIHRoaXMucHJvcHMuY2hhbm5lbH1cclxuICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICB3aWR0aD17NjAwfVxyXG4gICAgICAgIGZyYW1lQm9yZGVyPXswfVxyXG4gICAgICAgIHNjcm9sbGluZz1cIm5vXCJcclxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW49XCJ0cnVlXCI+XHJcbiAgICA8L2lmcmFtZT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxud2luZG93LlR3aXRjaFBsYXllciA9VHdpdGNoUGxheWVyO1xyXG4iXX0=