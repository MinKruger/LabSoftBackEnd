<h3>ARQUITETURA</h3>
<p>O projeto é baseado na Clean Architecture. Uma architetura que possibilita que diferentes partes do sistema, possuam um baixo grau de dependência, ou seja, baixo acoplamento, resultando em uma fácil manutenibilidade e testabilidade.</p>
<img src="public/CleanArchitecture.jpg">
<br><br>
<h3> INSTRUÇÕES </h3>
<ul>
    <li> 
        Caso não tenha instalado o mysql nativamente na máquina, você pode rodar o container da imagem do mesmo. Para isso é necessário que tenha instalado Docker e Docker Compose. Execute o comando: 
        <code>docker-compose -f docker-compose.dev.yml up</code> 
    </li>
    <br>
    <li>
        Caso for a primeira vez iniciando a aplicação, será necessário a criação do banco.
        Se estiver subido o banco pela imagem do mysql com o docker compose rode o comando:
        <code>docker exec -it database sh -c "mysql -u root -p"</code> <br>
        Depois execute:
        <code>CREATE DATABASE lab_soft;</code> <br>
    </li>
    <br>
    <li>
        Para instalar as dependências rode:
        <code>yarn</code> ou <code>npm i</code>
    </li>
     <br>
    <li>
        Para iniciar o projeto em desenvolvimento rode:
        <code>yarn dev</code> ou <code>npm run dev</code>
    </li>
     <br>
    <li>
        Para rodar as migrations: <code>npx sequelize-cli db:migrate</code><br>
        Para rodar as seeds: <code>npx sequelize-cli db:seed:all</code>
    </li><br>
    <li>
        Para ver a documentação da API(Swagger), acesse a rota <code>/docs</code><br>
    </li>
</ul>
