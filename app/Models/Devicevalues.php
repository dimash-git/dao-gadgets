<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Devicevalues extends Model
{
    use HasFactory;

    protected $table = 'kitchendevicesvalues';

    public function device(): BelongsTo
    {
        return $this->belongsTo(Device::class,'id_device_value');
    }
    protected $fillable = [
        'id_device_value',
        'id_kitchen_device',
        'property',
        'value',
        'created_at',
        'updated_at'
    ];
}
