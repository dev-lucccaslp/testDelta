<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

class StudentsController extends ResourceController
{
    protected $modelName = 'App\Models\Students';
    protected $format = 'json';

    public function index()
    {
        $data = [
            'message' => 'success',
            'data' => $this->model->findAll()
        ];

        return $this->respond($data, 200);
    }

    public function create()
    {
        $userId = $this->request->getPost('user_id');

        $name = $this->request->getPost('name');
        $email = $this->request->getPost('email');
        $state = $this->request->getPost('state');
        $city = $this->request->getPost('city');
        
        $model = new \App\Models\Students();

        $data = [
            'name' => $this->request->getVar('name'),
            'email' => $this->request->getVar('email'),
            'user_id' => $this->request->getVar('user_id'),
            'state' => $this->request->getVar('state'),
            'city' => $this->request->getVar('city')
        ];
        $model->insert($data);
    
        return $this->respond($data, 200);
    }

    public function getById($id = null)
    {
        if ($id === null) {
            return $this->fail('ID do estudante não fornecido', 400);
        }
    
        $model = new \App\Models\Students();
    
        $student = $model->find($id);
    
        if ($student === null) {
            return $this->fail('Estudante não encontrado', 404);
        }
        return $this->respond($student, 200);
    }
    
    public function update($id = null)
    {
        if ($id === null) {
            return $this->fail('ID do estudante não fornecido', 400);
        }
    
        $data = json_decode($this->request->getBody(), true);
    
        $name = $data['name'];
        $email = $data['email'];
        $state = $data['state'];
        $city = $data['city'];
    
        $model = new \App\Models\Students();
    
        $student = $model->find($id);
    
        if ($student === null) {
            return $this->fail('Estudante não encontrado', 404);
        }
    
        $student['name']  = $name;
        $student['email'] = $email;
        $student['state'] = $state;
        $student['city']  = $city;
    
        $model->save($student);
    
        return $this->respond($student, 200);
    }
    
    public function delete($id = null)
    {
        // Verifica se o ID foi fornecido
        if ($id === null) {
            return $this->fail('ID do estudante não fornecido', 400);
        }
    
        $model = new \App\Models\Students();
        $student = $model->find($id);
    
        if ($student === null) {
            return $this->fail('Estudante não encontrado', 404);
        }
        $model->delete($id);

        return $this->respondDeleted($student);
    }
}
