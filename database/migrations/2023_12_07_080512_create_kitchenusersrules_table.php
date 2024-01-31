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
        Schema::create('kitchenusersrules', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->unsignedBigInteger('id_item');
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('itemtype');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kitchenusersrules');
    }
};
