<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('api/user', 'UserController::index', ['filter' => 'authFilter']);
$routes->post('api/register', 'UserController::create');

$routes->post("api/login", "LoginController::index");

$routes->post("api/createstudent", "StudentsController::create", ['filter' => 'authFilter']);

$routes->get("api/studentsall/(:num)" , "StudentsController::index/$1", ['filter' => 'authFilter']);

$routes->get('api/students/(:num)', 'StudentsController::getById/$1', ['filter' => 'authFilter']);
$routes->put('api/students/(:num)', 'StudentsController::update/$1', ['filter' => 'authFilter']);
$routes->delete('api/students/(:num)', 'StudentsController::delete/$1', ['filter' => 'authFilter']);
