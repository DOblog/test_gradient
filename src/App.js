import React, { Component } from 'react';

const regEx = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

function isValidColorValue(str) {
  return regEx.test(str);
}

class App extends Component {
  state = {
    firstColor: '',
    secondColor: ''
  }

  handleColorInput = (stateColorField) => (event) => {
    this.setState({
      [stateColorField]: event.target.value
    }, this.changeBackground);
  }

  changeBackground = () => {
    // const firstColor = this.state.firstColor;
    // const secondColor = this.state.secondColor;
    const { firstColor, secondColor } = this.state;

    if (isValidColorValue(firstColor) && isValidColorValue(secondColor)) {
      const background = `linear-gradient(to top, ${firstColor}, ${secondColor})`;
      this.setState({ background });
    }
  }

  render() {
    const { firstColor, secondColor, background } = this.state;

    return (
      <div
        className="wrapper"
        style={{ background }}
      >
        <div className="inner">
          <input value={firstColor} onChange={this.handleColorInput('firstColor')} />
          <input value={secondColor} onChange={this.handleColorInput('secondColor')} />
        </div>
      </div>
    )
  }
}

export default App;
