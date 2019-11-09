// importa o mongoose
const mongoose = require('mongoose');

// obtem o modelo de objeto a ser recuperado do BD (schema), definido e exportado em Product.js 
const Product = mongoose.model('Product');

// exportando  objeto pra a app, com varias funções que podem ser
// ser acessadas pela aplicação: funcões index, store,
module.exports = {

    //  async - funções com async em sua assinatura, sinaliza que chamadas de 
    //  outras funções dentro da mesma, usando await - devem ser executadas primeiro 
    //  para que depois ela siga seu fluxo de execução.
    //  await - para o fluxo da funcao principal, executa a função chamada e 
    //  e aguarda seu retorno, para depois seguir deixar o fluxo da função principal seguir

    // lista todos os produtos do banco
    async index(req, res){

        //  recupera da requisicao um parametro do tipo get (que é enviado na url apos o simbolo ?)
        //  ex:  ?page=2 e armazena a variavel page
        const { page } = req.query; 
        
        // Busca todos os produtos do BD
        // await - pausa a execução da funcao index(), até o BD retornar o resultado da busca, dai só então executa a proxima linha da funcao
        // busca sem paginação
        // const products = await Product.find();

        // busca com paginação
        // ({} - clausulas where caso exista 
        // {page, limit: 10}) page - numero da pagina, limit - quantidade elementos por da pagina
        const products = await Product.paginate({}, { page , limit: 10});

        // aguarda o retorno do BD e apos envia o json com resposta para o browser 
        return res.json(products);
    },

    // exibe um produto por id
    async show(req, res) {
        // obtem dos parametros enviados na requisicao o id do produto
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //cria um novo produto
    async store(req, res) {
        // cria na BD um produto, com as informações enviadas no corpo da requisicao (req.req)
        const product = await Product.create(req.body);

        // e como resposta ao cliente, retorna o produto que acabou de ser criado no formato json
        return res.json(product);
    },

    // altera um objeto ja criado
    async update(req, res){
        // req.params.id - busca objeto cujo id foi passado como parametro
        // req.body - e usa os valores enviado no corpo (body), para alterar esse objeto
        // new: true - retorna esse objeto apos as alterações serem aplicadas, caso não seja
        //             passado esse parametro retorno o objeto antes das alterações
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { 
            new: true
        });

        return res.json(product);
    },   
      

    // deleta objeto ja criado da base de dados
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
        
    }


}