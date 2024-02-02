<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('kitchen_news', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('kitchen_id');
            $table->unsignedBigInteger('news_id');
            $table->timestamps();

            $table->foreign('kitchen_id')->references('id')->on('kitchens')->onDelete('cascade');
            $table->foreign('news_id')->references('id')->on('news')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kitchen_news');
    }
};
