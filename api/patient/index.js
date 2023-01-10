import axios from "axios";

const getListPatient = async () => {
  try {
    const patient = await axios.get("http://10.0.2.2:8000/patient/patient/");
    return patient.data;
  } catch (error) {
    console.log(error);
  }
};

export { getListPatient };
