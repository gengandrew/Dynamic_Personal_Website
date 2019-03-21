import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import axios from "axios";
import { addToCSV } from "../actions/itemActions";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
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
  /*
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.helper = this.helper.bind(this);
  }
  */
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
    let myData = [
      {
        name: "Hello World",
        school: "UWW",
        work: "UWW",
        song: "cool",
        info: "awesome"
      }
    ];
    console.log("correct");
    this.props.addToCSV(myData);
    this.toggle();
    /*
    e.preventDefault();
    const newItem = {
        name: this.state.name,
        host: this.state.host,
        user: this.state.user,
        password: this.state.password,
        database: this.state.database
    };
    this.props.addAppDatabase(newItem);
    this.props.changeToAppDB(newItem);
    let pingTest = this.props.getAllTables();
    alert(pingTest);
    this.toggle();
    //window.open("http://localhost:3000/bookmark", "something");
    window.open("http://localhost:3000/new_app", "Something");
    */

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
  { addToCSV}
)(itemModal);
