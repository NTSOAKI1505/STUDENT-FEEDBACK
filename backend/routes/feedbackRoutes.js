import express from "express";
import {
  createFeedback,
  getAllFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedbackController.js";

const router = express.Router();

// CRUD endpoints
router.get("/", getAllFeedback);       // GET all feedbacks
router.get("/:id", getFeedbackById);   // GET feedback by ID
router.post("/", createFeedback);      // POST new feedback
router.put("/:id", updateFeedback);    // PUT update feedback
router.delete("/:id", deleteFeedback); // DELETE feedback

export default router;
