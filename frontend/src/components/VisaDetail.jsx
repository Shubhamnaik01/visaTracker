import TableData from "./TableData";
import baseURL from "../config/axiosBase";
import { useState, useEffect } from "react";

const VisaDetail = () => {
  const [visaData, setVisaData] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  function removeItem(id) {
    const newData = visaData.filter((i) => i.id != id);
    setVisaData(newData);
  }

  async function getAlerts(filter = "", filterValue = "") {
    setLoading(true);
    try {
      let url = "/alerts";
      if (filter && filterValue) {
        url = url + `?${filter}=${filterValue}`;
      }
      const result = await baseURL.get(url);
      if (!Array.isArray(result.data)) {
        setVisaData([]);
        console.log(error + " While sending");
      } else {
        setVisaData(result.data);
      }
    } catch (error) {
      console.log("Error While fetching alerts :", error.response.data.message);
      setVisaData([]);
    } finally {
      setLoading(false);
    }
  }

  function resetFilters() {
    getAlerts();
    setFilter("");
    setFilterValue("");
  }
  function handleSave() {
    setFilterStatus(!filterStatus);
  }

  async function handleFilter() {
    setFilterStatus(!filterStatus);
    if (filterStatus) {
      setFilter("");
      setFilterValue("");
    }
  }

  useEffect(() => {
    if (filterStatus == false) {
      getAlerts(filter, filterValue);
    }
  }, [filterStatus]);

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
                {!filterStatus && (
                  <button className="reset-filter" onClick={resetFilters}>
                    Reset
                  </button>
                )}
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
          {loading ? (
            <tr>
              <td>
                <h2>Loading....</h2>
              </td>
            </tr>
          ) : visaData.length > 0 ? (
            visaData.map((e) => {
              return (
                <TableData key={e.id} visaData={e} deleteItem={removeItem} />
              );
            })
          ) : (
            <tr>
              <td>
                <h2>No Alerts</h2>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VisaDetail;
