<?php

namespace App\Http\Controllers;

use App\Models\Kitchen;
use Illuminate\Http\Request;
use App\Models\Settings;
use Inertia\Inertia;

use Illuminate\Support\Facades\Log;


class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = Settings::with('kitchen:id,name')
            ->latest()
            ->paginate(10);

        $kitchens = Kitchen::all();

        return Inertia::render('Admin/Settings/Index', ['settings' => $settings, 'kitchens' => $kitchens]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'value' => 'required|string',
            'title' => 'required|string',
            'kitchen_id' => 'required|integer',
            'description' => 'required|string',
            'active' => 'required|integer',

        ]);

        // Log::info('Validated Data:', $validatedData);

        $setting = new Settings();
        $setting->name = $validatedData['name'];
        $setting->title = $validatedData['title'];
        $setting->value = $validatedData['value'];
        $setting->kitchen_id = $validatedData['kitchen_id'];
        $setting->description = $validatedData['description'];
        $setting->active = $validatedData['active'];
        $setting->save();

        // Log::info('Validated Data:', $setting->toArray());

        return redirect()->back()->with('success', 'Setting created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kitchen $kitchen)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Settings $setting)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'title' => 'required|string',
            'value' => 'required|string',
            'kitchen_id' => 'required|integer',
        ]);

        $setting->name = $validatedData['name'];
        $setting->title = $validatedData['title'];
        $setting->value = $validatedData['value'];
        $setting->kitchen_id = $validatedData['kitchen_id'];

        $setting->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Settings $setting)
    {
        $setting->delete();

        return redirect()->back();
    }
}
