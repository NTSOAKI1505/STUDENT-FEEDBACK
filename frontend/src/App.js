import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import FeedbackForm from "./components/feedbackform";
import FeedbackList from "./components/feedbacklist";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback-form" element={<FeedbackForm />} />
          <Route path="/feedback-list" element={<FeedbackList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
