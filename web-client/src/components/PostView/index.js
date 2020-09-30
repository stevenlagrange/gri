import './post-view.scss';
import React, { Component } from 'react';
import { Segment, Button, Dropdown, Item } from 'semantic-ui-react';
import dateFormatter from '../../_utilities/dateFormatter';
import history from '../../history';

class PostView extends Component {
  handleItemClick = (e) => {
    console.log(e.target.name);
    this.setState(history.push(`/posts/${e.target.name}`));
  }

  render() {
    const { title, description, author, created_date, id } = this.props;
    console.log(id);
    const createDate = dateFormatter.formatDate(created_date);
    return (
      <Item>
        <Item.Content>
          <Dropdown item floating className="post-actions">
            <Dropdown.Menu>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Item.Header as="a" name={id} onClick={this.handleItemClick}>
            {title}
          </Item.Header>
          <Item.Meta>
            {author}
            <br />
            {createDate}
          </Item.Meta>
          <Item.Description>
            {description}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}



export default PostView;
