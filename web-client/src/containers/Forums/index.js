import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';

class Forums extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="forums">
        <CardPanel>
          <h2>Forums Coming Soon!</h2>
        </CardPanel>
      </div>
    );
  }
}

export default Forums;
