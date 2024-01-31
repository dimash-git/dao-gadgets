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
        Schema::create('kitchens', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('contract_number');
            $table->string('address');
            $table->string('mqtt_prefix');
            $table->string('mqtt_status');
            $table->string('firmware_version');
            $table->integer('alive');
            $table->json('settings_general')->nullable();
            $table->json('settings_mosfet')->nullable();
            $table->json('settings_addrledstrip')->nullable();
            $table->json('settings_button')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kitchens');
    }
};
