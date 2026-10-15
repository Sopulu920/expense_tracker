import express from "express";
import { controltest } from "../controller/controltest.ts";

const router = express.Router();

router.get("/first", controltest);

module.exports = router
