const express = require("express");
const { Pool } = require("pg");
const dotenv = require("dotenv");
const { json } = require("body-parser");

dotenv.config();

const router = express.Router();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: require,
});

// Create the data
router.post("/data", async (req, res) => {
  try {
    const {
      std_id,
      std_first_name,
      std_last_name,
      std_mobile,
      std_email,
      std_address,
      std_city,
      std_state,
      std_pincode,
      created_by,
      created_dt,
      flag,
    } = req.body;
    console.log(req.body);
    const result = await pool.query(
      "select sms.student_data ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
      [
        std_id,
        std_first_name,
        std_last_name,
        std_mobile,
        std_email,
        std_address,
        std_city,
        std_state,
        std_pincode,
        created_by,
        created_dt,
        flag,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

//Read the data
router.get("/data", async (req, res) => {
  try {
    const result = await pool.query("select * from sms.student_data");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

//Update the data
router.put("/data/:std_id", async (req, res) => {
  try {
    const { std_id } = req.params;
    const {
      std_first_name,
      std_last_name,
      std_mobile,
      std_email,
      std_address,
      std_city,
      std_state,
      std_pincode,
      created_by,
      created_dt,
      flag,
    } = req.body;
    const result = await pool.query(
      "UPDATE sms.student_data SET std_first_name=$1,std_last_name=$2,std_mobile=$3,std_email=$4,std_address=$5,std_city=$6,std_state=$7,std_pincode=$8,created_by=$9,created_dt=$10,flag=$11 WHERE std_id=$12 RETURNING *",
      [
        std_first_name,
        std_last_name,
        std_mobile,
        std_email,
        std_address,
        std_city,
        std_state,
        std_pincode,
        created_by,
        created_dt,
        flag,
        std_id,
      ]
    );
    if (result.rows.length === 0) {
      res.status(404).send("Data not found");
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

//Delete the data
router.delete("/data/std_id", async (req, res) => {
  try {
    const { std_id } = req.params;
    const result = await pool.query(
      "DELETE FROM sms.student_data WHERE std_id=$1 RETURNING *",
      [std_id]
    );
    if (result.rows.length === 0) {
      res.status(404).send("Data not found");
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
