const express = require("express");
const bodyParser = require("body-parser");
const studentroutes = require("./routes/studentsroute");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use("/api/students", studentroutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 