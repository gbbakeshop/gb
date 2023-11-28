<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Attendance;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
      
        $user = User::where('email', $request->email)->first();
        $attendance= Attendance::where([['userid','=',$user['id']],['date','=',$request->date]])->first();
        
        if ($user->position !== 'admin') {
            
            if ($attendance == null) {
                $request->authenticate();
                $request->session()->regenerate();
                $request->session()->put('account', $user);
                return redirect()->intended(RouteServiceProvider::BRANCH);
        
            } else if (
                $attendance['am_in'] == null || $attendance['am_out'] == null ||
                $attendance['pm_in'] == null || $attendance['pm_out'] == null ||
                $attendance['am2_in'] == null || $attendance['am2_out'] == null ||
                $attendance['pm2_in'] == null || $attendance['pm2_out'] == null
            ) {
                $request->authenticate();
                $request->session()->regenerate();
                $request->session()->put('account', $user);
                return redirect()->intended(RouteServiceProvider::HOME);
                
            }else{
                throw ValidationException::withMessages([
                    'email' =>"You're transactions has finished; come back tomorrow!",
                ]);
            }
        } else {
            $request->authenticate();
            $request->session()->regenerate();
            $request->session()->put('account', $user);
            return redirect()->intended(RouteServiceProvider::HOME);
        }
       
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();
        $request->session()->flush();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->to('/')->send();
    }
}