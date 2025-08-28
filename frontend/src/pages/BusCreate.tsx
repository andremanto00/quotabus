import { useState } from "react";
import API from "../api";

interface Bus {
  id: number;
  license_plate: string;
  capacity: number;
  status: string;
}

export default function BusCreate() {
  const [licensePlate, setLicensePlate] = useState("");
  const [capacity, setCapacity] = useState<number>(0);
  const [status, setStatus] = useState("active");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post<Bus>("/buses", {
        license_plate: licensePlate,
        capacity,
        status,
      });
      alert(`✅ Autobus creato: ${res.data.license_plate}`);
      setLicensePlate("");
      setCapacity(0);
      setStatus("active");
    } catch (err) {
      console.error(err);
      alert("❌ Errore nella creazione dell'autobus");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          ➕ Crea un nuovo autobus
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Targa
            </label>
            <input
              type="text"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Es: AB123CD"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacità
            </label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Es: 50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stato
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="active">Attivo</option>
              <option value="maintenance">In manutenzione</option>
              <option value="inactive">Non attivo</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition"
          >
            💾 Salva Autobus
          </button>
        </form>
      </div>
    </div>
  );
}
