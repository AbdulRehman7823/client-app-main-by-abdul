import React from "react";
import Medicine from "./Medicine";
import customerServices from "../Services/CustomerServices";

const MedicineList = () => {
  const [items, setItems] = React.useState([]);
  function getData() {
    customerServices
      .getProducts()
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(getData, []);
  return (
    <div
      className="container
"
      id="medicines"
    >
      <h1>Medicines</h1>
      {items.length == 0 ? (
        <p>There ar no medicines</p>
      ) : (
        <div className="row cardLayOut" id="medicineList">
          {items.map((item, key) => (
            <div className="col-lg-3 col-md-5 col-sm-8 col-10 ">
              <Medicine key={key} item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicineList;
