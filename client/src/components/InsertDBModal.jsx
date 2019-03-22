import React, { Component } from "react";
import { connect } from "react-redux";
import { addInfoToDB, addToCSV } from "../actions/itemActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class itemModal extends Component {
  state = {
    modal: false,
    name: "",
    school: "",
    work: "",
    song: "",
    info: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChangeName = e => {
    this.setState({ name: e.target.value });
  };

  onChangeSchool = e => {
    this.setState({ school: e.target.value });
  };

  onChangeWork = e => {
    this.setState({ work: e.target.value });
  };

  onChangeSong = e => {
      this.setState({ song: e.target.value });
  };

  onChangeInfo = e => {
      this.setState({ info: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let myData = {
        name: "Hello World",
        school: "UWW",
        work: "UWW",
        song: "cool",
        info: "awesome"
    };
    console.log(myData);
    //this.props.addToCSV(myData);
    //this.props.addInfoToDB(myData);
    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <a className="nav-link" onClick={this.toggle}>
          Survey
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>New Survey</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="What's Your Name"
                  onChange={this.onChangeName}
                />
                <Input
                  type="text"
                  name="school"
                  id="item"
                  placeHolder="Where did you go to School?"
                  onChange={this.onChangeSchool}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="work"
                  id="item"
                  placeHolder="Where do you work?"
                  onChange={this.onChangeWork}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="song"
                  id="item"
                  placeHolder="What song's currently stuck in your head?"
                  onChange={this.onChangeSong}
                  style={{ marginTop: "10px" }}
                />
                <Input
                  type="test"
                  name="info"
                  id="item"
                  placeHolder="What brought you to my Website?"
                  onChange={this.onChangeInfo}
                  style={{ marginTop: "10px" }}
                />
                <Button color="dark" style={{ marginTop: "1rem" }} block>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    item: state.item
  });

export default connect(
  mapStateToProps,
  { addToCSV, addInfoToDB }
)(itemModal);
