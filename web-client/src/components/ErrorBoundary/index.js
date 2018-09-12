import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import Authorization from '../../_services/authorization';
import ERRORS from '../../_constants/errors';
import history from '../../history';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      title: '',
      message: '',
      resolve: '',
    };
  }

  componentDidCatch(error) {
    if (error.message === '401') {
      Authorization.authenticate();
    } else {
      const err = ERRORS[error.message];
      if (err) {
        this.setState({
          hasError: true,
          title: err.title,
          message: err.message,
          resolve: err.resolve,
        });
      } else {
        this.setState({
          hasError: true,
          title: 'An error has occured.',
          message: error.message,
          resolve: 'Contact support or try reloading the page.',
        });
      }
    }
  }

  render() {
    const { hasError, title, message, resolve } = this.state;
    const { children } = this.props;

    history.listen(() => {
      if (hasError) {
        this.setState({ hasError: false });
      }
    });

    if (hasError) {
      return (
        <Message negative>
          <Message.Header>{title}</Message.Header>
          <p>{message}</p>
          <p>{resolve}</p>
        </Message>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
