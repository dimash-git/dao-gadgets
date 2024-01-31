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
        if (!Schema::hasTable('deviceclassvalues')) {

            Schema::create('deviceclassvalues', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('id_device_class')->nullable();
                $table->string('name', 50)->nullable();
                $table->string('intependent_title', 255)->nullable(false);
                $table->string('default_value', 255)->nullable();
                $table->string('topic', 255)->nullable();
                $table->string('relay_duration', 10)->nullable();
                $table->string('topic_read', 255)->nullable();
                $table->text('run_this_code_on_change')->nullable();
                $table->string('val', 255)->nullable(false);
                $table->string('eng', 191)->nullable();
                $table->string('description', 255)->nullable();
                $table->integer('yandex_properties')->default(0)->nullable(false);
                $table->integer('min')->nullable();
                $table->integer('max')->nullable();
                $table->text('status_on')->nullable();
                $table->text('status_off')->nullable();
                $table->integer('independent_device')->default(0)->nullable(false);
                $table->string('type', 255)->default('string')->nullable(false);
                $table->integer('in_scenario_active')->default(0)->nullable(false);
                $table->timestamps();


                $table->foreign('id_device_class')->references('id')->on('devicesclasses')->onDelete('set null');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deviceclassvalues');
    }
};
