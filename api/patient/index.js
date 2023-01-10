import axios from "axios"

const getListDoctor = async () => {
    try {
        const doctors = await axios.get('http://10.0.2.2:8000/patient/has-patient-familiar/')
        // console.log(doctors.data)
        return doctors.data
    } catch (error) {
        console.log(error)
    }
}

export { getListDoctor}
