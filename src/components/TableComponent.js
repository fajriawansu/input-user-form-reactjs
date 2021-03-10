import { faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row, Spinner } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert';

const { SearchBar } = Search;

const handleClick = (id) => {
  swal({
    title: "Yakin ingin menghapus data karyawan ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      console.log("User terhapus id = "+ id);
      swal("Data karyawan sukses dihapus!", {
        icon: "success",
      });
    } else {
      swal("Data karyawan gagal dihapus!");
    }
  });
};

const columns = [
  {
    dataField: "id",
    text: "No",
    sort: true,
    headerStyle: () => {
      return { width: "7%" };
    },
  },
  {
    dataField: "name",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "tangallahir",
    text: "Tanggal Lahir",
    sort: true,
  },
  {
    dataField: "jabatan",
    text: "Jabatan",
    sort: true,
  },
  {
    dataField: "nip",
    text: "NIP",
    sort: true,
  },
  {
    dataField: "jeniskelamin",
    text: "Jenis Kelamin",
    sort: true,
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} />
              Edit
            </Button>
          </Link>
          <Button color="dark" className="mr-2"  onClick={() => handleClick(row.id)}>
            <FontAwesomeIcon icon={faTrash} />
            Hapus
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    errorUsersList: state.users.errorUsersList,
    getUsersList: state.users.getUsersList,
  };
};

const TableComponent = (props) => {
  return (
    <Container fluid>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} />
                      Tambah
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Cari.." />
                  </div>
                </Col>
              </Row>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="row justify-content-md-center">
          <Spinner color="dark" />
          <p>...loading...</p>
          <Spinner color="dark" />
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
