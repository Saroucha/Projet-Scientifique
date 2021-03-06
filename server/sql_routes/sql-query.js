"use strict"
var Client = require('mariasql');
require('dotenv').config();

var init = function(){
    //console.log(process.env);
    
    var c = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        db: process.env.DB_NAME,
        port: process.env.DB_PORT
    });
    return c;
}
exports.getAllUser = function (callback){
    var c = init();
    
    var query = 'SELECT * FROM users;';
    //console.log(query);
    c.query(query, function(err, res)
    {
        if (err){
            c.end();
            callback(err, null);
        }
        else{
            c.end();
            callback(null, res);
        }
    });
}
exports.getUserInfo = function (id, callback){
    var c = init();
    
    var query = 'SELECT * FROM users WHERE id_user=\''+id+'\';';
    //console.log(query);
    c.query(query, function(err, res)
    {
        if (err){
            c.end();
            callback(err, null);
        }
        else{
            c.end();
            callback(null, res);
        }
    });
}
exports.getPillInfo = function (id, callback){
    var c = init();
    
    var query = 'SELECT * FROM pilluliers WHERE id_pillulier=\''+id+'\';';
    //console.log(query);
    c.query(query, function(err, res)
    {
        if (err){
            c.end();
            callback(err, null);
        }
        else{
            c.end();
            callback(null, res);
        }
    });
}