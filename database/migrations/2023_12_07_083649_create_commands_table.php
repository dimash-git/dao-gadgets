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
        if (!Schema::hasTable('commands')) {

            Schema::create('commands', function (Blueprint $table) {
                $table->id();
                $table->string('type');
                $table->string('mail');
                $table->string('title');
                $table->text('body');
                $table->boolean('executed')->default(false);
                $table->unsignedBigInteger('id_kitchen_device');

                $table->foreign('id_kitchen_device')->references('id')->on('kitchendevices');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commands');
    }
};
