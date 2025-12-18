import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Project Management");
});

export default app;