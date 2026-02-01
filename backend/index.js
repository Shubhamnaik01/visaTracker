import express from "express";
import demoData from "./demoData.js";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as createID } from "uuid";

const app = express();
const port = 2000;

app.use(cors());
app.use(bodyParser.json());

// const visaData = demoData;

app.get("/api/alerts", (req, res) => {
  try {
    res.send(demoData);
  } catch (error) {
    res.send(error.message);
    console.log(error.message);
  }
});

app.post("/api/alerts", (req, res) => {
  try {
    let visaData = req.body;
    visaData = { id: createID().substring(0, 8), ...visaData };
    demoData.push(visaData);
    console.log(demoData);
    res.status(201).send(demoData);
  } catch (error) {
    res.send(error.message);
    console.log(error.message);
  }
});

app.put("/api/alerts/:id", (req, res) => {
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
    console.log("Error while deleting alert", error.message);
  }
});

app.listen(port, () => {
  console.log("Server running on port :", port);
});
