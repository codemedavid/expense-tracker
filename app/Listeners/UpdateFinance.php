<?php

namespace App\Listeners;

use App\Events\IncomeCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateFinance
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(IncomeCreated $event)
    {
        $income = $event->income;
        if ($income->schedule === 'just_now') {
            $userFinance = $income->user->finance()->firstOrCreate();
            $userFinance->increment('totalIncome', $income->income);
            $userFinance->increment('wallet', $income->income);
            // Log or further processing
        }
    }
}
