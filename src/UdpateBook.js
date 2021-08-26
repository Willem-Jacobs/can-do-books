import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class UpdateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.book._id,
      title: this.props.book.title,
      description: this.props.book.description,
      status: this.props.book.status,
      email: this.props.book.email,
    };
  }

  //   addNewBookSubmitHandler = (event) => {
  //     event.preventDefault();
  //     const bookTitle = event.target.bookTitle.value;
  //     const bookDescription = event.target.bookDescription.value;
  //     const bookStatus = event.target.bookStatus.value;
  //     const newBookObject = {
  //       title: bookTitle,
  //       description: bookDescription,
  //       status: bookStatus,
  //       email: this.props.auth0.user.email,
  //     };
  //     this.closeModalHandler();
  //     // console.log(newBookObject);
  //     this.postNewBookHandler(newBookObject);
  //   };

  updateBookSubmitHandler = (event) => {
    event.preventDefault();
    const updatedNewBook = this.state;
    // console.log("Updated Book before save: ", updatedNewBook);
    this.props.updateBookHandler(updatedNewBook);
    this.props.closeUpdateModalHandler();
  };

  fieldChangeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.showUpdateModal}
          onHide={this.props.closeUpdateModalHandler}
        >
          <Modal.Header>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.updateBookSubmitHandler}>
              <Form.Group controlId="title">
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  onChange={this.fieldChangeHandler}
                  value={this.state.title}
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  value={this.state.description}
                  onChange={this.fieldChangeHandler}
                />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Book Status</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.status}
                  onChange={this.fieldChangeHandler}
                >
                  <option value="LIFE-CHANGING">Life Changing</option>
                  <option value="FAVORITE FIVE">Favorite Five</option>
                  <option value="RECOMENDED TO ME">Recomended to Me</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit">Update Book</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.props.closeUpdateModalHandler}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateBook;
