import './post-detail.scss';
import React, { Component } from 'react';
import { Segment, Grid, Header, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Data from '../../_services/data';

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      error: {
        hasError: false,
        status: '',
      },
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    Data.getPostById(id)
      .then(response => this.setState({ post: response.data }))
      .catch(err => this.setState({ error: { hasError: true, status: err.response.status } }));
  }

  render() {
    const { post, error } = this.state;
    if (error.hasError) {
      throw new Error(error.status);
    }

    return (
      <div className="post-detail">
        <Segment textAlign="center">
          <Header as="h2" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content>{post.title}</Header.Content>
          </Header>
          <p>{post.description}</p>
          <p>{post.data}</p>
        </Segment>
      </div>
    );
  }
}

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PostDetail;
