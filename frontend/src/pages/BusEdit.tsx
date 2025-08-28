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
      alert("Autobus aggiornato!");
    } catch (err) {
      console.error(err);
      alert("Errore aggiornamento autobus");
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/buses/${id}`);
      alert("Autobus eliminato!");
    } catch (err) {
      console.error(err);
      alert("Errore eliminazione autobus");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Modifica o elimina autobus</h1>

      <input
        type="number"
        placeholder="ID Autobus"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
        className="border p-2 w-full"
      />

      <input
        type="text"
        placeholder="Targa"
        value={licensePlate}
        onChange={(e) => setLicensePlate(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="number"
        placeholder="Capacità"
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
        className="border p-2 w-full"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="active">Active</option>
        <option value="maintenance">Maintenance</option>
        <option value="inactive">Inactive</option>
      </select>

      <div className="flex gap-4">
        <button
          onClick={handleUpdate}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Aggiorna
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Elimina
        </button>
      </div>
    </div>
  );
}
