<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Pagina inicial';
})->name('home');

Route::get('/contact', function () {
    return view('pages.contact');
})->name('contact');

Route::get('/about', function () {
    return 'pages about';
})->name('about');

Route::get('/projects', function () {
    return 'pages projects';
})->name('projects');
