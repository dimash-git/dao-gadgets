<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {
    // if user go to dashboard
    Route::prefix('dashboard')->middleware(['role:user'])->group(function () {
        Route::get('/', function () {
            return Inertia::render('Dashboard/Index');
        })->name('dashboard');

        Route::get('/home', function () {
            $user_kitchen = Auth::user()->kitchen;
            $user_kitchen->refresh()->load('sections');
            return Inertia::render('Dashboard/Home/Index', ['kitchen' => $user_kitchen]);
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
    });
});
