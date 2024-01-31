<?php

namespace App\Http\Controllers;

use App\Models\Kitchen;
use App\Models\KitchenSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KitchenSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kitchenSections = KitchenSection::with('kitchen', 'parent', 'color')->latest()->get();

        return response()->json(['kitchenSections' => $kitchenSections]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kitchen_id' => 'nullable|exists:kitchens,id',
            'name' => 'required|string|max:55',
            'type' => 'in:room,section',
            'parent_id' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);
        $validatedData['eng'] = str_slug($validatedData['name']);

        KitchenSection::create($validatedData);

        return redirect()->back()->with('success', 'Секция успешно добавлена!');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, KitchenSection $kitchenSection)
    {
        $validatedData = $request->validate([
            'kitchen_id' => 'nullable|exists:kitchens,id',
            'name' => 'required|string|max:55',
            'type' => 'in:room,section',
            'parent_id' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);
        $validatedData['eng'] = str_slug($validatedData['name']);

        foreach ($validatedData as $key => $value) {
            $kitchenSection->{$key} = $value;
        }



        $kitchenSection->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KitchenSection $kitchenSection)
    {
        $kitchenSection->delete();

        return redirect()->back();
    }


    /**
     * Display a listing of the sections by kitchen resource.
     */
    public function indexSectionsByKitchen(Kitchen $kitchen)
    {
        $kitchen->refresh()->load('sections');

        return Inertia::render('Admin/Kitchens/[id]/Sections', ["kitchen" => $kitchen]);
    }
}
