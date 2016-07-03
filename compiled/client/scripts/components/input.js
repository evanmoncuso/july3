'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInput = function (_React$Component) {
  _inherits(UserInput, _React$Component);

  function UserInput(props) {
    _classCallCheck(this, UserInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserInput).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(UserInput, [{
    key: '_printInputData',
    value: function _printInputData(e) {
      var userInput = this._userInput;
      var currentTime = Date.now();
      if (e.charCode === 13 && userInput.value !== '') {
        this.props.saveToApp({ text: userInput.value, time: currentTime });
        userInput.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'userInput' },
        React.createElement('input', { type: 'text', id: 'user_text',
          placeholder: 'What would you like to hear?',
          onKeyPress: this._printInputData.bind(this),
          ref: function ref(input) {
            return _this2._userInput = input;
          } })
      );
    }
  }]);

  return UserInput;
}(React.Component);

window.UserInput = UserInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zY3JpcHRzL2NvbXBvbmVudHMvaW5wdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxTOzs7QUFDSixxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkZBQ1gsS0FEVzs7QUFHakIsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUhpQjtBQU1sQjs7OztvQ0FFZSxDLEVBQUc7QUFDakIsVUFBSSxZQUFZLEtBQUssVUFBckI7QUFDQSxVQUFJLGNBQWMsS0FBSyxHQUFMLEVBQWxCO0FBQ0EsVUFBSSxFQUFFLFFBQUYsS0FBZSxFQUFmLElBQXFCLFVBQVUsS0FBVixLQUFvQixFQUE3QyxFQUFpRDtBQUMvQyxhQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEVBQUMsTUFBTSxVQUFVLEtBQWpCLEVBQXdCLE1BQU0sV0FBOUIsRUFBckI7QUFDQSxrQkFBVSxLQUFWLEdBQWtCLEVBQWxCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRSx1Q0FBTyxNQUFPLE1BQWQsRUFBcUIsSUFBRyxXQUF4QjtBQUNPLHVCQUFjLDhCQURyQjtBQUVPLHNCQUFjLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixDQUZyQjtBQUdPLGVBQU8sYUFBQyxLQUFEO0FBQUEsbUJBQVcsT0FBSyxVQUFMLEdBQWtCLEtBQTdCO0FBQUEsV0FIZDtBQURGLE9BREY7QUFTRDs7OztFQTVCcUIsTUFBTSxTOztBQStCOUIsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVXNlcklucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgX3ByaW50SW5wdXREYXRhKGUpIHtcbiAgICBsZXQgdXNlcklucHV0ID0gdGhpcy5fdXNlcklucHV0O1xuICAgIGxldCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgaWYgKGUuY2hhckNvZGUgPT09IDEzICYmIHVzZXJJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuc2F2ZVRvQXBwKHt0ZXh0OiB1c2VySW5wdXQudmFsdWUsIHRpbWU6IGN1cnJlbnRUaW1lfSk7XG4gICAgICB1c2VySW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcklucHV0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQ9XCJ1c2VyX3RleHRcIlxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIldoYXQgd291bGQgeW91IGxpa2UgdG8gaGVhcj9cIlxuICAgICAgICAgICAgICAgb25LZXlQcmVzcyA9IHt0aGlzLl9wcmludElucHV0RGF0YS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgcmVmID0geyhpbnB1dCkgPT4gdGhpcy5fdXNlcklucHV0ID0gaW5wdXR9PlxuICAgICAgICA8L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuVXNlcklucHV0ID0gVXNlcklucHV0O1xuIl19