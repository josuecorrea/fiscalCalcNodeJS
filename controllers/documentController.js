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
    console.log(req.file);

    res.send('Documento recebido!')
}