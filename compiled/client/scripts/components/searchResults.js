"use strict";

var SearchResults = function SearchResults(_ref) {
  var data = _ref.data;
  return React.createElement(
    "div",
    { className: "searchResults" },
    React.createElement(
      "h3",
      null,
      "You searched for: "
    ),
    data.map(function (item, index) {
      item = JSON.parse(item);
      var time = new Date(item.time);
      return React.createElement(
        "p",
        { key: index, className: "searchResult" },
        item.text,
        React.createElement(
          "span",
          { className: "searchTime" },
          " ",
          time.toString('MMM dd'),
          " "
        )
      );
    })
  );
};

window.SearchResults = SearchResults;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoUmVzdWx0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLE1BQUUsSUFBRixRQUFFLElBQUY7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRyxTQUFLLEdBQUwsQ0FBUyxVQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQ3pCLGFBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFQO0FBQ0EsVUFBSSxPQUFPLElBQUksSUFBSixDQUFTLEtBQUssSUFBZCxDQUFYO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBRyxLQUFPLEtBQVYsRUFBaUIsV0FBWSxjQUE3QjtBQUNHLGFBQUssSUFEUjtBQUVFO0FBQUE7QUFBQSxZQUFNLFdBQVUsWUFBaEI7QUFBQTtBQUErQixlQUFLLFFBQUwsQ0FBYyxRQUFkLENBQS9CO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFNQyxLQVRGO0FBRkgsR0FEZ0I7QUFBQSxDQUF0Qjs7QUFpQkEsT0FBTyxhQUFQLEdBQXVCLGFBQXZCIiwiZmlsZSI6InNlYXJjaFJlc3VsdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZWFyY2hSZXN1bHRzID0gKHtkYXRhfSkgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hSZXN1bHRzXCI+XG4gICAgICAgIDxoMz5Zb3Ugc2VhcmNoZWQgZm9yOiA8L2gzPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaXRlbSA9IEpTT04ucGFyc2UoaXRlbSk7XG4gICAgICAgICAgbGV0IHRpbWUgPSBuZXcgRGF0ZShpdGVtLnRpbWUpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBrZXkgPSB7aW5kZXh9IGNsYXNzTmFtZSA9IFwic2VhcmNoUmVzdWx0XCI+XG4gICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaFRpbWVcIj4ge3RpbWUudG9TdHJpbmcoJ01NTSBkZCcpfSA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuKTtcblxud2luZG93LlNlYXJjaFJlc3VsdHMgPSBTZWFyY2hSZXN1bHRzO1xuIl19