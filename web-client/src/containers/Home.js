import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import HomeFeed from '../components/HomeFeed';
import Data from '../_services/data';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Load all data asynchronously.
    Data.getAllEvents().then((response) => {
      this.setState({ feed: response.data });
    }).catch((error) => {
      this.setState({ error: error.response.status });
    });
  }

  render() {
    const {
      error,
      feed,
    } = this.state;

    if (error) {
      throw new Error(error);
    }

    return (
      <div className="home">
        <Grid>
          <Grid.Column width={8}>
            <HomeFeed items={feed} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
