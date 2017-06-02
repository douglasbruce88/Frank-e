//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

// There are multiple ways to implement this component. This is one.
class VacancySign extends React.Component {
  render() {
    var text;
    if (this.props.hasvacancy) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }
    return <div>{text}</div>;
  }
};

const NewComponent = (props) => {
  return (
    <div>
      test
    </div>
  )
}

class BannerAd2 extends React.Component {
  onMagicClick(evt) {
    alert('TAADAH!')
  }
  render() {
    // Render the div with an onClick prop (value is a function)
    return <button onClick={this.onMagicClick}>Do Magic</button>
  }
}

class CowClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 }
  }

  onCowClick = (evt) => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div>
        <div>Clicks: {this.state.clicks}</div>
        <img
          src='http://s3.bypaulshen.com/buildwithreact/cow.png'
          alt="Cow!"
          onClick={this.onCowClick}
          className="cow"
        />
        <p>Click the cow</p>

        <NewComponent />
      </div>
    );
  }
};

class Board extends React.Component {
  render() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
};

class BoardSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedIndex: 0 }
  }

  onToggleClick = (evt) => {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.numBoards
    });
  }

  render() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      var isSelected = ii === this.state.selectedIndex;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleClick}>Toggle</button>
      </div>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Say hello to Frank-e</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button style={buttonStyle}>Hello</button>
          <div>{ipsumText}</div>
        </div>
        <br />
        <VacancySign hasvacancy={true} />
        <br />
        <BannerAd2 />
        <br />
        <br />
        <CowClicker />
        <BoardSwitcher numBoards={3} />
      </div>
    );
  }
}

export default App;
