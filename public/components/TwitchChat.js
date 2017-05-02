"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwitchChat = function (_React$Component) {
  _inherits(TwitchChat, _React$Component);

  function TwitchChat(props) {
    _classCallCheck(this, TwitchChat);

    var _this = _possibleConstructorReturn(this, (TwitchChat.__proto__ || Object.getPrototypeOf(TwitchChat)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(TwitchChat, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "chat" },
        React.createElement("iframe", { frameBorder: 0,
          scrolling: "no",
          id: "chat_embed",
          src: "https://www.twitch.tv/" + this.props.channel + "/chat",
          height: 300,
          width: 1000 })
      );
    }
  }]);

  return TwitchChat;
}(React.Component);

window.TwitchChat = TwitchChat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1R3aXRjaENoYXQuanMiXSwibmFtZXMiOlsiVHdpdGNoQ2hhdCIsInByb3BzIiwic3RhdGUiLCJjaGFubmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBRVE7QUFDUCxhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZjtBQUNFLHdDQUFRLGFBQWEsQ0FBckI7QUFDRSxxQkFBVSxJQURaO0FBRUUsY0FBRyxZQUZMO0FBR0UsZUFBSywyQkFBMEIsS0FBS0QsS0FBTCxDQUFXRSxPQUFyQyxHQUE4QyxPQUhyRDtBQUlFLGtCQUFRLEdBSlY7QUFLRSxpQkFBTyxJQUxUO0FBREYsT0FEQTtBQVdEOzs7O0VBbEJzQkMsTUFBTUMsUzs7QUFzQi9CQyxPQUFPTixVQUFQLEdBQW1CQSxVQUFuQiIsImZpbGUiOiJUd2l0Y2hDaGF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHdpdGNoQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9O1xyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCc+XHJcbiAgICAgIDxpZnJhbWUgZnJhbWVCb3JkZXI9ezB9XHJcbiAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxyXG4gICAgICAgIGlkPVwiY2hhdF9lbWJlZFwiXHJcbiAgICAgICAgc3JjPXtcImh0dHBzOi8vd3d3LnR3aXRjaC50di9cIisgdGhpcy5wcm9wcy5jaGFubmVsICtcIi9jaGF0XCJ9XHJcbiAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgd2lkdGg9ezEwMDB9PlxyXG4gICAgICA8L2lmcmFtZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cuVHdpdGNoQ2hhdCA9VHdpdGNoQ2hhdDtcclxuIl19