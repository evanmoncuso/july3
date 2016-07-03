class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searches: []
    }
  }

  _postMessageToState(text) {
    console.log(text);
    this.setState({searches: this.state.searches.concat(JSON.stringify(text))});
  }

  render () {
    return (
      <div>
        <div className="displayDiv">
          <UserInput saveToApp = {this._postMessageToState.bind(this)}/>
        </div>
        <SearchResults data = {this.state.searches}/>
      </div>
    );
  }
};

window.App = App;
