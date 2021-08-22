import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Spinner from "react-bootstrap/Spinner";

class IsLoadingAndError extends React.Component {
  render() {
    return this.props.auth0.isLoading ? (
      <Spinner animation="border" variant="warning" />
    ) : this.props.auth0.error ? (
      <div>Oops... {this.props.auth0.error.message}</div>
    ) : (
      this.props.children
    );
  }
}

export default withAuth0(IsLoadingAndError);
