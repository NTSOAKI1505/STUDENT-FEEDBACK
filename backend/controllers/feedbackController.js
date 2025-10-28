import Feedback from "../models/Feedback.js";

// GET all feedbacks
export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.json({ status: "success", feedbacks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET feedback by ID
export const getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });
    res.json({ status: "success", feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// CREATE new feedback
export const createFeedback = async (req, res) => {
  try {
    const { studentName, courseCode, comments, rating, createdBy } = req.body;
    if (!studentName || !courseCode || !comments || !rating || !createdBy) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFeedback = await Feedback.create({
      studentName,
      courseCode,
      comments,
      rating,
      createdBy,
    });

    res.status(201).json({ status: "success", feedback: newFeedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// UPDATE feedback
export const updateFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });

    const { studentName, courseCode, comments, rating, updatedBy } = req.body;
    await feedback.update({ studentName, courseCode, comments, rating, updatedBy });
    res.json({ status: "success", feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE feedback
export const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });

    await feedback.destroy();
    res.json({ status: "success", message: "Feedback deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
