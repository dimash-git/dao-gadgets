<?php

use App\Http\Controllers\DeviceValueController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {
    // if user go to dashboard
    Route::prefix('dashboard')->middleware(['role:user'])->group(function () {
        Route::get('/', function () {
            $user_kitchen = Auth::user()->kitchen;
            $user_kitchen->refresh()->load('sections.devices.devicevalues.deviceclassvalue');

            $user_favorites = Auth::user()->favorites;

            return Inertia::render('Dashboard/Index', ['kitchen' => $user_kitchen, 'favorites' => $user_favorites]);
        })->name('dashboard');

        Route::get('/home', function () {
            $user_kitchen = Auth::user()->kitchen;
            $user_kitchen->refresh()->load('sections.devices.devicevalues.deviceclassvalue');

            $user_favorites = Auth::user()->favorites;

            return Inertia::render('Dashboard/Home/Index', ['kitchen' => $user_kitchen, 'favorites' => $user_favorites]);
        })->name('home');

        Route::get('/market', function () {
            return Inertia::render('Dashboard/Market/Index');
        })->name('market');

        Route::get('/services', function () {
            return Inertia::render('Dashboard/Services/Index');
        })->name('services');

        Route::get('/online-services', function () {
            return Inertia::render('Dashboard/OnlineServices/Index');
        })->name('online-services');


        // For parameters update
        Route::patch('/device-values/{devicevalue}', [DeviceValueController::class, 'update'])->name('user.devicevalues.update');

        // User favorites
        Route::post('/favorites/{device_id}', [UserController::class, 'toggleFavorite'])->name('user.toggleFavorite');
    });
});
