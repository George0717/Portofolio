// Import CSS
import "./App.css";
import "./Dashboard.css";
import "./about.css";
import "./project.css";
import "./contact.css";
import "./components/Navbar.css";
// Import Content
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <PageTitle /> {/* Komponen untuk mengubah title dan favicon */}
      <div className="container mx-auto p-4">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

// Komponen untuk mengubah title dan favicon berdasarkan halaman
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageSettings = {
     "/": { title: "Dashboard", icon: "/icons/dashboard.png" },
      "/dashboard": { title: "Dashboard", icon: "/icons/dashboard.png" },
      "/about": { title: "About Me", icon: "/icons/about.png" },
      "/project": { title: "Projects", icon: "/icons/project.png" },
      "/contact": { title: "Contact", icon: "/icons/contact.png" },
    };

    const currentPage = pageSettings[location.pathname] || { title: "Portfolio", icon: "/icons/default.ico" };

    // Mengubah title
    document.title = currentPage.title;

    // Mengubah favicon
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = currentPage.icon;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = currentPage.icon;
      document.head.appendChild(newLink);
    }
  }, [location]);

  return null; // Tidak menampilkan apapun di UI
}

export default App;
