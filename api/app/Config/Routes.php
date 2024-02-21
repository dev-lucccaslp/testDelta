<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('user', 'UserController::index', ['filter' => 'authFilter']);
$routes->post('register', 'UserController::create');

$routes->post("login", "LoginController::index");

$routes->post("createstudent", "StudentsController::create", ['filter' => 'authFilter']);
$routes->get("students" , "StudentsController::index", ['filter' => 'authFilter']);