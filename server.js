const express = require("express");
const path = require("path");

require("./db");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("MongoDB Connected Successfully");
    console.log("Server Running on http://localhost:3000");
});