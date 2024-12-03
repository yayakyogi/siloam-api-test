require("dotenv").config();
const express = require("express");
const routes = require("../routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", routes);

// Test route
app.get("/", async (req: any, res: any) => {
  res.json({ message: "Api Connected" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
