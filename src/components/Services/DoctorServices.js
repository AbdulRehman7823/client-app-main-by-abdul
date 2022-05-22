import GenericService from "./GenericService";
class DoctorServices extends GenericService {
  constructor() {
    super();
  }

  getPatients = (_id) => this.get("doctor/patients/" + _id);
}
let doctorServices = new DoctorServices();
export default doctorServices;
