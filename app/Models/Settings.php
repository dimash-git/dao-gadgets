<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Settings extends Model
{
    use HasFactory;

    public function kitchen(): BelongsTo
    {
        return $this->belongsTo(Kitchen::class,'kitchen_id');
    }


    protected $fillable = [
        'name',
        'kitchen_id',
        'value',

    ];
}
