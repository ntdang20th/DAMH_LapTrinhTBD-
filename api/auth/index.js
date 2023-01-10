import axios from "axios"

const login_doctor = async (username, password) => {  
    const result = axios({
        method: 'post',
        url: 'http://10.0.2.2:8000/doctor/doctor_login/',
        data: {
          username: username,
          password: password
        }
      }).then(function (response) {
        return response.data;
    })
    return result;
}

export { login_doctor}