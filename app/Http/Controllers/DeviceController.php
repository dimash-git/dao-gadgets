<?php

namespace App\Http\Controllers;

use App\Models\Device;
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
            'kitchen_id' => 'required',
            'device_name' => 'required|string|max:255',
            'type' => 'in:sensor,door,backlight,tech,other',
            'id_kitchen_section' => 'required',
        ]);

        Device::create($validatedData);

        return redirect()->back();
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
            'kitchen_id' => 'required',
            'device_name' => 'required|string|max:255',
            'type' => 'in:sensor,door,backlight,tech,other',
            'id_kitchen_section' => 'required',
        ]);

        $device->update($validatedData);

        return redirect()->back();
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
