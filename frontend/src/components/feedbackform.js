import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL || process.env.REACT_APP_BACKEND_URL; // ✅ Load from .env

const FeedbackForm = ({ onFeedbackAdded }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: "",
    courseCode: "",
    comments: "",
    rating: 1,
    createdBy: "", // ✅ include for backend consistency
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Check authentication
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    } else {
      setFormData((prev) => ({
        ...prev,
        studentName: user.username || "",
        createdBy: user.username || "",
      }));
    }
  }, [navigate]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit feedback
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.courseCode || !formData.comments) {
      setError("Please fill in all required fields.");
      setSuccess("");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/feedbacks`, formData);
      if (res.data.status === "success") {
        setSuccess("✅ Feedback submitted successfully!");
        setError("");
        setFormData((prev) => ({
          ...prev,
          courseCode: "",
          comments: "",
          rating: 1,
        }));
        if (onFeedbackAdded) onFeedbackAdded();
      } else {
        setError("❌ Failed to submit feedback.");
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError("❌ Error submitting feedback. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h3 className="mb-3 text-center text-danger">Submit Feedback</h3>

        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              name="studentName"
              className="form-control"
              value={formData.studentName}
              readOnly
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course Code</label>
            <input
              type="text"
              name="courseCode"
              className="form-control"
              value={formData.courseCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Comments</label>
            <textarea
              name="comments"
              className="form-control"
              rows="3"
              value={formData.comments}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select
              name="rating"
              className="form-select"
              value={formData.rating}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
