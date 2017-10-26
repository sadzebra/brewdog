import React from 'react';

import AccordionElement from './AccordionElement';

const Accordion = props => {

  console.log("Props", props.beers);

  const titleStyle = {
    listStyle: "none",
    textAlign: "left",
  };

  let test = Object.keys(props.beers).map(function(keyName, keyIndex) {
      return <AccordionElement
                name={props.beers[keyName].name}
                description={props.beers[keyName].description}
              />;
  })


  return (
    <ul classname="accordion" style={titleStyle}>
      {test}
    </ul>
  );

}

export default Accordion;
