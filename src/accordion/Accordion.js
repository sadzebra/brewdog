import React from 'react';

import AccordionElement from './AccordionElement';

const Accordion = props => {

  const titleStyle = {
    listStyle: "none",
    textAlign: "left",
  };

  let accordionElements = Object.keys(props.beers).map(function(keyName, keyIndex) {
      return <AccordionElement
                {...props.beers[keyName]}
                key={props.beers[keyName].id}
              />;
  })

  return (
    <ul className="accordion-root" style={titleStyle}>
      {accordionElements}
    </ul>
  );

}

export default Accordion;
