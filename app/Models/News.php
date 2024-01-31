<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // надо указать какие поля можем заполнять в бд
    // дальше надо обновить миграции в database/migrations/2023_11_30_062147_create_tasks_table.php
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'date',
        'img'
    ];
}
