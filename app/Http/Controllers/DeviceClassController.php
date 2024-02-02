<?php

namespace App\Http\Controllers;

use App\Models\Devicesclass;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeviceClassController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $device_classes = Devicesclass::paginate(10);
        return Inertia::render('Admin/DeviceClasses/Index', ['deviceClasses' => $device_classes]);
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
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'division_into_devices' => 'required|integer',
            'crutch_rgb_backlight' => 'required|integer',
            'device_parameters' => 'required|integer',
            'is_service' => 'boolean'
        ]);
        $validatedData['eng'] = str_slug($validatedData['name']);

        Devicesclass::create($validatedData);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Devicesclass $device_class)
    {
        $device_class->refresh()->load('devicesclassvalues');

        return Inertia::render('Admin/DeviceClasses/[id]/Show', ['deviceClass' => $device_class]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Devicesclass $device_class)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'division_into_devices' => 'required|integer',
            'crutch_rgb_backlight' => 'required|integer',
            'device_parameters' => 'required|integer',
        ]);
        $validatedData['eng'] = str_slug($validatedData['name']);

        $device_class->update($validatedData);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Devicesclass $device_class)
    {
        $device_class->delete();

        return redirect()->back();
    }
}
