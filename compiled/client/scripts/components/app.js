"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      searches: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "_postMessageToState",
    value: function _postMessageToState(text) {
      console.log(text);
      this.setState({ searches: this.state.searches.concat(JSON.stringify(text)) });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "displayDiv" },
          React.createElement(UserInput, { saveToApp: this._postMessageToState.bind(this) })
        ),
        React.createElement(SearchResults, { data: this.state.searches })
      );
    }
  }]);

  return App;
}(React.Component);

;

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zY3JpcHRzL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sRzs7O0FBQ0osZUFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUZBQ1gsS0FEVzs7QUFHakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxnQkFBVTtBQURDLEtBQWI7QUFIaUI7QUFNbEI7Ozs7d0NBRW1CLEksRUFBTTtBQUN4QixjQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsV0FBSyxRQUFMLENBQWMsRUFBQyxVQUFVLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBSyxTQUFMLENBQWUsSUFBZixDQUEzQixDQUFYLEVBQWQ7QUFDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRSw4QkFBQyxTQUFELElBQVcsV0FBYSxLQUFLLG1CQUFMLENBQXlCLElBQXpCLENBQThCLElBQTlCLENBQXhCO0FBREYsU0FERjtBQUlFLDRCQUFDLGFBQUQsSUFBZSxNQUFRLEtBQUssS0FBTCxDQUFXLFFBQWxDO0FBSkYsT0FERjtBQVFEOzs7O0VBdkJlLE1BQU0sUzs7QUF3QnZCOztBQUVELE9BQU8sR0FBUCxHQUFhLEdBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hlczogW11cbiAgICB9XG4gIH1cblxuICBfcG9zdE1lc3NhZ2VUb1N0YXRlKHRleHQpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hlczogdGhpcy5zdGF0ZS5zZWFyY2hlcy5jb25jYXQoSlNPTi5zdHJpbmdpZnkodGV4dCkpfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlEaXZcIj5cbiAgICAgICAgICA8VXNlcklucHV0IHNhdmVUb0FwcCA9IHt0aGlzLl9wb3N0TWVzc2FnZVRvU3RhdGUuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNlYXJjaFJlc3VsdHMgZGF0YSA9IHt0aGlzLnN0YXRlLnNlYXJjaGVzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG53aW5kb3cuQXBwID0gQXBwO1xuIl19