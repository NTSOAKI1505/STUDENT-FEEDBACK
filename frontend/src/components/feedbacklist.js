import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  // ✅ Fetch all feedbacks
  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feedbacks`);
      setFeedbacks(res.data.feedbacks || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load feedbacks");
    }
  };

  // ✅ Delete feedback (lecturer only)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;

    try {
      await axios.delete(`${BASE_URL}/feedbacks/${id}`);
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
    } catch (err) {
      console.error(err);
      setError("Error deleting feedback");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h3 className="text-center mb-4">Feedback List</h3>

        {error && <p className="text-danger text-center">{error}</p>}
        {feedbacks.length === 0 ? (
          <p className="text-center text-muted">No feedback submitted yet.</p>
        ) : (
          <div className="list-group">
            {feedbacks.map((f) => (
              <div key={f.id} className="list-group-item list-group-item-action mb-3 rounded-3 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-1 text-danger">
                    {f.studentName} <span className="text-muted">({f.courseCode})</span>
                  </h5>
                  <small className="text-secondary">
                    ⭐ {f.rating}/5
                  </small>
                </div>

                <p className="mb-1 mt-2">{f.comments}</p>
                <small className="text-muted">
                  Submitted on {new Date(f.createdAt).toLocaleString()}
                </small>

                {user?.role === "lecturer" && (
                  <button
                    className="btn btn-sm btn-outline-danger mt-2"
                    onClick={() => handleDelete(f.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackList;
