import React, { Component } from 'react';

// const obj = {
//   a: 3, 
//   f() {
//     console.log(this.a)
//   }
// }

// const f2 = obj.f;

// obj.f();
// f2();

// # 123adc  

const validSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];

function isValidColorValue(str) {
  if (!(str[0] === '#' && str.length === 7)) return false;
  for (let i = 1; i < str.length; i++) {
    if (!validSymbols.includes(str[i])) return false;
  }
  return true;
}

class App extends Component {
  state = {
    firstColor: '',
    secondColor: ''
  }

  handleFirstColorInput = (event) => {
    this.setState({
      firstColor: event.target.value
    });
  }

  handleSecondColorInput = (event) => {
    this.setState({
      secondColor: event.target.value
    });
  }

  handleClick = (event) => {
    // linear-gradient(to top, #aaa, #27a)
    // linear-gradient(to top, this.state.firstColor, this.state.secondColor)
    // const background = 'linear-gradient(to top, ' + this.state.firstColor +', ' + this.state.secondColor + ')';
    const background = `linear-gradient(to top, ${this.state.firstColor}, ${this.state.secondColor})`;
    this.setState({
      background
    });
  }

  render() {
    return (
      <div
        className="wrapper"
        style={{
          background: this.state.background
        }}>
        <input value={this.state.firstColor} onChange={this.handleFirstColorInput} />
        <input value={this.state.secondColor} onChange={this.handleSecondColorInput} />
        <button
          onClick={this.handleClick}
          disabled={!isValidColorValue(this.state.firstColor) || !isValidColorValue(this.state.secondColor)}
        >
          Go
        </button>
      </div>
    )
  }
}

export default App;
