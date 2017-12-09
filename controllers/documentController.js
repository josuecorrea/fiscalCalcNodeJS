var fs = require('fs'),
xml2js = require('xml2js');
var co = require('co');
var repository = require('../repository/mongorepository');
var config = require('../config/config')

var parser = new xml2js.Parser(
    {
        mergeAttrs : true,
        childkey: true,
        explicitArray: false
    }
);

exports.newdocument = function(req, res, next){
    console.log("Arquivo recebido: " + req.file.originalname);

    fs.readFile(config.diretorioUpload + req.file.originalname, function(err, data) {
        parser.parseString(data, function (err, result) {
          repository.inserir(result.nfeProc.NFe.infNFe, 'documents', function(err, callback){
              if(err){
                res.status(500).json({status:"Deu alguma coisa errada!"})
              }
          });           
        });
    });

    res.status(200).json({status:"Documento recebido!"})
}