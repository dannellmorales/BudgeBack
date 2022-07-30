const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors())
app.use(express.json());

const transactionsControllers = require("./controllers/transactionsControllers.js");

app.get("/", (req, res) => {
    res.send("Welcome to the Transactions app")
});

app.use("/transactions", transactionsControllers);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;