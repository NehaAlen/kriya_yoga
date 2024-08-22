import React from 'react';
import { InlineWidget } from 'react-calendly';

function Event() {
  return (
    <div>
      <InlineWidget
        url="https://calendly.com/neha-alen-agileworldtechnologies/free-consultation-call"
        styles={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}

export default Event;

 