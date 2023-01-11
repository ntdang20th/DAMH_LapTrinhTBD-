import axios from "axios";

const getListPatient = async () => {
  try {
    const patient = await axios.get(
      "http://10.0.2.2:8000/patient/patient/"
    );
    return patient.data;
  } catch (error) {
    console.log(error);
  }
};

const addPatient = async (request) => {
  const result = axios({
    method: "post",
    url: "http://10.0.2.2:8000/patient/add-patient/",
    data: request
  
  }).then(function (response) {
    return response.data;
  });
  return result;
};

export { getListPatient, addPatient };
