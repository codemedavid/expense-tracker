<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    protected $table = 'income';
    protected $fillable = ['title', 'schedule', 'income'];

    use HasFactory;

    public function finance()
    {
        return $this->belongsTo(Finance::class);
    }
}
