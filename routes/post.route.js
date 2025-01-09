import express from "express";
import { getPosts, createPost } from "../controller/post.controller.js";
import upload from "../utils/multer.js";
const router = express.Router();


router.get("/posts", getPosts);
router.post("/posts",upload.single('image'), createPost);

export default router;
