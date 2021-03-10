import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { postUserCreate } from "../actions/userAction";
import swal from 'sweetalert';

const mapStateToProps = (state) => {
  return {
    getUserCreate: state.users.getUserCreate,
    errorUserCreate: state.users.errorUserCreate,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if(this.props.getUserCreate){
      swal("Berhasil!", "Data "+this.props.getUserCreate.name+" telah diinput!", "success");
    }

    return (
      <Container>
        <h1>Add Data Karyawan</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
