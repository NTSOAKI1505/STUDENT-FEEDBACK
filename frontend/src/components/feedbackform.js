// src/components/FeedbackForm.js
import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = ({ onFeedbackAdded }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    courseCode: "",
    comments: "",
    rating: 1,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.studentName || !formData.courseCode || !formData.comments) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    try {
      // POST request to backend
      await axios.post("http://localhost:5000/api/feedback", formData);

      // Reset form
      setFormData({ studentName: "", courseCode: "", comments: "", rating: 1 });
      setError("");
      setSuccess("Feedback submitted successfully!");

      // Notify parent to refresh dashboard/list
      if (onFeedbackAdded) onFeedbackAdded();
    } catch (err) {
      console.error(err);
      setError("Error submitting feedback. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="card p-3">
      <h4>Submit Feedback</h4>

      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          className="form-control mb-2"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="courseCode"
          placeholder="Course Code"
          className="form-control mb-2"
          value={formData.courseCode}
          onChange={handleChange}
          required
        />

        <textarea
          name="comments"
          placeholder="Comments"
          className="form-control mb-2"
          value={formData.comments}
          onChange={handleChange}
          required
        ></textarea>

        <select
          name="rating"
          className="form-control mb-2"
          value={formData.rating}
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
