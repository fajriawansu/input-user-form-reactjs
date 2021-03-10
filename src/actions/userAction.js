import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/fajriawansu/curd-reactjs/users")
      // ketika dicek pada devops redux chrome extension, status state baru telah dibuat
      // namun karena ini memakai fake REST API, maka database tidak terupdate
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/fajriawansu/curd-reactjs/users/"+id)
      // ketika dicek pada devops redux chrome extension, status state baru telah dibuat
      // namun karena ini memakai fake REST API, maka database tidak terupdate
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://my-json-server.typicode.com/fajriawansu/curd-reactjs/users",
        data
      )
      // ketika dicek pada devops redux chrome extension, status state baru telah dibuat
      // namun karena ini memakai fake REST API, maka database tidak terupdate
      .then(function (response) {
        // handle success
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const putUserEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "http://my-json-server.typicode.com/fajriawansu/curd-reactjs/users/"+id,
        data
      )
      // ketika dicek pada devops redux chrome extension, status state baru telah dibuat
      // namun karena ini memakai fake REST API, maka database tidak terupdate
      .then(function (response) {
        // handle success
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};
