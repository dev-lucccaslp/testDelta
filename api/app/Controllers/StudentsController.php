<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

class StudentsController extends ResourceController
{
    protected $modelName = 'App\Models\Students';
    protected $format = 'json';
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return ResponseInterface
     */
    public function index()
    {
        $data = [
            'message' => 'success',
            'data' => $this->model->findAll()
        ];

        return $this->respond($data, 200);
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return ResponseInterface
     */

    public function create()
    {
        $userId = $this->request->getPost('user_id'); // Supondo que você está passando o ID do usuário através da solicitação

        $name = $this->request->getPost('name');
        $email = $this->request->getPost('email');
        
    
        // Salva o estudante no banco de dados, vinculando-o ao usuário logado
        $model = new \App\Models\Students();
        $data = [
            'name' => $this->request->getVar('name'),
            'email' => $this->request->getVar('email'),
            'user_id' => $this->request->getVar('user_id'),
        ];
        $model->insert($data);
    
        // Retorna uma resposta de sucesso
        return $this->respond($data, 200);
    }

    public function update($id = null)
    {
        //
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return ResponseInterface
     */
    public function delete($id = null)
    {
        //
    }
}
