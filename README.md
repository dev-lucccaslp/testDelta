# API: 

Requisitos do Servidor:
É necessário `PHP versão 7.4` ou superior, com as seguintes extensões instaladas:
-intl;
-mbstring;
Além disso, certifique-se de que as seguintes extensões estão habilitadas no seu PHP:
-json (habilitado por padrão - não desative);
-mysqlnd se você planeja usar MySQL;
-libcurl se você planeja usar a biblioteca HTTP\CURLRequest;

Banco de Dados:
-Instale o MySQL.

Configuração:
-Copie o arquivo `env` para `.env` e adapte para sua aplicação, especificamente o baseURL
e quaisquer configurações de banco de dados.
-Recomenda-se que crie um banco com nome de `TestDelta` ou altere para um nome que você deseja usar.

Executando o Projeto:
-Após configurar o arquivo .env, execute o comando php spark migrate para gerar as tabelas e colunas no banco.
-Para executar a API, utilize o comando `php spark serve`.


# FRONT-END:

Versão do Node Utilizada:
-v21.6.1

Versão do npm:
-10.2.4

Iniciando o Projeto:
Para iniciar o projeto, execute o comando `npm i`.

Após concluir a instalação, execute o comando `npm run dev`.
