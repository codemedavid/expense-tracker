<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Goals;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Expense;

class GoalsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {

        $user_id = Auth::id();
        $expenses = Expense::where('user_id', $user_id)->get();
        $goals = Goals::where('user_id', $user_id)->get();
        return Inertia::render('Dashboard', ['goals' => $goals, 'expenses' => $expenses]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Goals/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'money' => 'required|numeric',
            'target_date' => 'required|date',
        ]);

        // Associate the goal with the currently authenticated user
        $user = auth()->user();
        $user->goals()->create($request->all());

        // Use Inertia::location to set the redirect location and flash data
        return Inertia::location(route('dashboard'));
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Goals  $goal
     * @return \Inertia\Response
     */
    public function show(Goals $goal)
    {
        return Inertia::render('Goals/Show', ['goal' => $goal]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Goals  $goal
     * @return \Inertia\Response
     */
    public function edit(Goals $goal)
    {
        return Inertia::render('Goals/Edit', ['goal' => $goal]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Goals  $goal
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Goals $goal)
    {
        $request->validate([
            'name' => 'required',
            'money' => 'required|numeric',
            'target_date' => 'required|date',
        ]);

        $goal->update($request->all());

        return redirect()->route('goals.index')
            ->with('success', 'Goal updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Goals  $goal
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Goals $goal)
    {
        $goal->delete();

        return redirect()->route('goals.index')
            ->with('success', 'Goal deleted successfully');
    }
}
