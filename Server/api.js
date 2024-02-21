const express = require("express");
const { Pool } = require("pg");
const dotenv = require("dotenv");

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

//Create the data
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

module.exports = router;
