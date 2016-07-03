const SearchResults = ({data}) => (
      <div className="searchResults">
        <h3>You searched for: </h3>
        {data.map((item, index) => {
          item = JSON.parse(item);
          let time = new Date(item.time);
          return (
            <p key = {index} className = "searchResult">
              {item.text}
              <span className="searchTime"> {time.toString('MMM dd')} </span>
            </p>
          )
          })
        }
      </div>
);

window.SearchResults = SearchResults;
