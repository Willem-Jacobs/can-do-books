import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class UpdateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.book.title,
      description: this.props.book.description,
      status: this.props.book.description,
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

  fieldChangeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.updateModal}
          onHide={this.props.closeUpdateModalHandler}
        >
          <Modal.Header>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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
