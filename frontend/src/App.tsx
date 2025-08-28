// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BusList from "./pages/BusList";
import BusCreate from "./pages/BusCreate";
import BusEdit from "./pages/BusEdit";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navbar */}
        <nav className="navbar">
          <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>🚍 QuotaBus</h1>
          <div>
            <Link to="/">Lista</Link>
            <Link to="/create">Crea</Link>
            <Link to="/edit">Edit</Link>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<BusList />} />
            <Route path="/create" element={<BusCreate />} />
             <Route path="/edit" element={<BusEdit />} />  
            <Route path="/edit/:id" element={<BusEdit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
