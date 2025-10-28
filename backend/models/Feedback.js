// models/feedbackModel.js
import { db } from "../db.js";

// Ensure the Feedback table exists
export const createFeedbackTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS feedback (
      id SERIAL PRIMARY KEY,
      studentName VARCHAR(100),
      courseCode VARCHAR(50),
      comments TEXT,
      rating INTEGER CHECK (rating >= 1 AND rating <= 5)
    );
  `;
  await db.query(query);
  console.log("✅ Feedback table is ready");
};
