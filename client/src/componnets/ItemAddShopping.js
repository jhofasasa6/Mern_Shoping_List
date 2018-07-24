import React, { Component } from "react";
import { addItem } from "../actions/itemAction";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  FormGroup,
  Form,
  Label
} from "reactstrap";
import { connect } from "react-redux";

class AddItemShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    this.props.addItem(newItem);

    this.toggle();

  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          onClick={this.toggle}
          style={{ marginBottom: "2rem" }}
        >
          Add Item
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item" onChange={this.onChange}>
                  Item:
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping item"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    item: state.item
  });

export default connect(mapStateToProps,{addItem})(AddItemShopping);
