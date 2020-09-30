import './profile.scss';
import React, { Component } from 'react';
import { Grid, Header, Icon, Segment, Item, Sticky } from 'semantic-ui-react';
import ProfileFeed from '../../components/ProfileFeed';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileUtilites from '../../components/ProfileUtilites';
import Calendar from '../../components/Calendar';
import Data from '../../_services/data';
import Authorization from '../../_services/authorization';
import Errors from '../../_constants/errors';

function sortByDate(items, key) {
  return items.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        user: {
          username: '',
          first_name: '',
          last_name: '',
        },
      },
      posts: [],
    };
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    Authorization.verifyUser().then(this.profileLoader());
  }


  getProfile() {
    // Retrieve 'Profile' from the server.
    Data.getProfileDetails()
      .then((response) => { this.setState({ profile: response.data }); })
      .catch(() => {
        console.log(Errors.LOADING_RESOURCE_ERROR)
      });
  }

  getPosts() {
    // Retrieve 'Posts' from the server.
    Data.getPosts()
      .then((response) => { this.setState({ posts: sortByDate(response.data, 'created_date') }); })
      .catch(() => {
        console.log(Errors.LOADING_RESOURCE_ERROR)
      });
  }


  profileLoader() {
    this.getPosts();
    this.getProfile();
  }

  updateView() {
    // Update view when user 'posts' have changed.
    this.getPosts();
  }

  handleContextRef = contextRef => this.setState({ contextRef });


  render() {
    const {
      profile: {
        user: {
          first_name: firstName,
          last_name: lastName,
          username: userName,
        },
        bio,
        location,
      },
      posts,
      view,
    } = this.state;
    const { contextRef } = this.state;

    return (
      <div className="profile">
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Segment>
                <ProfileHeader
                  firstName={firstName}
                  lastName={lastName}
                  username={userName}
                  bio={bio}
                  location={location}
                />
                <ProfileUtilites />
              </Segment>
              <Calendar />
            </Grid.Column>
            <Grid.Column width={10}>
              <Item.Group>
                <ProfileFeed view={view} items={posts} />
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}


export default Profile;
