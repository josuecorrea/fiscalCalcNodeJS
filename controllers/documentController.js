var fs = require('fs'),
xml2js = require('xml2js');
var co = require('co');
var repository = require('../repository/mongorepository');

var parser = new xml2js.Parser(
    {
        mergeAttrs : true,
        childkey: true,
        explicitArray: false
    }
);

exports.newdocument = function(req, res){
    //var document = req.body.document;

    console.log('Chegou no controller');
    //parser.parseString(document, function (err, result) {
        console.log(req.files.document);

    //   repository.inserir(result.nfeProc.NFe.infNFe, function(err, callback){
    //       if(err){
                
    //       }
    //   });
        
    //});
    
    console.log('saiu do controller');

    console.log(req);

    res.status(200).json({
        mensagem: 'O documento foi recebido com sucesso'        
    });
  
}