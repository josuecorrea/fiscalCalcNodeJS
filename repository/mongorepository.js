var MongoClient = require('mongodb').MongoClient;
var co = require('co');
var assert = require('assert');
var config = require('../config/config')

 var inserir = function(data, collection, callback){
    co(function*() {
        var db = yield MongoClient.connect(config.connectionString);
        var r = yield db.collection(collection).insertOne(data);
        assert.equal(1, r.insertedCount);           
        db.close();

    }).catch(function(err) {
             console.log(err.stack);
    });    
 };  

 var alldocs = function(collection, callback){
    co(function*() {
        var db = yield MongoClient.connect(config.connectionString);
        var r = yield db.collection(collection).find({}).toArray(function(err, docs){
            if(err){
            }
           db.close();                
            
        });
    }).catch(function(err) {
          console.log(err.stack);
    });    
 };  

  module.exports = {
      inserir : inserir,
      alldocs : alldocs
  };