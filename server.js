import express from "express";
import cors from "cors";
import { db, Request } from "./db/db.js";

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.post("/request", async (req, res) => {
    console.log(req.body);

    await Request.create(req.body);

    res.send({});
});

server.get("/request", async (req, res) => {
    res.send({ requests: await Request.findAll() });
});

server.listen(3005, () => {
    console.log("Server online");
});
