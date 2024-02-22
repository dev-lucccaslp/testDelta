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
$routes->get("api/students" , "StudentsController::index", ['filter' => 'authFilter']);