<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\FinancialSetupController;
class RedirectIfSetupComplete
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();

        // Example check: adjust according to your application logic
        if ($user && $user->setup_complete == 1) { // Assume `setup_complete` is a boolean attribute on the User model
            return redirect('/dashboard');
        }

        return $next($request);
    }
}
