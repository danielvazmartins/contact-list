# contact-list
Lista de contatos utilizando NodeJs e Angular

## Requisitos do projeto
- Best practices
`We expect to see how you test your application, if you follow good practices and how you solve problems. Please solve the following challenges using Node.js, bonus points for ES6 and Docker.`
- Contact List Backend
`Create a REST API which will store people and their contacts. A person can have multiple contacts such as phone, email or whatsapp. The API should allow to create, update, get and delete both the people and the contacts.`
- Contact List Frontend
`Create a web app which explores the API built in the second assignment. You are expected to use Angular 4, TypeScript, Angular CLI and SASS. The UI design is totally up to you.`

## Executar o projeto
- Infraestrutura
```bash
docker-compose up -d
# Acessar o container do node para criar a estrutura do banco de dados
docker exec -it contact-list-node bash
cd /usr/local/nodejs/contact-list/
sequelize db:migrate
# Popular o banco com alguns dados (OPCIONAL)
sequelize db:seed:all
```
- Backend
```bash
cd app
npm start
```
- Frontend
```bash
cd front
# Compilar para utilizar em producao 
ng build --aot

# Executar o Angular para desenvolvimento -> http://localhost:4200/ (OPCIONAL)
ng serve
```

## Estrutura do projeto
- docker-compose `Infraestrutura. Containers necessários para o projeto`
    - mysql
    - node ?
    - nginx ?
- app `Back-end em NodeJS contendo a API da lista de contatos`
    - express `Framework NodeJS`
    - sequelize `ORM para acessar o banco de dados`
    - sequelize-cli
- front `Front-end em Angular`

## Criação da base do projeto
```bash
# Criar o projeto do node utilizando o framework express
express --hbs --view hbs app
cd app
npm install
npm install sequelize --save
npm install mysql2 --save
# Instalar o sequelize-cli globalmente se já näo tiver
npm install sequelize-cli -g
# Instalação do Angular Material
npm install --save @angular/material @angular/cdk @angular/animations

# Iniciar o node para dev
nodemon bin/www

# Iniciar os containers do docker
docker-compose up -d

# Criar a estrutura inicial do sequelize no projeto
sequelize init 

# Configurar os dados de acesso ao banco no arquivo
config/config.json
```

## Estrutura do bando de dados (models e migration)
```bash
# Criar os models e arquivos de migrate para cada tabela
sequelize model:generate --name people --attributes name:string,company:string,relationship:string
sequelize model:generate --name contacts --attributes type:string,contact:string

# Sincronizar todos os arquivos de models com o banco de dados (criar tabelas no banco)
sequelize db:migrate
```

## Dados do banco (seeders)
```bash
# Criar um arquivo de seeder para alimentar o banco
sequelize seed:generate --name people
sequelize seed:generate --name contacts

# Popular o banco com os dados com os dados dos seeders
sequelize db:seed:all
```

## Front-end
```bash
# Criar o projeto em Angular para o front
ng new front --style=scss --skip-tests --skip-git

# Criando um modulo para as rotas
ng g m app-routing --flat --spec=false

# Criando os componentes root
ng g c contact-list --spec=false
ng g c contact-detail --spec=false

# Criando os componentes filhos
ng g c contact-list/header --spec=false
ng g c contact-list/list-item --spec=false
ng g c contact-detail/header-photo --spec=false
ng g c contact-detail/buttons-bar --spec=false --module=app

# Criando os servicos
ng g s contacts --spec=false
```