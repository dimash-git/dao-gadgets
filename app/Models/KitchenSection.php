<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class KitchenSection extends Model
{
    use HasFactory;

    protected $table = 'kitchensections';

    public function devices(): HasMany
    {
        return $this->hasMany(Device::class, 'id_kitchen_section');
    }


    public function kitchen(): BelongsTo
    {
        return $this->belongsTo(Kitchen::class, 'kitchen_id');
    }

    /**
     * выяснили что наследования не будет
     */
    /*   public function parent(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {

        return $this->belongsTo(self::class, 'parent_id', 'id');
    }*/

    /*    public function color(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Color::class, 'id_color', 'id');
    }*/


    protected $fillable = [
        'kitchen_id',
        'parent_id',
        'name',
        'eng',
        'type',
        'is_active',
        'id_color',
        'created_at',
        'updated_at',
    ];
}
