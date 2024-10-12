"use strict";

const express = require("express");
const app = express();
const port = 8080;
const headers = {
    "Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Expose-Headers": "*"
}

app
.get("/", (request, response) => {
    response.set(headers);
    response.send("GET received");
})
.post("/", (request, response) => {
    response.set(headers);
    response.send("POST received");
})
.put("/", (request, response) => {
    response.set(headers);
    response.send("PUT received");
})
.delete("/", (request, response) => {
    response.set(headers);
    response.send("DELETE received");
})
.options("/", (request, response) => {
    response.set(headers);
    response.sendStatus(200);
})
.listen(port, () => {
    console.log(`HTTP server is listening on port ${port}.`);
});