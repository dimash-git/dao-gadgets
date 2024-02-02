<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Kitchen extends Model
{
    use HasFactory;

    // Указываем имя таблицы, если оно не соответствует имени модели во множественном числе
    protected $table = 'kitchens';

    // Если ты не хочешь, чтобы Eloquent пытался поддерживать поля created_at и updated_at,
    // установи свойство $timestamps в false.
    public $timestamps = true;

    public function users(): hasMany
    {
        return $this->hasMany(User::class, 'kitchen_id')->with('roles');
    }

    public function sections(): HasMany
    {
        return $this->hasMany(KitchenSection::class, 'kitchen_id')->with('devices');;
    }

    public function device(): HasMany
    {
        return $this->hasMany(Device::class, 'kitchen_id');
    }

    public function settings(): HasMany
    {
        return $this->hasMany(Settings::class, 'kitchen_id');
    }

    public function news(): BelongsToMany
    {
        return $this->belongsToMany(News::class, 'kitchen_news');
    }


    // Указываем, какие поля можно массово назначать.
    protected $fillable = [
        'name',
        'contract_number',
        'address',
        'mqtt_prefix',
        'mqtt_status',
        'firmware_version',
        'alive',
        'settings_general',
        'settings_mosfet',
        'settings_addrledstrip',
        'settings_button'
    ];

    // Если ты хочешь преобразовывать поля в другие типы, используй свойство $casts
    protected $casts = [
        'alive' => 'boolean',
        'settings_general' => 'array',
        'settings_mosfet' => 'array',
        'settings_addrledstrip' => 'array',
        'settings_button' => 'array'
    ];
}
