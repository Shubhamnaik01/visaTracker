import { useState } from "react";
import baseURL from "../config/axiosBase";
import { useNavigate } from "react-router-dom";

const TableData = (props) => {
  const data = props.visaData;
  const navigate = useNavigate();

  const [status, setStatus] = useState(data.status);
  const [editStatus, setEditStatus] = useState(false);

  async function handleSave() {
    try {
      const result = await baseURL.put("/alerts/" + data.id, { status });
      if (result.status == 200) {
        console.log("Update is successful");
        setEditStatus(!editStatus);
      }
    } catch (error) {
      console.log("Error While Updating :", error.response.data.message);
    }
  }

  async function handleDelete() {
    try {
      const result = await baseURL.delete("/alerts/" + data.id);
      if (result.status == 200) {
        console.log("Delete is successful");
      }
      props.deleteItem(data.id);
    } catch (error) {
      console.log(
        "Error while deleting the alert",
        error.response.data.message,
      );
    }
  }

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.country}</td>
      <td>{data.city}</td>
      <td className="table-status-data">
        {editStatus ? (
          <input
            type="text"
            className="status-input"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          ></input>
        ) : (
          <p>{status}</p>
        )}
        <div className="status-button-wrapper">
          {editStatus ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button
              onClick={() => {
                setEditStatus(!editStatus);
              }}
            >
              Edit
            </button>
          )}
        </div>
      </td>
      <td>{data.type}</td>
      <td>
        <div className="table-time">{data.createdAt}</div>
        <div className="table-delete-container">
          <button onClick={handleDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
