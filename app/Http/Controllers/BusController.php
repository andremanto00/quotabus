<?php
namespace App\Http\Controllers;

use App\Models\Bus;
use Illuminate\Http\Request;

class BusController extends Controller
{
    // Restituisce tutti gli autobus
    public function index()
    {
        return response()->json(Bus::all());
    }

    // Crea un nuovo autobus
    public function store(Request $request)
    {
        $bus = Bus::create($request->only(['license_plate', 'capacity', 'status']));
        return response()->json($bus, 201);
    }

    // Aggiorna un autobus specifico
    public function update(Request $request, $id)
    {
        $bus = Bus::findOrFail($id);
        $bus->update($request->only(['license_plate', 'capacity', 'status']));
        return response()->json($bus);
    }

    // Elimina un autobus specifico
    public function destroy($id)
    {
        $bus = Bus::findOrFail($id);
        $bus->delete();
        return response()->json(null, 204);
    }
}
