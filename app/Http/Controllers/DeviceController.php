<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Devicesclass;
use App\Models\Devicevalues;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $devices = Device::with('kitchen:id,name')->with('section:id,name')->latest()->get();

        return Inertia::render('Admin/Devices/Index', ['devices' => $devices]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kitchen_id' => 'nullable|exists:kitchens,id',
            'id_kitchen_section' => 'nullable|exists:kitchensections,id',
            'id_device_class' => 'nullable|exists:devicesclasses,id',
            'device_name' => 'required|string|max:50',
            'icon' => 'nullable|string|max:255',
            'video_code' => 'nullable|string',
            'line_number' => 'nullable|string|max:30',
            'hall_number' => 'nullable|string|max:30',
            'is_active' => 'boolean',
            'zigbee_config' => 'nullable|string',
            'manufacturer' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'type' => 'in:sensor,door,backlight,tech,other'
        ]);

        $device = Device::create($validatedData);
        // Log::debug($request->all());

        if (isset($validatedData['id_device_class'])) {

            $devicesClass = Devicesclass::find($validatedData['id_device_class']);

            if ($devicesClass) {
                Devicevalues::create(
                    [
                        'id_device_value' => $devicesClass->id,
                        'id_kitchen_device' => $device->id,
                        'property' => $devicesClass->name,
                        'value' => '',
                    ]
                );
            }
        }

        return redirect()->back()->with('message', 'Device successfully created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Device $device)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Device $device)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Device $device)
    {
        $validatedData = $request->validate([
            'kitchen_id' => 'nullable|exists:kitchens,id',
            'id_kitchen_section' => 'nullable|exists:kitchensections,id',
            'id_device_class' => 'nullable|exists:devicesclasses,id',
            'device_name' => 'required|string|max:50',
            'icon' => 'nullable|string|max:255',
            'video_code' => 'nullable|string',
            'line_number' => 'nullable|string|max:30',
            'hall_number' => 'nullable|string|max:30',
            'is_active' => 'boolean',
            'zigbee_config' => 'nullable|string',
            'manufacturer' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'type' => 'in:sensor,door,backlight,tech,other'
        ]);

        $device->update($validatedData);

        return redirect()->back()->with('message', 'Device successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Device $device)
    {
        $device->delete();

        return redirect()->back();
    }
}
