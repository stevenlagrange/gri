import './add-post.scss';
import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import Data from '../../_services/data';

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      post: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleUpdateView = this.handleUpdateView.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handlePostChange(event) {
    this.setState({ post: event.target.value });
  }

  handleUpdateView() {
    this.props.updateView();
  }

  clearForm() {
    this.setState({ title: '' }, { post: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      title,
      post,
    } = this.state;

    const form = {
      title,
      data: post,
      user: 2,
    };
    console.log(form);

    Data.createPost('post', form)
      .then((response) => {
        console.log(response);
        this.handleUpdateView();
        this.clearForm();
      }).catch((response) => {
        console.log(response);
      });
  }


  render() {
    const {
      title,
      post,
    } = this.state;

    return (
      <Segment>
        <Form className="post-form" onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input s={12} label="Title" value={title} onChange={this.handleTitleChange} />
          </Form.Field>
          <Form.Field>
            <Form.Input s={12} type="textarea" label="Let's hear from you..." value={post} onChange={this.handlePostChange} />
          </Form.Field>
          <Button className="right floated primary" type="submit">Create Post</Button>
        </Form>
      </Segment>
    );
  }
}


export default AddPost;
