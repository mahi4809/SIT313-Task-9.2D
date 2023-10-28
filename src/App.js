import './App.css';
import Header from './Header';
import Cardlist from './Cardlist';
import Tutoriallist from './Tutoriallist';
import Footer from './Footer';
import Plans from './Plans';
import Login from './Login';
import Signup from './Signup';

import NewsletterSignup from './NewsletterSignup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Completion from './Completion';
import { AuthProvider } from './Context/AuthContext';

// Define the Home component
function Home() {
  return (
    <div>
      <div className="image-section">
        <div className="image-container">
          <img src="./img/game.png" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-logo-text">Image</h1>
        </div>
        <div className="center-text">
          <h1>Featured Articles</h1>
        </div>
        <Cardlist />
        <div className="center-text">
          <h1>Featured Tutorials</h1>
        </div>
        <Tutoriallist/>
        <NewsletterSignup /> 
        <Footer />

      </div>
      
    </div>
  );
}

function App() {
  
  
  return (
    <div>
      <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/completion" element={<Completion />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
