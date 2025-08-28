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
    <div className="main-content">
      <div className="form-container">
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
          ➕ Crea un nuovo autobus
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Targa</label>
            <input
              type="text"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              placeholder="Es: AB123CD"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Capacità</label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              placeholder="Es: 50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Stato</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">Attivo</option>
              <option value="maintenance">In manutenzione</option>
              <option value="inactive">Non attivo</option>
            </select>
          </div>
          <button type="submit">💾 Salva Autobus</button>
        </form>
      </div>
    </div>
  );
}
