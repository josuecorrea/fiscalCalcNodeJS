var MongoClient = require('mongodb').MongoClient;
var co = require('co');
var assert = require('assert');

 var inserir = function(data, callback){
    co(function*() {
        var db = yield MongoClient.connect('mongodb://localhost:27017/calcfiscal');
        var r = yield db.collection('documents').insertOne(data);
        assert.equal(1, r.insertedCount);           
        db.close();

    }).catch(function(err) {
             console.log(err.stack);
    });    
 };  

  module.exports = {
      inserir : inserir
  };