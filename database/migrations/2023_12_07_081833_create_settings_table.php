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
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('kitchen_id');

            $table->string('name');
            $table->string('value');
            $table->string('title');
            $table->text('description');
            $table->boolean('active');
            $table->timestamps();
            // Установка внешнего ключа, связывающего kitchen_id с id в таблице kitchens
            $table->foreign('kitchen_id')->references('id')->on('kitchens')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
