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
        if (!Schema::hasTable('scenarios_actions')) {

            Schema::create('scenarios_actions', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('id_scenario');
                $table->unsignedBigInteger('id_device');
                $table->unsignedBigInteger('action'); //id параметра класса devicesvalues
                $table->string('action_value');
                $table->timestamps();


                $table->foreign('id_scenario')->references('id')->on('scenarios')->onDelete('cascade');
                $table->foreign('id_device')->references('id')->on('kitchendevices')->onDelete('cascade');
                $table->foreign('action')->references('id')->on('deviceclassvalues')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scenarios_actions');
    }
};
