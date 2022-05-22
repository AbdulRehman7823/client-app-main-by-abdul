import React from "react";
import Stakeholder from "./Stakeholder";
const StakeholderMapper = ({ method, dataType }) => {
  const [stakeholders, setStakeholders] = React.useState([]);
  function getData() {
    method()
      .then((data) => {
        console.log(data);
        setStakeholders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(getData, [method]);
  return (
    <div className="container" id="stakeholder">
      <h1 style={{ marginTop: "5rem" }}>{dataType}</h1>
      {stakeholders.length == 0 ? (
        <p>There is no data </p>
      ) : (
        <div className="row cardLayOut justify-content-center">
          {stakeholders.map((stakeholder, key) => (
            <div className="col-lg-5 ">
              <Stakeholder
                key={key}
                stakeholder={stakeholder}
                dataType={dataType}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StakeholderMapper;
