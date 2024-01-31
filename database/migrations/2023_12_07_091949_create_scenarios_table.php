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
        if (!Schema::hasTable('scenarios')) {

            Schema::create('scenarios', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('id_kitchen');
                $table->unsignedBigInteger('user_id')->nullable(); // Сделаем поле необязательным
                $table->unsignedBigInteger('type')->default(1); //типы сценариев из таблицы scenarios_type
                $table->string('title');
                $table->text('description');
                $table->integer('sleep_time');
                $table->bigInteger('executed_time')->nullable(); // Большое целое число, может быть NULL
                $table->boolean('active')->default(false); // Используем boolean вместо int
                $table->boolean('notify')->default(false); // Используем boolean вместо int

                // Если нужно добавить внешние ключи, раскомментируйте следующие строки
                $table->foreign('id_kitchen')->references('id')->on('kitchens')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
                $table->foreign('type')->references('id')->on('scenarios_type')->onDelete('set null');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scenarios');
    }
};
