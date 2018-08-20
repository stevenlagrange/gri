import React, { Component } from 'react';
import { Col, Row, CardPanel, Input, Icon } from 'react-materialize';

class SearchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className="search-item">
        <CardPanel>
          <p>Search item here</p>
        </CardPanel>
      </Row>
    );
  }
}

export default SearchItem;
