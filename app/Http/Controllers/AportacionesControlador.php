<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\aportaciones;
use Inertia\Inertia;

class AportacionesControlador extends Controller
{
    public function index()
    {
        $aportaciones = aportaciones::all();
        return Inertia::render('Aportaciones/Index', [
            'aportaciones' => $aportaciones,
        ]);
    }
}

