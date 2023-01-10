import axios from "axios";

const user_login = async (username, password, is_doctor) => {
  const result = axios({
    method: "post",
    url: "http://10.0.2.2:8000/api/login/",
    data: {
      username: username,
      password: password,
      is_doctor: is_doctor
    },
  }).then(function (response) {
    return response.data;
  });
  return result;
};

export { user_login };
