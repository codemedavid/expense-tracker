<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goals extends Model
{
    use HasFactory;
    protected $table = 'goals';
    protected $fillable = ['user_id', 'name', 'target_amount', 'balance', 'target_date', 'users_image'];

    public function user()
{
    return $this->belongsTo(User::class);
}

}
