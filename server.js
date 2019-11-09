const express = require('express'); // importando o express
const cors = require('cors');
const mongoose = require('mongoose') // importando o mongoose
const requireDir = require('require-dir');

// iniciando o App
const app = express(); //executando a funcao express

// habilita, permite que a app receba dados no formato json
app.use(express.json());

// app.use(cors()) - assim permite o acesso de qualquer dominio, 
// mas pode ser configurado outros acesso e configuração de segurança
app.use(cors());


// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeexpressapi', {
    // os parametros abaixo evita a exibição de warn
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    
});

requireDir('./src/models'); // habilita para app o acesso e leitura de todos os arquivos desse diretorio

/**  Testando se o mongoose esta funcionando
  const Product = mongoose.model('Product'); // instanciando a classe Product
   // req - requisicao,  res - resposta,
app.get('/', (req, res) => {
   
     Product.create({
        title: "React Native",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"
      });
   
      res.send('Hello Mundo');
   
   });
*/

// "use" permite receber todos os tipos de requisição (PUT, DELETE, POST, GET) a partir da rota /api
app.use("/api", require("./src/routes"));




app.listen(3001);