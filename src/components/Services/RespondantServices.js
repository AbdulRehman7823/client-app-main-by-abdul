import GenericService from "./GenericService";
class RespondantServices extends GenericService {
  constructor() {
    super();
  }

  getPatients = (_id) => this.get("respondant/patients/" + _id);
}
let respondantServices = new RespondantServices();
export default respondantServices;
