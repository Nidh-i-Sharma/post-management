import express from "express";
import { getAllTag, createTag } from "../controller/tag.controller.js";
const router = express.Router();


router.get("/tag", getAllTag);
router.post("/tag", createTag);


export default router;
