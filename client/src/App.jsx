import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import QuizInterface from './pages/quiz/QuizInterface'
import ResultsPage from './pages/result/ResultsPage'
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App as AntApp } from 'antd';

function App() {
  return (
    <AntApp>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-dark-darker via-dark-lighter to-dark-darker">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<QuizInterface />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AntApp>
  )
}

export default App
