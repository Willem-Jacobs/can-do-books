import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import "./BestBooks.css";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBooks: [],
    };
  }

  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };

    const results = await axios.get("http://localhost:3001/books", config);
    console.log(results.data);
    this.setState({
      bestBooks: results.data,
    });
  };

  render() {
    let renderBooks = <h1>No Books found. Try addng some</h1>;
    if (this.state.bestBooks.length > 7) {
      renderBooks = this.state.bestBooks.map((book, index) => {
        return (
          <Carousel.Item key={index}>
            <Card style={{ width: "20rem", height: "20rem" }}>
              <Card.Body>
                <Card.Title>
                  <h2>{book.title}</h2>
                </Card.Title>
                <Card.Text>
                  <h4>{book.description}</h4>
                  <p>Email: {book.email}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        );
      });
    }

    return <Carousel>{renderBooks}</Carousel>;
  }
}

export default withAuth0(MyFavoriteBooks);
