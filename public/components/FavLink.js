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
    return _this;
  }

  _createClass(FavLink, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "FavLink" },
        React.createElement(
          "a",
          { href: this.props.stream.title, target: "_blank" },
          this.props.stream.title
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
            null,
            "Remove From Favorites"
          )
        )
      );
    }
  }]);

  return FavLink;
}(React.Component);

window.FavLink = FavLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0ZhdkxpbmsuanMiXSwibmFtZXMiOlsiRmF2TGluayIsInByb3BzIiwic3RhdGUiLCJzdHJlYW0iLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFPLEtBQUtELEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsS0FBNUIsRUFBbUMsUUFBTyxRQUExQztBQUNHLGVBQUtILEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkM7QUFEckIsU0FERjtBQUlFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUpGLE9BREE7QUFXRDs7OztFQWxCbUJDLE1BQU1DLFM7O0FBc0I1QkMsT0FBT1AsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiRmF2TGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZhdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfTtcclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0ZhdkxpbmsnPlxyXG4gICAgICA8YSBocmVmPSB7dGhpcy5wcm9wcy5zdHJlYW0udGl0bGV9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnN0cmVhbS50aXRsZX1cclxuICAgICAgPC9hPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgPGJ1dHRvbj5QbGF5IFN0cmVhbTwvYnV0dG9uPlxyXG4gICAgICAgPGJ1dHRvbj5SZW1vdmUgRnJvbSBGYXZvcml0ZXM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxud2luZG93LkZhdkxpbmsgPSBGYXZMaW5rO1xyXG4iXX0=