// src/components/FeedbackList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);

  const fetchFeedback = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/feedback");
      setFeedback(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="card p-3">
      <h4>Feedback List</h4>
      {feedback.length === 0 ? <p>No feedback yet.</p> :
        feedback.map(f => (
          <div key={f.id} className="card p-2 mb-2">
            <h5>{f.studentname} ({f.coursecode})</h5>
            <p>{f.comments}</p>
            <p>⭐ {f.rating}/5</p>
          </div>
        ))
      }
    </div>
  );
};

export default FeedbackList;
