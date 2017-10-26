import React from 'react';

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
      <div>
        Description: { this.props.description }
      </div>
    );
    return this.state.open ? description : null;
  }

  renderTitle(){
    return (
      <h1>{ this.props.name + ' ' } <span className="abv-title"> { this.props.abv + '%' }</span></h1>
    );

  }

  render(){
    return (
      <li onClick={this.handleOnClick}>
        { this.renderTitle() }
        { this.renderDescription() }
      </li>
    );
  }

}

export default AccordionElement;
