import { useEffect, useState } from "react";
import API from "../api";

interface Bus {
  id: number;
  license_plate: string;
  capacity: number;
  status: string;
}

export default function BusList() {
  const [buses, setBuses] = useState<Bus[]>([]);

  useEffect(() => {
    API.get<Bus[]>("/buses")
      .then((res) => setBuses(res.data))
      .catch((err: unknown) => console.error(err));
  }, []);

  return (
    <div className="main-content">
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", color: "#1f2937" }}>
        📋 Lista Autobus
      </h2>

      {buses.length === 0 ? (
        <div style={{ textAlign: "center", color: "#6b7280", marginTop: "2rem" }}>
          Nessun autobus disponibile 😢
        </div>
      ) : (
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {buses.map((bus) => (
            <div key={bus.id} className="card">
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1d4ed8" }}>
                🚍 {bus.license_plate}
              </h3>
              <p style={{ marginTop: "0.5rem", color: "#4b5563" }}>
                <span style={{ fontWeight: "bold" }}>Capacità:</span> {bus.capacity}
              </p>
              <span className={`badge ${bus.status}`}>
                {bus.status === "active"
                  ? "Attivo"
                  : bus.status === "maintenance"
                  ? "In manutenzione"
                  : "Non attivo"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
