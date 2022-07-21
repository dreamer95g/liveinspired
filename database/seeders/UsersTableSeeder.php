<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Gabry',
            'email' => 'gabry95g@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make("xgabry"),
            'remember_token' => Str::random(10),
        ]);
    }
}
