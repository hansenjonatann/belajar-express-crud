import express from "express";
import {
  DetailPost,
  TambahData,
  TampilPost,
  updatePost,
} from "./../controllers/PostController.js";

const router = express.Router();

// CRUD
// Create
router.post("/post", TambahData);

// Get
router.get("/post", TampilPost);
router.get("/post/:id", DetailPost);

// Update
router.put("/post/:id", updatePost);

export default router;
