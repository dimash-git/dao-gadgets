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
        if (!Schema::hasTable('kitchendevicesvalues')) {

            Schema::create('kitchendevicesvalues', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('id_device_value')->nullable();
                $table->unsignedBigInteger('id_kitchen_device')->nullable();
                $table->string('property', 50)->nullable()->charset('utf8mb4')->collation('utf8mb4_bin');
                $table->string('value', 50)->nullable()->charset('utf8mb4')->collation('utf8mb4_bin');
                $table->string('updated', 50)->nullable()->charset('utf8mb4')->collation('utf8mb4_bin');
                $table->foreign('id_device_value')->references('id')->on('deviceclassvalues')->onDelete('set null');
                $table->foreign('id_kitchen_device')->references('id')->on('kitchendevices')->onDelete('set null');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kitchen_devices_values');
    }
};
