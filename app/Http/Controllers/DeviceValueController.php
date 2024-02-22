<?php

namespace App\Http\Controllers;

use App\Events\DeviceUpdated;
use App\Models\Device;
use App\Models\Devicevalues;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Bluerhinos\phpMQTT;


class DeviceValueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Devicevalues $devicevalue)
    {
        $validatedData = $request->validate([
            'id_device_value' => 'required|exists:deviceclassvalues,id',
            'id_kitchen_device' => 'required|exists:kitchendevices,id',
            'property' => 'required|string|max:255',
            'value' => 'nullable|numeric',
        ]);

        $devicevalue->update($validatedData);

        $device = Device::findOrFail($devicevalue->id_kitchen_device);

        // Fire the DeviceUpdated event with the Device instance
        event(new DeviceUpdated($device));

        return redirect()->back()->with('message', 'Device Value was successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //
    }
}
