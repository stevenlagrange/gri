import React from 'react';
import { Segment } from 'semantic-ui-react';
import dateFormatter from '../../_utilities/dateFormatter';

function DateHeader({ date }) {
  return (
    <Segment>
      <p>{ date.toString() }</p>
    </Segment>
  );
}

export default DateHeader;
