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
        // if (!Schema::hasTable('devices')) {
        //     Schema::create('devices', function (Blueprint $table) {
        //         $table->id();
        //         $table->foreignId('id_kitchen')->constrained('kitchens');
        //         $table->foreignId('id_kitchen_section')->constrained('kitchensections');
        //         $table->string('device_name');
        //         $table->timestamps();
        //     });
        // }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices');
    }
};
