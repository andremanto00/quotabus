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
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        📋 Lista Autobus
      </h2>

      {buses.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          Nessun autobus disponibile 😢
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {buses.map((bus) => (
            <div
              key={bus.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-6"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                🚍 {bus.license_plate}
              </h3>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">Capacità:</span> {bus.capacity}
              </p>
              <span
                className={`mt-4 inline-block px-3 py-1 text-sm rounded-full font-medium ${
                  bus.status === "active"
                    ? "bg-green-100 text-green-700"
                    : bus.status === "maintenance"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {bus.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
