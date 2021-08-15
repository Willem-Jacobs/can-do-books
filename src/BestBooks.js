import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import axios from "axios";

import "./BestBooks.css";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverResponse: "",
    };
  }

  makeRequest = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };

    const serverResponse = await axios.get(
      "http://localhost:3001/test",
      config
    );

    console.log("it worked if data:  ", serverResponse);
  };

  render() {
    const { user } = this.props.auth0;
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        {user && (
          <Button onClick={this.makeRequest}>Make Request to Server</Button>
        )}
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
