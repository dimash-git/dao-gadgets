<?php

namespace App\Http\Controllers;

use App\Models\Kitchen;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $newsItems = News::with('kitchens')->latest()->get();

        $kitchens = Kitchen::all();

        return Inertia::render('Admin/News/Index', ['news_list' => $newsItems, 'kitchens' => $kitchens]);
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
            'kitchen_ids' => 'required|array',
            'kitchen_ids.*' => 'integer|exists:kitchens,id', // Validates each element in the array
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'cover' => 'nullable|string|max:255',
        ]);

        $news = News::create($validatedData);

        $news->kitchens()->attach($validatedData['kitchen_ids']);

        return redirect()->back()->with('message', 'News successfully created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $news->refresh()->load('kitchens');

        $kitchens = Kitchen::all();

        return Inertia::render(
            'Admin/News/[id]/Show',
            [
                "news" => $news,
                "kitchens" => $kitchens,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $validatedData = $request->validate([
            'kitchen_ids' => 'required|array',
            'kitchen_ids.*' => 'integer|exists:kitchens,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'cover' => 'nullable|string|max:255',
        ]);

        $newsData = Arr::except($validatedData, ['kitchen_ids']);
        $news->update($newsData);

        $news->kitchens()->sync($validatedData['kitchen_ids']);

        return redirect()->back()->with('message', 'News successfully updated.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $news->delete();

        return redirect()->route('news.index')->with('message', 'News successfully deleted.');
    }
}
