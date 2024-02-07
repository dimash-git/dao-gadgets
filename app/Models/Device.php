<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Device extends Model
{
    use HasFactory;

    protected $table = 'kitchendevices';

    public function kitchen(): BelongsTo
    {
        return $this->belongsTo(Kitchen::class, 'kitchen_id');
    }

    public function section(): BelongsTo
    {
        return $this->belongsTo(KitchenSection::class, 'id_kitchen_section');
    }

    public function devicevalues(): HasMany
    {
        return $this->hasMany(Devicevalues::class, 'id_device_value');
    }

    // надо указать какие поля можем заполнять в бд
    protected $fillable = [
        'kitchen_id',
        'id_kitchen_section',
        'id_device_class',
        'device_name',
        'type',
        'icon',
        'video_code',
        'line_number',
        'hall_number',
        'is_active',
        'zigbee_config',
        'manufacturer',
        'model',
        'type',
        'order',
    ];
}
