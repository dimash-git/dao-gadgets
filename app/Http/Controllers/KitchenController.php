<?php

namespace App\Http\Controllers;

use App\Models\Devicesclass;
use App\Models\Kitchen;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class KitchenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kitchens = Kitchen::with('users:id,name')->with('device:id,device_name')->with('settings:id')->latest()->paginate(10);

        return Inertia::render('Admin/Kitchens/Index', ['kitchens' => $kitchens]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'contract_number' => 'required|string|max:255',
            'address' => 'required',
            'mqtt_prefix' => 'required',
            // 'mqtt_status' => 'required',
            'firmware_version' => 'required',
            'settings_general' => 'required',
            'settings_mosfet' => 'required',
            'settings_addrledstrip' => 'required',
            'settings_button' => 'required',
        ]);

        Kitchen::create($validatedData);

        return redirect()->back()->with('success', 'Кухня успешно добавлена!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kitchen $kitchen)
    {
        // Иногда Laravel кэширует связи если они добавлены после инициализации модели
        // $kitchen->load('sections');
        $kitchen->refresh()->load('sections');

        $kitchen->refresh()->load('users');
        $kitchen->refresh()->load('settings');

        // All Kitchens and Roles
        $device_classes = Devicesclass::all();
        $kitchens = Kitchen::all();
        $roles = Role::all();

        return Inertia::render(
            'Admin/Kitchens/[id]/Show',
            [
                'kitchen' => $kitchen,
                "kitchens" => $kitchens,
                "roles" => $roles,
                "device_classes" => $device_classes
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kitchen $kitchen)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'contract_number' => 'required|string|max:255',
            'address' => 'required',
            'mqtt_prefix' => 'required',
            // 'mqtt_status' => 'required',
            'firmware_version' => 'required',
            'settings_general' => 'required',
            'settings_mosfet' => 'required',
            'settings_addrledstrip' => 'required',
            'settings_button' => 'required',
        ]);

        foreach ($validatedData as $key => $value) {
            $kitchen->{$key} = $value;
        }

        $kitchen->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kitchen $kitchen)
    {
        $kitchen->delete();

        return redirect()->back();
    }
}
