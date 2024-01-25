<?php

namespace App\Http\Controllers;

use App\Models\Income;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class IncomeController extends Controller
{
    /**
     * Display a listing of the income.
     *
     * @return \Inertia\Response
     */


    public function index()
    {
        // Retrieve all income records from the database
        $user_id = Auth::id();
        $income = Income::where('user_id', $user_id)->get();

        // Use Inertia to render the React component with data
        return Inertia::render('Income',  [
            'auth' => Auth::user(),
            'income' => $income,
    ]);

    }

    /**
     * Show the form for creating a new income.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        // Use Inertia to render the React component for creating income
        return Inertia::render('Income/Create');
    }

    /**
     * Store a newly created income in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'title' => 'required|string',
            'schedule' => 'required|string',
            'income' => 'required|numeric',
        ]);

        // Create a new income record associated with the currently authenticated user
        $user = auth()->user();
        $user->income()->create($request->all());

        // Redirect to the index page with a success message
        return redirect()->route('income');
    }

    // Other methods like show, edit, update, destroy, etc.
}
