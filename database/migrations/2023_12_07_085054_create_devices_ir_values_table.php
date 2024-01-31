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
        if (!Schema::hasTable('devices_ir_values')) {

            Schema::create('devices_ir_values', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('id_device');
                $table->string('name');
                $table->text('value_on')->nullable(); // Поле может быть NULL
                $table->text('value_off')->nullable(); // Поле может быть NULL
                $table->integer('pending_on')->default(0);
                $table->integer('pending_off')->default(0);
                $table->foreign('id_device')->references('id')->on('kitchendevices')->onDelete('cascade');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices_ir_values');
    }
};
