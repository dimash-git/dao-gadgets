<?php

namespace App\Http\Controllers;

use App\Models\Kitchen;
use App\Models\KitchenSection;
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
        //
        $kitchens = Kitchen::with('users:id,name')->with('device:id,device_name')->with('settings:id')->latest()->paginate(10);

        return Inertia::render('Admin/Kitchens/Index', ['kitchens' => $kitchens]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // 'name',
        // 'contract_number',
        // 'address',
        // 'mqtt_prefix',
        // 'mqtt_status',
        // 'firmware_version',
        // 'alive',
        // 'settings_general',
        // 'settings_mosfet',
        // 'settings_addrledstrip',
        // 'settings_button' 
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

        $kitchen = Kitchen::create($validatedData);

        /**
         * комнаты создаваемые по умолчанию
         * расскоментировать и заполнить нужными разелами
         */
        $sections = [
            'Датчики',
            'Освещение',
            'Техника',
            'Наблюдение',
            'Выключатели',
            'Розетки',
            'Отопление',
            'Шторы',
        ];

        /*  
            foreach($sections as $section){
                $room = new KitchenSection();
                $room->id_kitchen = $kitchen->id;
                $room->parent_id = 2;
                $room->name = $section;
                $room->eng = str_slug($section);
                $room->type = 'room';
                $room->is_active = 1;
                $room->scrollable = 1;
                $room->id_color  = 1;
                $room->save();
            }
        */

        return redirect()->back()->with('success', 'Кухня успешно добавлена!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kitchen $kitchen)
    {
        // Иногда Laravel кэширует связи если они добавлены после инициализации модели
        $kitchen->refresh()->load('sections');
        // $kitchen->load('sections');

        $kitchen->refresh()->load('users');
        $kitchen->refresh()->load('settings');

        // All Kitchens and Roles
        $kitchens = Kitchen::all();
        $roles = Role::all();

        return Inertia::render('Admin/Kitchens/[id]/Show', ['kitchen' => $kitchen, "kitchens" => $kitchens, "roles" => $roles]);
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
