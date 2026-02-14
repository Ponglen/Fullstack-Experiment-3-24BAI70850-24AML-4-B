import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProductCard from "./ProductCard";
import LibraryManager from "./LibraryManager";
import PersonHierarchy from "./PersonHierarchy";

// Home Component - Dashboard with links to all experiments
function Home() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>React Lab Experiments</h1>
        <p>CO1 & CO2 Mapped Assignments</p>
      </header>

      <nav className="navigation-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/product-showcase" className="nav-link">Product Showcase</Link>
        <Link to="/library" className="nav-link">Library Manager</Link>
        <Link to="/hierarchy" className="nav-link">Person Hierarchy</Link>
      </nav>

      <section className="section">
        <h2>Welcome to React Lab Experiments</h2>
        <p>Select an experiment from the navigation menu above to get started.</p>
        
        <div className="experiment-links">
          <div className="experiment-link-card">
            <h3>Experiment 1: Product Showcase</h3>
            <p>Display product cards with images, prices, and stock status.</p>
            <Link to="/product-showcase" className="btn">Go to Experiment 1</Link>
          </div>
          
          <div className="experiment-link-card">
            <h3>Experiment 2: Library Management</h3>
            <p>Manage a library system with book borrowing and returning.</p>
            <Link to="/library" className="btn">Go to Experiment 2</Link>
          </div>
          
          <div className="experiment-link-card">
            <h3>Experiment 3: Person Hierarchy</h3>
            <p>Explore object-oriented programming with person class hierarchy.</p>
            <Link to="/hierarchy" className="btn">Go to Experiment 3</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Product Showcase Component
function ProductShowcase() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>React Lab Experiments</h1>
        <p>CO1 & CO2 Mapped Assignments</p>
      </header>

      <nav className="navigation-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/product-showcase" className="nav-link">Product Showcase</Link>
        <Link to="/library" className="nav-link">Library Manager</Link>
        <Link to="/hierarchy" className="nav-link">Person Hierarchy</Link>
      </nav>

      <section className="section">
        <h2>Experiment 1: Product Showcase</h2>

        <div className="product-grid">
          <ProductCard 
            title="Wireless Headphones"
            price="199.99"
            description="High fidelity noise cancelling headphones."
            image="https://via.placeholder.com/200"
            inStock={true}
          />
          <ProductCard 
            title="Smart Watch"
            price="250.00"
            description="Track fitness and sleep patterns."
            image="https://via.placeholder.com/200"
            inStock={false}
          />
          <ProductCard 
            title="Gaming Mouse"
            price="59.99"
            description="Ergonomic high precision mouse."
            image="https://via.placeholder.com/200"
            inStock={true}
          />
          <ProductCard 
            title="Bluetooth Speaker"
            price="89.99"
            description="Portable deep bass speaker."
            image="https://via.placeholder.com/200"
            inStock={true}
          />
        </div>
      </section>
    </div>
  );
}

// Library Manager Component
function LibraryPage() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>React Lab Experiments</h1>
        <p>CO1 & CO2 Mapped Assignments</p>
      </header>

      <nav className="navigation-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/product-showcase" className="nav-link">Product Showcase</Link>
        <Link to="/library" className="nav-link">Library Manager</Link>
        <Link to="/hierarchy" className="nav-link">Person Hierarchy</Link>
      </nav>

      <section className="section">
        <h2>Experiment 2: Library Management System</h2>
        <LibraryManager />
      </section>
    </div>
  );
}

// Person Hierarchy Component
function HierarchyPage() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>React Lab Experiments</h1>
        <p>CO1 & CO2 Mapped Assignments</p>
      </header>

      <nav className="navigation-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/product-showcase" className="nav-link">Product Showcase</Link>
        <Link to="/library" className="nav-link">Library Manager</Link>
        <Link to="/hierarchy" className="nav-link">Person Hierarchy</Link>
      </nav>

      <section className="section">
        <h2>Experiment 3: Person Class Hierarchy</h2>
        <PersonHierarchy />
      </section>
    </div>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-showcase" element={<ProductShowcase />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/hierarchy" element={<HierarchyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
