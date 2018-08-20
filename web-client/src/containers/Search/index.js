import React, { Component } from 'react';
import { Col, Row, CardPanel, Input, Icon } from 'react-materialize';
import SearchItem from './SearchItem'


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search">
        <h1>Search</h1>
        <CardPanel>
          <Row>
            <Input s={6} label="Search..." validate><Icon>search</Icon></Input>
          </Row>
        </CardPanel>
        <SearchItem />
      </div>
    );
  }
}

export default Search;
