const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "database-1.curffj7vxk2v.us-east-1.rds.amazonaws.com",
    database: "database-1",
    password: "rafazixq43",
    port: 5432, // or your PostgreSQL port number
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
    // handle user registration
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      `SELECT * FROM datauser.signup WHERE email = $1 AND password = $2`,
      [email, password]
    );

    if (result.rowCount === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
