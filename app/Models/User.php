<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    protected $table = 'users';

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $dates = ['deleted_at'];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function images(): BelongsToMany
    {
        return $this->belongsToMany(Image::class);
    }

    public function notes(): HasMany
    {
        return $this->hasMany(Note::class);
    }

    public function phrases(): HasMany
    {
        return $this->hasMany(Phrase::class);
    }

    public function tags(): HasMany
    {
        return $this->hasMany(Tag::class);
    }
}
