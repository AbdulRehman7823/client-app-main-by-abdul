import React from "react";
const Medicine = ({ item }) => {
  return (
    <div>
      <div className="card shadow-lg" id="MedicineCard">
        <img
          className="card-img-top "
          id="productImg"
          src={item.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <div className="d-flex">
            <a className="btn btn-primary col-6" onClick={(e) => {}}>
              Add to cart
            </a>
            <p className="card-text col-6 mt-1 ms-5">
              <strong>{item.price}PKR</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Medicine;
