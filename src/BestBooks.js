import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import UpdateBook from "./UdpateBook";

import "./BestBooks.css";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBooks: [],
      showModal: false,
      updateModal: false,
    };
  }

  componentDidMount = async () => {
    const { getIdTokenClaims, user } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
    };
    try {
      const results = await axios.get(
        `http://localhost:3001/books?email=${user.email}`,
        config
      );
      this.setState({
        bestBooks: results.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  closeModalHandler = () => {
    this.setState({ showModal: false });
  };

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  showUpdateModalHandler = (book) => {
    this.setState({ bookToUpdate: book });
    this.setState({ updateModal: true });
  };

  closeUpdateModalHandler = () => {
    this.setState({ updateModal: false });
  };

  addNewBookSubmitHandler = (event) => {
    event.preventDefault();
    const bookTitle = event.target.bookTitle.value;
    const bookDescription = event.target.bookDescription.value;
    const bookStatus = event.target.bookStatus.value;
    const newBookObject = {
      title: bookTitle,
      description: bookDescription,
      status: bookStatus,
      email: this.props.auth0.user.email,
    };
    this.closeModalHandler();
    this.postNewBookHandler(newBookObject);
  };

  postNewBookHandler = async (newBookObject) => {
    try {
      const results = await axios.post(
        "http://localhost:3001/books",
        newBookObject
      );
      this.setState({ bestBooks: [...this.state.bestBooks, results.data] });
    } catch (err) {
      console.log(err.message);
    }
  };

  deleteBookHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      let remainingBooks = this.state.bestBooks.filter(
        (book) => book._id !== id
      );
      this.setState({ bestBooks: remainingBooks });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let renderBooks = <h1>No Books found. Try adding some</h1>;
    if (this.state.bestBooks.length > 0) {
      renderBooks = this.state.bestBooks.map((book, index) => {
        return (
          <Carousel.Item key={book._id}>
            <Card style={{ width: "20rem", height: "20rem" }}>
              <Card.Body>
                <Card.Title>
                  <h2>{book.title}</h2>
                </Card.Title>
                <Card.Text>
                  <h4>{book.description}</h4>
                  <p>{book.status}</p>
                  <Button onClick={() => this.deleteBookHandler(book._id)}>
                    Delete Book
                  </Button>
                  <Button onClick={() => this.showUpdateModalHandler(book)}>
                    Update Book
                  </Button>
                  {this.state.updateModal && (
                    <UpdateBook
                      book={this.state.bookToUpdate}
                      updateModal={this.state.updateModal}
                      closeUpdateModalHandler={this.closeUpdateModalHandler}
                    />
                  )}
                  <p>Email: {book.email}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        );
      });
    }

    return (
      <>
        <Modal show={this.state.showModal} onHide={this.closeModalHandler}>
          <Modal.Header>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.addNewBookSubmitHandler}>
              <Form.Group controlId="bookTitle">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" />
              </Form.Group>
              <Form.Group controlId="bookDescription">
                <Form.Label>Book Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" />
              </Form.Group>
              <Form.Group controlId="bookStatus">
                <Form.Label>Book Status</Form.Label>
                <Form.Control as="select">
                  <option value="LIFE-CHANGING">Life Changing</option>
                  <option value="FAVORITE FIVE">Favorite Five</option>
                  <option value="RECOMENDED TO ME">Recomended to Me</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit">Save Book</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModalHandler}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button> */}
          </Modal.Footer>
        </Modal>
        <Carousel>{renderBooks}</Carousel>
        <Button onClick={this.showModalHandler}>Add Book</Button>
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
