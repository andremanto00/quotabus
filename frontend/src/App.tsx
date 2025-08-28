// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BusList from "./pages/BusList";
import BusCreate from "./pages/BusCreate";
import BusEdit from "./pages/BusEdit";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navbar */}
        <nav className="bg-blue-600 shadow text-white px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">🚍 QuotaBus</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-200 transition">
              Lista
            </Link>
            <Link to="/create" className="hover:text-gray-200 transition">
              Crea
            </Link>
            <Link to="/edit" className="hover:text-gray-200 transition">
              Edit
            </Link>

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
