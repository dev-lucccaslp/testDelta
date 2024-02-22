<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

use \Firebase\JWT\JWT;

class LoginController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return ResponseInterface
     */
    public function index()
    {
        
        $userModel = new \App\Models\User();
  
        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');
          
        $user = $userModel->where('email', $email)->first();
  
        if(is_null($user)) {
            return $this->respond(['error' => 'Invalid username or password.'], 401);
        }
  
        $pwd_verify = password_verify($password, $user['password']);
  
        if(!$pwd_verify) {
            return $this->respond(['error' => 'Invalid username or password.'], 401);
        }
 
        $key = getenv('JWT_SECRET');
        $iat = time(); // current timestamp value
        $exp = $iat + 86400;
 
        $payload = array(
            "iss" => "Issuer of the JWT",
            "aud" => "Audience that the JWT",
            "sub" => "Subject of the JWT",
            "iat" => $iat, //Time the JWT issued at
            "exp" => $exp, // Expiration time of token
            "email" => $user['email'],
        );
         
        $token = JWT::encode($payload, $key, 'HS256');
 
        $response = [
            'message' => 'Login Succesful',
            'user_id' => $user['id'],
            'token' => $token,
        ];
         
        return $this->respond($response, 200);
    }
}
