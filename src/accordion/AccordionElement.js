import React from 'react';

const AccordionElement = props => {

  const descriptionStyle = {
    listStyle: "none",
    textAlign: "left",
    margin: "0",
    padding: "0"
  }

  const listItemStyle = {
    margin: "0",
    padding: "10px 0 10px 0",
    marginBottom: "5px",
    border: "1px solid black"
  }

  return (
    <li style={listItemStyle}>
      <h1>{ props.name }</h1>
      <ul style={descriptionStyle}>
        <li>Description: { props.description }</li>
      </ul>
    </li>
  );

}

export default AccordionElement;
