import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SET_USER_NAME } from "../actions/actionTypes";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setUserName: (username) =>
    dispatch({
      type: SET_USER_NAME,
      payload: username,
    }),
});

class BookRentalCounter extends Component {
  state = {
    showModal: false,
    username: null,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <>
        <div className="cart mt-2">
          {this.props.user && this.props.user.username ? (
            <>
              <div style={{ marginLeft: "auto" }}>
                <Router>
                  <Button
                    className="float-right"
                    onClick={() => this.props.history.push("/mylist")}
                  >
                    <FontAwesomeIcon icon={faBook} id="cartIcon" />
                    <span className="ml-2">
                      {this.props.borrowedList.myBooks.length}
                    </span>
                  </Button>
                </Router>
              </div>
            </>
          ) : (
            <Button
              className="float-right"
              onClick={() => this.setState({ showModal: true })}
            >
              Login
            </Button>
          )}
        </div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showModal}
          onHide={this.toggleModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create account to continue
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="user"
                onChange={(e) => this.setState({ username: e.target.value })}
                placeholder="choose a username"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.toggleModal()}>Close</Button>
            <Button
              onClick={() => {
                this.props.setUserName(this.state.username);
                this.toggleModal();
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookRentalCounter)
);
