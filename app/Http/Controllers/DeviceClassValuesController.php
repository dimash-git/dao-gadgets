<?php

namespace App\Http\Controllers;

use App\Models\Devicesclassvalues;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DeviceClassValuesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_device_class' => 'required|exists:devicesclasses,id',
            'name' => 'required|string|max:50',
            'intependent_title' => 'required|string|max:255',
            'default_value' => 'nullable|string|max:255',
            'topic' => 'nullable|string|max:255',
            'relay_duration' => 'nullable|string|max:10',
            'topic_read' => 'nullable|string|max:255',
            'run_this_code_on_change' => 'nullable|string',
            'val' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'yandex_properties' => 'required|integer',
            'min' => 'nullable|integer',
            'max' => 'nullable|integer',
            'status_on' => 'nullable|string',
            'status_off' => 'nullable|string',
            'independent_device' => 'required|integer',
            'type' => 'required|string|max:255',
            'in_scenario_active' => 'required|integer',

            'front_type' => 'in:toggle,slider,checkbox',

        ]);
        $validatedData['eng'] = str_slug($validatedData['name']);

        Devicesclassvalues::create($validatedData);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Devicesclassvalues $device_class_value)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Devicesclassvalues $device_class_value)
    {
        $validatedData = $request->validate([
            'id_device_class' => 'required|exists:devicesclasses,id',
            'name' => 'required|string|max:50',
            'intependent_title' => 'required|string|max:255',
            'default_value' => 'nullable|string|max:255',
            'topic' => 'nullable|string|max:255',
            'relay_duration' => 'nullable|string|max:10',
            'topic_read' => 'nullable|string|max:255',
            'run_this_code_on_change' => 'nullable|string',
            'val' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'yandex_properties' => 'required|integer',
            'min' => 'nullable|integer',
            'max' => 'nullable|integer',
            'status_on' => 'nullable|string',
            'status_off' => 'nullable|string',
            'independent_device' => 'required|integer',
            'type' => 'required|string|max:255',
            'in_scenario_active' => 'required|integer',

            'front_type' => 'in:toggle,slider,checkbox',
        ]);
        $validatedData['eng'] = str_slug($validatedData['name']);

        $device_class_value->update($validatedData);
        // Log::debug($device_class_value)
        // Log::debug($request->all());

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Devicesclassvalues $device_class_value)
    {
        $device_class_value->delete();

        return redirect()->back();
    }
}
