**********************************************
           NODE COM EXPRESS - MONGODB
**********************************************
Comandos utilizados:

npm init - y - Esse comando cria o arquivo packege.json que guarda as dependencias do projeto
npm install express - Instalando o microframework express, para criar o servidor da aplicacao e lidar com rotas e views, ele não cria uma estrutura de pastas de projeto
node server.js - Executando servidor express criado no arquivo server.js
npm install -D nodemon  - Instalação do nodemon (reinicia automaticamente o servidor apos uma alteração no codigo) como -D dependencia de desenvolvimento  
npm install mongoose - ORM de BD não relacional (NoSql) para o mongo, transforma tabelas de BD em objetos no javascritp
npm install mongoose-paginate - Plugin para paginação do mongodb and mongoose
npm install cors - permite o acesso da aplicação apartir de varios dominios alem do local 

npm install require-dir - Biblioteca utilizada para fazer automaticamente o require para todos os arquivos em um diretorio bastando informar somente o diretorio

- Após instalar o nodemon deve-se atualizar o package.json
adicionando no objeto  script o codigo abaixo: 
"dev": "nodemon server.js"

- Para subir o servidor digitar no prompt 
npm run server.js

- Toda a estrutura de pasta do projeto foi criada manualmente
- MongoDD instalado localmente