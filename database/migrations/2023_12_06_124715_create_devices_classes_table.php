<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasTable('devicesclasses')) {
            Schema::create('devicesclasses', function (Blueprint $table) {
                $table->id();
                $table->string('name', 255)->collation('utf8mb4_bin');
                $table->string('eng', 255)->collation('utf8mb4_bin');
                $table->string('type', 255)->collation('utf8mb4_bin');
                $table->text('description')->collation('utf8mb4_bin')->nullable();
                $table->integer('division_into_devices');
                $table->integer('crutch_rgb_backlight')->default(0);
                $table->integer('device_parameters')->default(0);
                $table->timestamps(); // Если вам нужны поля created_at и updated_at
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices_classes');
    }
};
