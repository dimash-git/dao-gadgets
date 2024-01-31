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
        Schema::create('scenarios_type', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable(); // Поле может быть NULL
            $table->string('name');
            $table->text('description')->nullable(); // Поле может быть NULL
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scenarios_type');
    }
};
