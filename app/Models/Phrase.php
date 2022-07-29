<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Phrase extends Model
{
    // use HasFactory, SoftDeletes;
    use HasFactory;

    protected $dates = ['deleted_at'];

    protected $table = 'phrases';

    protected $fillable = [
        'text',
        'author',
        'user_id'
    ];


    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
