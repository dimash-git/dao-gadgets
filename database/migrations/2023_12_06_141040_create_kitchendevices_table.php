<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKitchendevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('kitchendevices')) {

            Schema::create('kitchendevices', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('kitchen_id')->nullable();
                $table->unsignedBigInteger('id_kitchen_section')->nullable();
                $table->unsignedBigInteger('id_device_class')->nullable();
                $table->string('device_name', 50)->nullable()->collation('utf8mb4_bin');
                $table->string('icon', 255)->nullable()->collation('utf8mb4_bin');
                $table->text('video_code')->collation('utf8mb4_bin')->nullable();
                $table->string('line_number', 30)->nullable()->collation('utf8mb4_bin');
                $table->string('hall_number', 30)->nullable()->collation('utf8mb4_bin');
                $table->boolean('is_active')->default(1); // TINYINT equivalent for the "boolean" type
                $table->longText('zigbee_config')->collation('utf8mb4_bin')->nullable();
                $table->string('manufacturer', 255)->nullable()->collation('utf8mb4_bin');
                $table->string('model', 255)->nullable()->collation('utf8mb4_bin');
                $table->timestamps();

                // Если нужно, добавим внешние ключи
                $table->foreign('kitchen_id')->references('id')->on('kitchens')->onDelete('set null');
                $table->foreign('id_kitchen_section')->references('id')->on('kitchensections')->onDelete('set null');
                $table->foreign('id_device_class')->references('id')->on('devicesclasses')->onDelete('set null');
                // $table->foreign('id_device_version')->references('id')->on('device_versions')->onDelete('set null');
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
        Schema::dropIfExists('kitchendevices');
    }
}
