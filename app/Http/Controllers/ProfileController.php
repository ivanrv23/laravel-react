<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Colegiado;
use App\Models\Employee;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $userid = Auth::user()->id;
        $tipo = Auth::user()->type;
        $personid = Auth::user()->person_id;
        //De acuerdo al tipo, jalamos los datos del colegiado o empleado
        if ($tipo == 1) {
            $persona = Colegiado::where('colegiados.id', $personid)->get();
        } else {
            $persona = Employee::where('employees.id', 1)->get();
        }
        
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session ('status'),
            'persona' => $persona,
            // 'rol' => Role::select('roles.*')
            // ->join('users', 'roles.id', '=', 'users.rol_id')
            // ->where('users.id', '=', 1)->get(),
            'rol' => User::where('users.id', $userid)->get()->map(function ($p) {
                return [
                    'id' => $p->id,
                    'name' => $p->name,
                    'email' => $p->email,
                    'state' => $p->state,
                    'rol_id' => $p->rol_id,
                    'namerol' => Role::find($p->rol_id)->namerol,
                ];
            }),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
