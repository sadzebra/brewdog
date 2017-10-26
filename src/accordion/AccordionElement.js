import React from 'react';

const AccordionElement = props => {

  console.log("Accordionelements Props", props);

  return (
    <li>{ props.name }</li>
  );

}

export default AccordionElement;
