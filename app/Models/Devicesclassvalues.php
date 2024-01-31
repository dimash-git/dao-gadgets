<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Devicesclassvalues extends Model
{
    use HasFactory;
    protected $table = 'deviceclassvalues';

    public function devicesclass(): BelongsTo
    {
        return $this->belongsTo(Devicesclass::class,'id_device_class');
    }
    protected $fillable = [
        'id_device_class',
        'name',
        'intependent_title',
        'default_value',
        'topic',
        'relay_duration',//Избавиться от костылей кок будет понятно что ребята хотят видеть в админке
        'topic_read',
        'run_this_code_on_change',
        'val',
        'eng',
        'description',
        'yandex_properties',
        'min',
        'max',
        'status_on',
        'status_off',
        'independent_device',
        'type',
        'in_scenario_active',
        'created_at',
        'updated_at'
    ];
}
