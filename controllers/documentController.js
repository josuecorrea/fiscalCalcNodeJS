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

exports.newdocument = function(req, res, next){
    console.log("Arquivo recebido: " + req.file.originalname);

    var diretorio = "/tmp/my-uploads/";

    fs.readFile(diretorio + req.file.originalname, function(err, data) {
        parser.parseString(data, function (err, result) {
          repository.inserir(result.nfeProc.NFe.infNFe, function(err, callback){
              if(err){
                res.send('Deu erro!')
              }
          });           
        });
    });

    res.send('Documento recebido!')
}