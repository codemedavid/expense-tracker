<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\RecurringBill;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;

class FinancialSetupController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Setup', []);
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'monthlySalary' => 'required|numeric|min:0',
            'recurringBills' => 'array',
            'recurringBills.*.name' => 'required|string|max:255',
            'recurringBills.*.amount' => 'required|numeric|min:0',
            'recurringBills.*.start' => 'required|date',
            'recurringBills.*.end' => 'nullable|date|after_or_equal:recurringBills.*.start',
            'desiredBudget' => 'required|numeric|min:0',
            'budgetType' => 'required|string|in:daily,weekly,monthly',
        ]);

        $user = $request->user();


        $user->update([
            'monthly_salary' => $data['monthlySalary'],
            'desired_budget' => $data['desiredBudget'],
            'budget_type' => $data['budgetType'],
        ]);

        // Handle recurring bills
        foreach ($data['recurringBills'] as $bill) {
            RecurringBill::create([
                'user_id' => $user->id,
                'name' => $bill['name'],
                'amount' => $bill['amount'],
                'start' => $bill['start'],
                'end' => $bill['end'] ?? null,
            ]);
        }


        $user->income()->create([
            'title' => 'Monthly Salary',
            'schedule' => 'monthly',
            'income' => $data['monthlySalary'],
        ]);

        $finance = $user->finance()->firstOrCreate();
        $finance->totalIncome += $data['monthlySalary'];
        $finance->wallet += $data['monthlySalary'];
        $finance->save();

        $user = $request->user();
        $user->setup_complete = true;
        $user->save();




        // Redirect the user after setup completion
        return redirect(RouteServiceProvider::HOME);
    }
}
