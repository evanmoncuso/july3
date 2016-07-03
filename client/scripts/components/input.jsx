class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  _printInputData(e) {
    let userInput = this._userInput;
    let currentTime = Date.now();
    if (e.charCode === 13 && userInput.value !== '') {
      this.props.saveToApp({text: userInput.value, time: currentTime});
      userInput.value = '';
    }
  }

  render() {
    return (
      <div className="userInput">
        <input type = "text" id="user_text"
               placeholder = "What would you like to hear?"
               onKeyPress = {this._printInputData.bind(this)}
               ref = {(input) => this._userInput = input}>
        </input>
      </div>
    );
  }
}

window.UserInput = UserInput;
