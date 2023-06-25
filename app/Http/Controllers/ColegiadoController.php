<?php

namespace App\Http\Controllers;

use App\Models\Colegiado;
use App\Http\Requests\StoreColegiadoRequest;
use App\Http\Requests\UpdateColegiadoRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ColegiadoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Colegiado/Index',[
            'colegiados' => Colegiado::all(),
            
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreColegiadoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Colegiado $colegiado)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Colegiado $colegiado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateColegiadoRequest $request)
    {
        $personid = Auth::user()->person_id;
        $colegiado = Colegiado::find($personid);
        // $colegiado->update([
        //     'address' => $request->address,
        //     'phone' => $request->phone,
        // ]);
        echo '<script>console.log('.$personid.')</script>';
        // $request->user()->save();

        //return Redirect::route('profile.edit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Colegiado $colegiado)
    {
        //
    }
}
