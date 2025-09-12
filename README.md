# Blog de Viagens ✈ - Projeto Full-Stack

Este projeto é um *blog de viagens*, desenvolvido durante o curso **+Devs2Blu** com a orientação do professor *Ralf Lima*. O objetivo foi aplicar na prática o desenvolvimento full-stack, com um backend em Node.js e uma interface em Angular.

## Estrutura do Projeto 📂

O projeto é dividido em duas partes principais, o frontend e o backend, que se comunicam através de uma API RESTful.

### Frontend (Angular) 🖼

A interface do usuário foi construída com Angular, focando em uma experiência de navegação fluida e intuitiva.

<p align="center">
  <img src="https://github.com/MariaAlineMees/Blog_Viagem/raw/main/frontend/src/assets/images/tela-principal.jpg" alt="Tela principal do blog de viagens com um carrossel e a lista de postagens." width="600">
</p>


* *Páginas Principais*:
    * *Home*: Exibe as postagens mais recentes em um carrossel e uma lista de posts.
    * *Detalhes do Post*: Permite a leitura completa de cada postagem e exibe o número de visualizações.
    * *Filtro e Busca*: Permite filtrar posts por categoria e buscar por títulos específicos.

<p align="center">
  <img src="https://github.com/MariaAlineMees/Blog_Viagem/raw/main/frontend/src/assets/images/filtro-categorias.jpg" alt="Exemplo de filtro de posts por categoria." width="600">
</p>

* *Painel Filtro por titulo específico*

<p align="center">
  <img src="https://github.com/MariaAlineMees/Blog_Viagem/blob/main/frontend/src/assets/images/pesquisar-titulo.jpg" alt="Exemplo de busca de posts por título." width="600">
</p>


* *Painel Administrativo*: Acessível em /admin/login, oferece controle total sobre o conteúdo.

<p align="center">
  <img src="https://github.com/MariaAlineMees/Blog_Viagem/blob/main/frontend/src/assets/images/login.jpg" alt="Tela de login do painel administrativo." width="600">
</p>

    * *Login*: Autenticação para acesso seguro.
    * *Gerenciamento de Posts*: Adicione, edite ou exclua posts com um formulário intuitivo.
    * *Gerenciamento de Categorias*: Crie e gerencie as categorias do blog.
    * *Estatísticas*: Visualize o número de cliques de cada postagem.

<p align="center">
  <img src="https://github.com/MariaAlineMees/Blog_Viagem/blob/main/frontend/src/assets/images/dashboard-login.jpg" alt="Dashboard do painel administrativo." width="600">
</p>

### Backend (Node.js com Express) ⚙

O servidor foi criado para ser uma API RESTful, responsável por gerenciar os dados do blog.

* *Autenticação*: Rota de login para autenticação do administrador.
* *Dados em Memória*: Os posts e categorias são armazenados em arrays no servidor, simulando um banco de dados real para facilitar o desenvolvimento.
* *Contador de Cliques*: Cada vez que uma postagem é acessada, a API registra um clique.
* *Rotas Otimizadas*: Rotas com suporte a query parameters para busca e filtragem.

## Rotas da API (Endpoints) 🔗

A API foi projetada para ser clara e seguir as convenções RESTful.

| Método | Endpoint | Descrição |
|:---:|:---|:---|
| POST | /api/login | Autentica um administrador. |
| GET | /api/posts | Lista todos os posts. Suporta filtros por categoryId e termo de busca (q). |
| GET | /api/posts/:id | Retorna os detalhes de um post específico. |
| POST | /api/posts | Cria um novo post. |
| PUT | /api/posts/:id | Atualiza um post existente. |
| DELETE| /api/posts/:id | Exclui um post. |
| POST | /api/posts/click/:id| Registra um clique em um post. |
| GET | /api/categories | Lista todas as categorias. |
| POST | /api/categories| Cria uma nova categoria. |
| PUT | /api/categories/:id| Atualiza uma categoria. |
| DELETE| /api/categories/:id| Exclui uma categoria. |
| GET | /api/statistics | Retorna o número de cliques por post. |

## Tecnologias Utilizadas 🛠

* *Frontend*: Angular, TypeScript, HTML, SASS/CSS.
* *Backend*: Node.js, Express.js.
* *Outros*: Gerenciador de pacotes NPM, CORS.

## Como Executar o Projeto 🚀

Para rodar o projeto localmente, certifique-se de ter o Node.js e o Angular CLI instalados.

1.  *Clone o repositório:*
    ```bash
    git clone [https://github.com/MariaAlineMees/Blog_Viagem](https://github.com/MariaAlineMees/Blog_Viagem)
    ```

2.  *Inicie o Backend:*
    Abra um terminal, navegue até a pasta `backend` e execute os comandos:
    ```bash
    cd backend
    npm install
    npm start
    ```

3.  *Inicie o Frontend:*
    Abra um *novo terminal*, navegue até a pasta `frontend` e execute:
    ```bash
    cd frontend
    npm install
    ng serve
    ```

    ## Desenvolvido por  *Maria Aline Mees* 👩🏻‍💻
