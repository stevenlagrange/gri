import React, { Component } from 'react';
import { Col, Row, CardPanel, Collection, CollectionItem } from 'react-materialize';
import { Button } from 'semantic-ui-react';
import Calendar from '../components/Calendar';
import HomeFeed from '../components/HomeFeed';
import API from '../api'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let c = this;
    API.getEvents(1).then(function(response) {
      c.setState({feed : response.data});
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <Row>
          <Col s={2}>
            <Collection >
              <CollectionItem href='/events'>Events</CollectionItem>
              <CollectionItem href='/forums'>Forums</CollectionItem>
            </Collection>
          </Col>
          <Col s={10}>
            <HomeFeed items={this.state.feed} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
