import React from 'react';

import AccordionElement from './AccordionElement';

const Accordion = props => {

  console.log("Props", props.beers);

  // let elements = props.map(el => {
  // });

  let test = Object.keys(props.beers).map(function(keyName, keyIndex) {
    // console.log("name", props.beers[keyName].name);
      return <AccordionElement name={props.beers[keyName].name} />
    // use keyName to get current key's name
    // and a[keyName] to get its value
  })


  return (
    <ul>
      {test}
    </ul>
  );

}

export default Accordion;
