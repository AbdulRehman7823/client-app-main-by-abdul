import GenericService from "./GenericService";
class CustomerServices extends GenericService {
  constructor() {
    super();
  }

  getDoctors = () => this.get("admin/doctors");
  getRespondants = () => this.get("admin/respondant");
  getProducts = () => this.get("admin/products");
  requestDoctor = (_id, data) =>
    this.post("patient/request/doctor/" + _id, data);
  requestRespondant = (_id, data) =>
    this.post("patient/request/respondant/" + _id, data);

  /*getDoctor = (_id) => this.delete("admin/doctors/" + _id);
  getRespondant = (_id) => this.delete("admin/respondant/" + _id);
  getProduct = (_id) => this.delete("admin/products/" + _id);*/
}
let customerServices = new CustomerServices();
export default customerServices;
