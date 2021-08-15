import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import "./Header.css";

class Header extends React.Component {
  render() {
    const { isAuthenticated, logout } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        {isAuthenticated && (
          <Button>
            <Link to="/profile">Profile</Link>
          </Button>
        )}
        {isAuthenticated ? (
          <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </Button>
        ) : (
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
