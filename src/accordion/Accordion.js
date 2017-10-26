import React from 'react';

import AccordionElement from './AccordionElement';

const Accordion = props => {

  console.log("Props", props);

  return (
    <ul>
      <AccordionElement />
    </ul>
  );

}

export default Accordion;
