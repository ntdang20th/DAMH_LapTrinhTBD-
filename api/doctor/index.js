import axios from "axios";

const getListDoctor = async () => {
  try {
    const doctors = await axios.get("http://10.0.2.2:8000/doctor/doctor/");
  } catch (error) {
    console.log(error);
  }
};

export { getListDoctor };
