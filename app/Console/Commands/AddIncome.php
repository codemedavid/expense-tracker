<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Income;
use Carbon\Carbon;

class AddIncome extends Command
{
    protected $signature = 'income:add';
    protected $description = 'Add income based on the user\'s schedule';

    public function handle()
    {
        $today = Carbon::today();

        // Fetch only incomes with a recurring schedule
        $recurringIncomes = Income::whereIn('schedule', ['daily', 'weekly', 'monthly'])->get();

        foreach ($recurringIncomes as $income) {
            if ($this->isScheduledForToday($income, $today)) {
                $this->processIncome($income);
            }
        }

        $this->info('Scheduled incomes have been processed.');
    }

    private function isScheduledForToday($income, $today)
    {
        // Determine if today matches the income's schedule
        switch ($income->schedule) {
            case 'monthly':
                return $today->day === Carbon::parse($income->created_at)->day;
            case 'weekly':
                return $today->dayOfWeek === Carbon::parse($income->created_at)->dayOfWeek;
            case 'daily':
                return true;
            default:
                return false;
        }
    }

    private function processIncome($income)
    {
        // Duplicate the income entry
        $newIncome = $income->replicate(['created_at', 'updated_at']);
        // Set the schedule to 'just_now' to indicate a one-time addition
        $newIncome->schedule = 'just_now';
        $newIncome->created_at = Carbon::now();
        $newIncome->updated_at = Carbon::now();
        $newIncome->save();

        // Log the operation
        \Log::info("Duplicated income for user: {$income->user_id} with ID {$income->id} as a one-time addition.");

        // Optionally, instead of directly updating the finance table here,
        // you could listen for a model saved event on Income and handle the finance update there
        // if you strictly want to avoid direct finance updates within this command.
    }
}
