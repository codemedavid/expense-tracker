<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Finance;
use App\Models\User;
use App\Models\Goals;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Expense;
use Illuminate\Http\RedirectResponse;
use Intervention\Image\Facades\Image;

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
        $finance = Finance::where('user_id', $user_id)->get();
        $expenses = Expense::where('user_id', $user_id)->get();
        $goals = Goals::where('user_id', $user_id)->get();

        return Inertia::render('Dashboard', ['goals' => $goals, 'expenses' => $expenses, 'finance' => $finance]);
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
            'users_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $users_image = null;

        if ($request->hasFile('users_image')) {
            $image = $request->file('users_image');
            $filename = $image->store('images', 'public');

            $users_image = $filename;
        }

        $user = auth()->user();
        $goal = $user->goals()->create([
            'name' => $request->input('name'),
            'money' => $request->input('money'),
            'target_date' => $request->input('target_date'),
            'users_image' => $users_image,
        ]);

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
