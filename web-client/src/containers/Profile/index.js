import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import ProfileFeed from '../../components/ProfileFeed';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileUtilites from '../../components/ProfileUtilites';
import AddPost from '../../components/AddPost';
import API from '../../api';
import Models from '../../api/models';
import './profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    // Load server data asynchronously.
    this.getPosts();
  }

  sortByDate(posts) {
    // Used to sort posts by date.
    console.log(posts);
    return posts.sort(function(a,b){
      return new Date(b["created_date"]) - new Date(a["created_date"]);
    });
  }

  getPosts() {
    // Retrieve 'Posts' from the server.
    let c = this;
    API.getPosts(1).then(function(response) {
      let sorted = c.sortByDate(response.data)
      c.setState({posts : sorted});
    });
  }

  updateView() {
    // Update view when user 'posts' have changed.
    this.getPosts();
  }

  render() {
    return (
      <div className="profile">
        <Row>
          <Col s={4}>
            <ProfileHeader
              name={'Steven Lagrange'}
              bio={'Computer Engineer'}
            />
            <ProfileUtilites />
          </Col>
          <Col s={8}>
            <AddPost updateView={this.updateView}/>
            <ProfileFeed view={this.state.view} items={this.state.posts} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
