import axios from "axios";
import TableData from "./TableData";
// import data from "../../backend/demoData";
import baseURL from "./axiosBase";
import { useState, useEffect } from "react";

const VisaDetail = () => {
  const [visaData, setVisaData] = useState([]);

  function removeItem(id) {
    const newData = visaData.filter((i) => i.id != id);
    setVisaData(newData);
  }

  async function getAlerts() {
    try {
      const result = await baseURL.get("/alerts");
      setVisaData(result.data);
    } catch (error) {
      console.log("Error While fetching alerts :", error.message);
    }
  }

  useEffect(() => {
    getAlerts();
  }, []);

  return (
    <div className="table-container">
      <table className="visa-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Status</th>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {visaData.map((e) => {
            return (
              <TableData key={e.id} visaData={e} deleteItem={removeItem} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VisaDetail;
