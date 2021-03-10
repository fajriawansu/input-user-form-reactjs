import React, { Component } from "react";
import { reduxForm, Field, Form } from "redux-form";
import { connect } from "react-redux";
import {
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
  Container,
} from "reactstrap";
import { UserValidation } from "../validations/UserValidation";
import Select from "react-select";
import swal from "sweetalert";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { BackComponent } from "./BackComponent";

const options = [
  { value: "System Analyst", label: "System Analyst" },
  { value: "BPS", label: "BPS" },
  { value: "Programmer", label: "Programmer" },
  { value: "Tester", label: "Tester" },
  { value: "Helpdesk", label: "Helpdesk" },
];

const handleClick = () => {
  swal({
    title: "Yakin ingin menambahkan data karyawan ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Data karyawan berhasil ditambah!", {
        icon: "success",
      });
    } else {
      swal("Data karyawan gagal ditambahkan");
    }
  });
};

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.users.getUserDetail.name,
      tanggallahir: state.users.getUserDetail.tanggallahir,
      jabatan: state.users.getUserDetail.jabatan,
      nip: state.users.getUserDetail.nip,
      jeniskelamin: state.users.getUserDetail.jeniskelamin,
    },
  };
};

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Container>
          <FormGroup >
            <Col md={6}>
              <FormGroup>
                <Field
                  type="text"
                  name="name"
                  component={renderField}
                  label="Nama: "
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="d-flex justify-content-between">
                <label>Tanggal Lahir: </label>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  name="tanggallahir"
                  dateFormat="MM/dd/yyyy"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <label>Jabatan: </label>
                <Select options={options} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Field
                  type="text"
                  name="nip"
                  component={renderField}
                  label="NIP: "
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <label>Jenis Kelamin: </label>

                <Col className="d-flex justify-content-around">
                  <label>
                    <Field
                      name="jeniskelamin"
                      component={renderField}
                      type="radio"
                      value="Laki-laki"
                    />{" "}
                    Laki-laki
                  </label>
                  <label>
                    <Field
                      name="jeniskelamin"
                      component={renderField}
                      type="radio"
                      value="Perempuan"
                    />{" "}
                    Perempuan
                  </label>
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="12">
              <FormGroup row>
                <BackComponent />
                <Button
                  className="mb-2"
                  color="dark"
                  type="submit"
                  disabled={this.props.submitting}
                  onClick={() => handleClick()}
                >
                  Submit
                </Button>
              </FormGroup>
            </Col>
          </FormGroup>
        </Container>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
