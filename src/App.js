import { useContext } from "react";
import "react-bootstrap/dist/react-bootstrap.min.js";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import FadeInSection from "./components/effects/FadeInSection.jsx";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Context } from "./context/Context";
import About from "./pages/about/About.jsx";
import GoToTop from "./components/effects/ScrolltoTop.jsx";

import "./app.css";

function App() {
  const { user } = useContext(Context);

  return (
    <div class="page">
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={user ? <About /> : <Register />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Home />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
        <GoToTop />
      </Router>
    </div>
  );
}

export default App;
