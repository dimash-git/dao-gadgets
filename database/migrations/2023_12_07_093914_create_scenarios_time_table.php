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
        Schema::create('scenarios_time', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_scenario');
            $table->string('time', 255);
            $table->timestamps();

            $table->foreign('id_scenario')->references('id')->on('scenarios')->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scenarios_time');
    }
};
