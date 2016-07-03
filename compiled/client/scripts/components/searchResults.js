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
      var time = new Date(item.time).toString();
      return React.createElement(
        "p",
        { key: index, className: "searchResult" },
        item.text,
        React.createElement(
          "span",
          { className: "searchTime" },
          " ",
          time.slice(0, time.length - 15),
          " "
        )
      );
    })
  );
};

window.SearchResults = SearchResults;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoUmVzdWx0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLE1BQUUsSUFBRixRQUFFLElBQUY7QUFBQSxTQUNoQjtBQUFBO0FBQUEsTUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRyxTQUFLLEdBQUwsQ0FBUyxVQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQ3pCLGFBQU8sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFQO0FBQ0EsVUFBSSxPQUFPLElBQUksSUFBSixDQUFTLEtBQUssSUFBZCxFQUFvQixRQUFwQixFQUFYO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBRyxLQUFPLEtBQVYsRUFBaUIsV0FBWSxjQUE3QjtBQUNHLGFBQUssSUFEUjtBQUVFO0FBQUE7QUFBQSxZQUFNLFdBQVUsWUFBaEI7QUFBQTtBQUErQixlQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsS0FBSyxNQUFMLEdBQVksRUFBMUIsQ0FBL0I7QUFBQTtBQUFBO0FBRkYsT0FERjtBQU1DLEtBVEY7QUFGSCxHQURnQjtBQUFBLENBQXRCOztBQWlCQSxPQUFPLGFBQVAsR0FBdUIsYUFBdkIiLCJmaWxlIjoic2VhcmNoUmVzdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlYXJjaFJlc3VsdHMgPSAoe2RhdGF9KSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFJlc3VsdHNcIj5cbiAgICAgICAgPGgzPllvdSBzZWFyY2hlZCBmb3I6IDwvaDM+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpdGVtID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKGl0ZW0udGltZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHAga2V5ID0ge2luZGV4fSBjbGFzc05hbWUgPSBcInNlYXJjaFJlc3VsdFwiPlxuICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2hUaW1lXCI+IHt0aW1lLnNsaWNlKDAsIHRpbWUubGVuZ3RoLTE1KX0gPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbik7XG5cbndpbmRvdy5TZWFyY2hSZXN1bHRzID0gU2VhcmNoUmVzdWx0cztcbiJdfQ==