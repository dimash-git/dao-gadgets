<?php

namespace App\Http\Controllers;

use App\Models\Kitchen;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('roles')
            ->paginate(10);

        $kitchens = Kitchen::all();

        $roles = Role::all();

        return Inertia::render('Admin/Users/Index', ['users' => $users, 'kitchens' => $kitchens, "roles" => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|min:8',
            'role' => 'required|string|exists:roles,name',
            'kitchen_id' => 'required|integer',
        ]);


        $user = new User;

        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->password = bcrypt($validatedData['password']);
        $user->kitchen_id = $validatedData['kitchen_id'];

        // $user->assignRole('user');
        $user->assignRole($validatedData['role']);

        $user->save();

        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validatedData = $request->validate([
            'role' => 'required|string|exists:roles,name',
            'email' => 'required|string',
            'name' => 'required|string',
            'kitchen_id' => 'required|integer',
        ]);


        $roleName = $validatedData['role'];
        // Remove all current roles and assign the new one
        $user->syncRoles($roleName);

        $user->email = $validatedData['email'];
        $user->name = $validatedData['name'];
        $user->kitchen_id = $validatedData['kitchen_id'];

        $user->save();

        return redirect()->back();
    }

    /**
     * Remove the specified user from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->back();
    }
}
