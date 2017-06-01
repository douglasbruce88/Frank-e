import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

// There are multiple ways to implement this component. This is one.
var VacancySign = React.createClass({
  render: function() {
    var text;
    if (this.props.hasvacancy) {
      text = 'Vacancy';
    } else {
      text = 'No Vacancy';
    }
    return <div>{text}</div>;
  }
});

var BannerAd = React.createClass({
  onMagicClick: function(evt) {
    alert('TAADAH!')
  },

  render: function() {
    // Render the div with an onClick prop (value is a function)
    return <button onClick={this.onMagicClick}>Do Magic</button>
  }
});

var CowClicker = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  onCowClick: function(evt) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  },

  render: function() {
    return (
      <div>
        <div>Clicks: {this.state.clicks}</div>
        <img
          src="http://s3.bypaulshen.com/buildwithreact/cow.png"
          onClick={this.onCowClick}
          className="cow"
        />
        <p>Click the cow</p>
      </div>
    );
  }
});

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
          <button style = {buttonStyle}>Hello</button>
          <div>{ipsumText}</div>
        </div>
        <br/>
        <VacancySign hasvacancy={true} />
        <br/>
        <BannerAd/>
        <br/>
        <br/>
        <CowClicker />
      </div>
    );
  }
}

export default App;
