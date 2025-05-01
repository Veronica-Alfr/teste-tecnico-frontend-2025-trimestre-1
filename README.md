<main>
  <h1 align="center">Lista de Contatos/Endereços</h1>

  <p>
    O projeto faz a consumação da API ViaCEP. Nele adicionamos contatos com base no seu CEP, retornando uma lista de contatos com seus endereços, na qual é possível excluí-lo e editar o nome de exibição do endereço.

  [Assista ao vídeo do projeto](public/videos/Video_Project.mp4)
  </p>

  <h3>Status do Projeto</h3>
  
    Requisitos obrigatórios finalizados ✅

  <h3>+ Tarefas 👩🏽‍💻</h3>

    - Adicionar testes unitários

  <h3>Observações</h3>
  
    Esse é um projeto com instruções e licença 📜 registrados aqui -> chore/README.md

<summary><h3>🐋 Rodando no Docker vs Localmente</h3></summary>

  <details>
  
## 👉 Com Docker

    ⚠ Antes de começar, seu docker-compose precisa estar na versão 2.29 e o docker na versão 27.2 de preferência.

    ⚠ Suba o projeto completo usando o comando docker-compose up --build na raiz do projeto.

    - Esses serviços inicializarão o contêiner chamado app_frontend.

    - A partir daqui, você pode executar o contêiner via CLI ou abri-los no VS Code.

    ℹ️ As dependências são instaladas por meio do Dockerfile que é lido pelo Docker.

    ✨ Dica: A extensão Remote - Containers é recomendada para que você possa desenvolver sua aplicação no container Docker diretamente no VS Code, assim como você faz com seus arquivos locais.

<br />

## 👉 Sem Docker

    > :information_source: Instale as dependências com `npm install` no diretório frontend/.

    ⚠ Não execute o comando npm audit fix! Ele atualiza várias dependências do projeto que podem causar conflitos.

    - ✨ Dica: Para executar o projeto dessa forma, você deve ter o node instalado no seu computador.

    ⚠ Espera-se que a versão do node usada esteja entre as mais recentes (v20+).

    - Para executar a aplicação use o comando `npm run dev` em seu diretório.

  <br/>

  </details>

  <h3>🛠 Tecnologias</h3>

    As tecnologias usadas foram: React, TS, ContextAPI, Hooks, Docker, Eslint, Tailwind CSS, Vite.
    As bibliotecas utilizadas foram: Swal, React Icons, React Paginate, React Toastify.
    

  <h3>Author</h3>

  <a href='https://github.com/Veronica-Alfr'>Verônica Alves</a>

</main>
