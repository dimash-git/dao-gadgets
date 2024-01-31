<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKitchensectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('kitchensections')) {
            Schema::create('kitchensections', function (Blueprint $table) {
                $table->id(); // Laravel автоматически создаст UNSIGNED BIGINT (primary key)
                $table->unsignedBigInteger('kitchen_id')->nullable();
                $table->unsignedBigInteger('parent_id')->nullable();
                $table->string('name', 55)->collation('utf8mb4_bin');
                $table->string('eng', 55)->collation('utf8mb4_bin');
                $table->enum('type', ['room', 'section'])->default('room');
                $table->boolean('is_active')->default(1); // TINYINT equivalent for the "boolean" type  

                $table->timestamps(); // Laravel стандартные поля created_at и updated_at
                // Добавляем ограничение внешнего ключа
                $table->foreign('id_kitchen')->references('id')->on('kitchens')->onDelete('set null');
                $table->foreign('parent_id')->references('id')->on('kitchensections')->onDelete('set null');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kitchensections');
    }
}
