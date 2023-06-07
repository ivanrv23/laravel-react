<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
{/* La de ejemplo*/}
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
{/* Menu de pagos */}
Route::get('/pagos', function () {
    return Inertia::render('Pagos');
})->middleware(['auth', 'verified'])->name('Pagos');
Route::get('/realizarPagos', function () {
    return Inertia::render('RealizarPagos');
})->middleware(['auth', 'verified'])->name('RealizarPagos');
Route::get('/historialpagos', function () {
    return Inertia::render('HistorialPagos');
})->middleware(['auth', 'verified'])->name('HistorialPagos');
{/* Menu de capítulos */}
Route::get('/capitulos', function () {
    return Inertia::render('Capitulos');
})->middleware(['auth', 'verified'])->name('Capitulos');
Route::get('/infocapitulos', function () {
    return Inertia::render('InfoCapitulos');
})->middleware(['auth', 'verified'])->name('InfoCapitulo');
Route::get('/tucapitulo', function () {
    return Inertia::render('Tucapitulo');
})->middleware(['auth', 'verified'])->name('TuCapitulo');
{/* Menu de eventos */}
Route::get('/eventos', function () {
    return Inertia::render('Eventos');
})->middleware(['auth', 'verified'])->name('Eventos');
Route::get('/eventosgenerales', function () {
    return Inertia::render('EventosGenerales');
})->middleware(['auth', 'verified'])->name('EventosGenerales');
Route::get('/eventosactuales', function () {
    return Inertia::render('EventosActuales');
})->middleware(['auth', 'verified'])->name('EventosActuales');
Route::get('/eventosfuturos', function () {
    return Inertia::render('EventosFuturos');
})->middleware(['auth', 'verified'])->name('EventosFuturos');
{/* Menu de Administración */}
Route::get('/administraciongcap', function () {
    return Inertia::render('AdministracionGCap');
})->middleware(['auth', 'verified'])->name('AdministracionGCap');
Route::get('/administraciongev', function () {
    return Inertia::render('AdministracionGEv');
})->middleware(['auth', 'verified'])->name('AdministracionGEv');
Route::get('/administraciongsol', function () {
    return Inertia::render('AdministracionGSol');
})->middleware(['auth', 'verified'])->name('AdministracionGSol');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
