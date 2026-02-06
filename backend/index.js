import express from "express";
import demoData from "./demoData.js";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as createID } from "uuid";
import validator from "./validator.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.port;
const __dirname = path.resolve();

if (process.env.NODE_ENV == "development") {
  app.use(cors());
}
app.use(bodyParser.json());

app.get("/api/alerts", (req, res) => {
  try {
    const country = req.query.country;
    const status = req.query.status;
    let updatedData = [];
    if (country) {
      console.log(country);
      let filteredData = demoData.filter((e) => {
        return e.country.toLowerCase() == req.query.country.toLowerCase();
      });
      updatedData = filteredData;
      console.log(updatedData);
    } else if (status) {
      let filteredData = demoData.filter((e) => {
        return e.status.toLowerCase() == req.query.status.toLowerCase();
      });
      updatedData = filteredData;
      console.log(updatedData);
    } else {
      updatedData = demoData;
    }
    res.status(200).send(updatedData);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error from server while fetching alerts" });
    console.log(error.message);
  }
});

app.post("/api/alerts", validator, (req, res) => {
  try {
    let visaData = req.body;
    visaData = { id: createID().substring(0, 8), ...visaData };
    demoData.push(visaData);
    console.log(demoData);
    console.log("Data added");
    res.status(201).send(demoData);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error from server while creating new alert" });
    console.log(error.message);
  }
});

app.put("/api/alerts/:id", validator, (req, res) => {
  try {
    const id = req.params.id;
    const updatedStatus = req.body;
    const index = demoData.findIndex((i) => {
      return i.id == id;
    });
    let updatedItem = { ...demoData[index], ...updatedStatus };
    demoData[index] = updatedItem;
    res.sendStatus(200);
    console.log(updatedItem);
  } catch (error) {
    res.status(500).send({ message: "Error from server while updating alert" });
    console.log("Error while updating from Server", error.message);
  }
});

app.delete("/api/alerts/:id", (req, res) => {
  try {
    const id = req.params.id;
    const index = demoData.findIndex((i) => {
      return i.id == id;
    });
    demoData.splice(index, 1);
    res.status(200).send(demoData);
    console.log("Alert Deleted ");
  } catch (error) {
    res.status(500).send({ message: "Error from server while deleting alert" });
    console.log("Error while deleting alert", error.message);
  }
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*splat", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server running on port :", port);
});
