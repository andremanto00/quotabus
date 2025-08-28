// src/pages/BusEdit.tsx
import { useState } from "react";
import API from "../api";

export default function BusEdit() {
  const [id, setId] = useState<number>(0);
  const [licensePlate, setLicensePlate] = useState("");
  const [capacity, setCapacity] = useState<number>(50);
  const [status, setStatus] = useState("active");

  const handleUpdate = async () => {
    try {
      await API.put(`/buses/${id}`, {
        license_plate: licensePlate,
        capacity,
        status,
      });
      alert("✅ Autobus aggiornato!");
    } catch (err) {
      console.error(err);
      alert("❌ Errore aggiornamento autobus");
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/buses/${id}`);
      alert("✅ Autobus eliminato!");
    } catch (err) {
      console.error(err);
      alert("❌ Errore eliminazione autobus");
    }
  };

  return (
    <div className="main-content">
      <div className="form-container">
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
          ✏️ Modifica o elimina autobus
        </h2>

        <input
          type="number"
          placeholder="ID Autobus"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />

        <input
          type="text"
          placeholder="Targa"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Capacità"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Attivo</option>
          <option value="maintenance">In manutenzione</option>
          <option value="inactive">Non attivo</option>
        </select>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <button type="button" onClick={handleUpdate}>
            Aggiorna
          </button>
          <button type="button" onClick={handleDelete} style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}>
            Elimina
          </button>
        </div>
      </div>
    </div>
  );
}
