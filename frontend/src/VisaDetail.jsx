import TableData from "./TableData";
import baseURL from "./axiosBase";
import { useState, useEffect } from "react";

const VisaDetail = () => {
  const [visaData, setVisaData] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [save, setSaveStatus] = useState(false);

  function removeItem(id) {
    const newData = visaData.filter((i) => i.id != id);
    setVisaData(newData);
  }

  async function getAlerts(filter = "", filterValue = "") {
    try {
      let url = "/alerts";
      if (filter && filterValue) {
        url = url + `?${filter}=${filterValue}`;
      }
      const result = await baseURL.get(url);
      setVisaData(result.data);
    } catch (error) {
      console.log("Error While fetching alerts :", error.message);
    }
  }

  function handleSave() {
    setFilterStatus(!filterStatus);
    setSaveStatus(!save);
  }

  async function handleFilter() {
    setFilterStatus(!filterStatus);
    if (filterStatus) {
      setFilter("");
      setFilterValue("");
    }
  }

  useEffect(() => {
    getAlerts(filter, filterValue);
  }, [save]);

  console.log(filter);
  console.log(filterValue);

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
            <th className="table-heading-time">
              <p>Time</p>
              <div>
                <button className="table-filter" onClick={handleSave}>
                  {filterStatus ? "Save" : "Filter"}
                </button>
                {filterStatus && (
                  <select
                    name="filter"
                    className="table-select"
                    value={filter}
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
                  >
                    <option value="">Select filter</option>
                    <option value="country">Country</option>
                    <option value="status">Status</option>
                  </select>
                )}
                {filterStatus && (
                  <input
                    className="filter-value"
                    type="text"
                    name="filterValue"
                    onChange={(e) => {
                      setFilterValue(e.target.value);
                    }}
                  />
                )}
              </div>
            </th>
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
