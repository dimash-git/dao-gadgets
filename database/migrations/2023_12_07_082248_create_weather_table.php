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
        Schema::create('weather', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('kitchen_id');
            $table->string('cityName', 50)->nullable();
            $table->dateTime('updated')->nullable();
            $table->unsignedInteger('icon_id')->nullable();
            $table->double('temp_now', 8, 2)->nullable();
            $table->double('temp_day', 8, 2)->nullable();
            $table->double('temp_night', 8, 2)->nullable();
            $table->string('sunrise_time', 191)->nullable();
            $table->string('sunset_time', 191)->nullable();
            $table->timestamps();
            $table->foreign('kitchen_id')->references('id')->on('kitchens')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weather');
    }
};
