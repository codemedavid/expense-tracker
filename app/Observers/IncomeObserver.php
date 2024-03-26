<?php

namespace App\Observers;

use App\Models\Income;

class IncomeObserver
{
    /**
     * Handle the Income "created" event.
     */
    public function created(Income $income)
    {
        if ($income->schedule === 'just_now') {
            $finance = $income->user->finance()->firstOrCreate();
            $finance->increment('totalIncome', $income->income);
            $finance->increment('wallet', $income->income);
        }
    }

    /**
     * Handle the Income "updated" event.
     */
    public function updated(Income $income): void
    {
        //
    }

    /**
     * Handle the Income "deleted" event.
     */
    public function deleted(Income $income): void
    {
        //
    }

    /**
     * Handle the Income "restored" event.
     */
    public function restored(Income $income): void
    {
        //
    }

    /**
     * Handle the Income "force deleted" event.
     */
    public function forceDeleted(Income $income): void
    {
        //
    }
}
