import React, { Component } from 'react';
import { Col, Row, CardPanel, Collection, CollectionItem } from 'react-materialize';
import { Button, Grid } from 'semantic-ui-react';
import Calendar from '../components/Calendar';
import HomeFeed from '../components/HomeFeed';
import ErrorModal from '../components/ErrorModal';
import { Data } from '../_services/data';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    let _asyncRequest = null
  }

  componentDidMount() {
    // Load all data asynchronously.
    let c = this;
    this._asyncRequest = Data.getAllEvents().then(function(response) {
      c._asyncRequest = null;
      c.setState({feed : response.data});
    }).catch(function(response) {
      // Request Failed, report to user.
      c.errorHandler(c, response.data);
    });
  }

  componentWillUnmount() {
    // Cancel all async requests.
    if (this._asyncRequest) {
      //this._asyncRequest.cancel();
    }
  }

  errorHandler(scope, error) {
    // Handle error
    let errorState = {
      feed : [],
      errorTitle : 'Request failed',
      errorMessage : 'Try signing in again or contact support.',
      showError : false
    };
    scope.setState(errorState);
  }

  render() {
    let errorDisplay;
    if(this.state.showError) {
      errorDisplay = <ErrorModal open={this.state.showError} message={this.state.errorMessage} title={this.state.errorTitle}/>
    }

    return (
      <div className="home">
        { errorDisplay }
        <Grid>
          <Grid.Column width={8}>
            <HomeFeed items={this.state.feed} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
