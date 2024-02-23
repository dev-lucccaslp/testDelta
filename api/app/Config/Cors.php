<?php

namespace Config;

class Cors extends \Fluent\Cors\Config\Cors
{

    public $allowedHeaders = ['*'];
    public $allowedMethods = ['*'];
    public $allowedOrigins = ['http://localhost:5173'];
    public $allowedOriginsPatterns = [];
    public $exposedHeaders = [];
    public $maxAge = 0;
    public $supportsCredentials = false;

}