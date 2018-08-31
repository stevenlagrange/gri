import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProfileFeed from '../../components/ProfileFeed';
import ProfileHeader from './ProfileHeader';
import ProfileUtilites from '../../components/ProfileUtilites';
import AddPost from '../../components/AddPost';
import { Data } from '../../_services/data';
import { Authorization } from '../../_services/authorization';
import './profile.scss';
import Errors from '../../_constants/errors';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile : {
        user: {
          username: "",
          first_name: "",
          last_name: ""
        }
      },
      posts : []
    }
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    Authorization.verifyUser().then(this.profileLoader());
  }

  profileLoader() {
    this.getPosts();
    this.getProfile();
  }


  sortByDate(posts) {
    // Used to sort posts by date.
    return posts.sort(function(a,b){
      return new Date(b["created_date"]) - new Date(a["created_date"]);
    });
  }

  getProfile() {
    // Retrieve 'Profile' from the server.
    Data.getProfileDetails()
      .then((response) => { this.setState({profile : response.data}) })
      .catch((response) => {
        console.log(Errors.LOADING_RESOURCE_ERROR)
      });
  }

  getPosts() {
    // Retrieve 'Posts' from the server.
    Data.getPosts()
      .then((response) => { this.setState({posts : this.sortByDate(response.data)}) })
      .catch((response) => {
        console.log(Errors.LOADING_RESOURCE_ERROR)
      });
  }

  updateView() {
    // Update view when user 'posts' have changed.
    this.getPosts();
  }

  render() {
    return (
      <div className="profile">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <ProfileHeader
                firstName={ this.state.profile.user.first_name }
                lastName={ this.state.profile.user.last_name }
                username={ this.state.profile.user.username }
                bio={ this.state.profile.bio }
                location={ this.state.profile.location }
              />
              <ProfileUtilites />
            </Grid.Column>
            <Grid.Column width={8}>
              <AddPost updateView={this.updateView}/>
              <ProfileFeed view={this.state.view} items={this.state.posts} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
