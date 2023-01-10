import axios from "axios"

const login_doctor = async (username, password) => {
    // const result = await axios.post('http://10.0.2.2:8000/doctor/doctor_login/', 
    // {username, password})
    
    const res = axios({
        method: 'post',
        url: 'http://10.0.2.2:8000/doctor/doctor_login/',
        data: {
          username: username,
          password: password
        }
      })
    return res.data;
}

export { login_doctor}