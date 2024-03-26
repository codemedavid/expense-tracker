<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Events\IncomeCreated;

class Income extends Model
{
    protected $table = 'income';
    protected $fillable = ['user_id', 'title', 'schedule', 'income'];

    use HasFactory;

    public function finance()
    {
        return $this->belongsTo(Finance::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected $dispatchesEvents = [
        'created' => IncomeCreated::class,
    ];
}
