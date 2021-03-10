import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'
import FormComponent from "../components/FormComponent";
import { getUserDetail } from"../actions/userAction"
import { putUserEdit } from "../actions/userAction";

class EditUserContainer extends Component {

    componentDidMount(){
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }
    handleSubmit(data) {
        this.props.dispatch(putUserEdit(data, this.props.match.params.id))
      }

    render() {
        return (
            <Container>
                <h1>Edit Data Karyawan </h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        )
    }
}

export default connect()(EditUserContainer)