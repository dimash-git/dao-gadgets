<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Devicesclass extends Model
{
    use HasFactory;
    protected $table = 'devicesclasses';


    public function devicesclassvalues(): HasMany
    {
        return $this->hasMany(Devicesclassvalues::class, 'id_device_class');
    }

    protected $fillable = [
        'name',
        'eng',
        'type',
        'description',
        'division_into_devices',
        'crutch_rgb_backlight', //Избавиться от костылей кок будет понятно что ребята хотят видеть в админке
        'device_parameters',
        'is_service',
        'created_at',
        'updated_at'
    ];
}
