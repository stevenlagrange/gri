import React, { Component } from 'react';
import { CardPanel, Icon } from 'react-materialize';
import { Segment, Button } from 'semantic-ui-react';
import dateFormatter from '../../_utilities/dateFormatter';

class PostView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-view">
        <Segment>
          <h4>{ this.props.title }</h4>
          <p>{ this.props.data }</p>
          <p>{ this.props.created_data }</p>

          <Button.Group className="post-actions" size="tiny">
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Button.Group>

        </Segment>
      </div>
    );
  }
}

export default PostView;
