<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Pagos extends Controller
{
    public function index(){
        return view('pago/index');
    }
}
