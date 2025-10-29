import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import FeedbackForm from "./components/feedbackform";
import FeedbackList from "./components/feedbacklist";
import Login from './components/login';
import Signup from './components/signup';
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback-form" element={<FeedbackForm />} />
          <Route path="/feedback-list" element={<FeedbackList />} />
        </Routes>
      </div>
          <Footer/>
    </Router>
  );
}

export default App;
