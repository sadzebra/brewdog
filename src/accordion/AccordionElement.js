import React, { Component } from 'react';

class AccordionElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOnClick = (e) => {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  renderDescription() {
    const description = (
      <ul>
        <li>Description: { this.state.description }</li>
      </ul>
    );
    return this.state.open ? description : null;
  }

  render(){
    return (
      <li onClick={this.handleOnClick}>
        <h1>{ this.props.name }</h1>
        <li >
          {this.renderDescription()}
        </li>
      </li>
    );
  }

}

export default AccordionElement;
