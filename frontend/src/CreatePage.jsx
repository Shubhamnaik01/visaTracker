import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosbaseUrl from "./axiosBase";
import axios from "axios";

const CreatePage = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  function handleClick() {
    const visaData = {};
    const result = axios.post("/api/create");
  }

  return (
    <div className="create-page-parent">
      <div className="create-page-body">
        <div className="create-page-heading">
          <h2>Create New Visa</h2>
          <button className="create-page-back" onClick={backToHome}>
            Back to Visa
          </button>
        </div>
        <form>
          <div className="form-fields">
            <label>
              <span className="label-text">Country :</span>
            </label>
            <input
              type="text"
              placeholder="Enter Country"
              className="create-page-input"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>
              <span className="label-text">City :</span>
            </label>
            <input
              type="text"
              placeholder="Enter City"
              className="create-page-input"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <label>
              <span className="label-text">Status :</span>
            </label>
            <select
              className="create-page-input"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="" disabled>
                Select a Status
              </option>
              <option value="Active">Active</option>
              <option value="Booked">Booked</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
          <div className="form-fields">
            <label>
              <span className="label-text">Visa Type :</span>
            </label>
            <select
              className="create-page-input"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select a Type
              </option>
              <option value="Tourist">Tourist</option>
              <option value="Business">Business</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <button className="form-submit-button" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
