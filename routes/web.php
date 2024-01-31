<?php

use App\Http\Controllers\DeviceClassController;
use App\Http\Controllers\DeviceClassValuesController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Http\Controllers\DeviceController;
use App\Http\Controllers\KitchenController;
use App\Http\Controllers\KitchenSectionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    if (Auth::check()) {
        if (Auth::user()->hasRole('user')) {
            return redirect()->route('dashboard');
        }

        return redirect()->route('admin');
    }
    return Inertia::render('Auth/Login');
});


Route::middleware('auth')->group(function () {
    Route::prefix('admin')->middleware(['role:admin'])->group(function () {  // RoleMiddleware
        /*
        * Admin Root 
        */
        Route::get('/', function () {
            return Inertia::render('Admin/Index');
        })->name('admin');


        /*
        * Kitchens 
        */
        Route::resource('kitchens', KitchenController::class)
            ->only(['index', 'store', 'update', 'destroy', 'show']);
        Route::get('/kitchens/{kitchen}/sections', [KitchenSectionController::class, 'indexSectionsByKitchen'])->name('kitchens.sections');

        Route::resource('kitchen-sections', KitchenSectionController::class)
            ->only(['store', 'update', 'destroy']);


        /*
        * Devices
        */
        Route::resource('devices', DeviceController::class)
            ->only(['store', 'update', 'destroy']);
        Route::resource('device-classes', DeviceClassController::class)
            ->only(['index', 'store', 'update', 'destroy', 'show']);
        Route::resource('device-class-values', DeviceClassValuesController::class)
            ->only(['store', 'update', 'destroy',]);

        /*
        * Settings 
        */
        Route::resource('settings', SettingsController::class)
            ->only(['index', 'store', 'update', 'destroy']);

        /*
        * Users 
        */
        Route::resource('users', UserController::class)
            ->only(['index', 'store', 'update', 'destroy']);
    });

    // 2. Хотим что бы группу рутов защищал auth middleware для проверки авторизовации перед обращением GET, PATCH, DELETE запросов
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit'); // на фронте через имя profile.edit мы можем обращаться к ProfileController и методу edit
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/user.php';


require __DIR__ . '/auth.php';
