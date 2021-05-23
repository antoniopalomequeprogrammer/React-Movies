<?php
use App\Http\Controllers\PeliculaController;
use App\Http\Controllers\UserController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/peliculas',[App\Http\Controllers\PeliculaController::class,'index']);
Route::put('/pelicula/actualizar/{id}',[App\Http\Controllers\PeliculaController::class,'update']);
Route::post('/pelicula/guardar',[App\Http\Controllers\PeliculaController::class,'store']);
Route::delete('/pelicula/borrar/{id}',[App\Http\Controllers\PeliculaController::class,'destroy']);
Route::get('/pelicula/buscar/{id}',[App\Http\Controllers\PeliculaController::class,'show']);


Route::post('/registro',[App\Http\Controllers\UserController::class,'registro']);
Route::post('/login',[App\Http\Controllers\UserController::class,'login']);
