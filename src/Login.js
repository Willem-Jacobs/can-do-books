import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import LoginButton from './LoginButton';
import { withAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import "./Login.css";

class Login extends React.Component {
  render() {
    const { loginWithRedirect } = this.props.auth0;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>Click Below to Log In</Card.Text>
          {/* <LoginButton /> */}
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default withAuth0(Login);
