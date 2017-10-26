import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Accordion from './accordion/Accordion';

class App extends Component {
  constructor(){
  	super();
  	this.state = {
      beers: {}
    };
  }

  componentDidMount() {
    /*
      Get data using axios
    */
    axios.get('https://api.punkapi.com/v2/beers')
      .then(responseData => {
        this.setState({ beers: responseData.data });
      })
      .catch(error => {
        console.log("Porblem getting data", error);
      });
  }

  render() {
    return (
      <div className="App">
        <Accordion beers={this.state.beers} />
      </div>
    );
  }
}

export default App;
