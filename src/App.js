import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages:
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Course from "./Pages/Course";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

// Components:
import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";

function App() {
  return (
    <div className="App bg-white-color-97 min-h-screen">
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
