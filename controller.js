'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res)
};

//Memanggil semua data Taman
exports.tampilsemuataman = function(req,res){
    connection.query('SELECT * from tb_taman ',function(error,rows,fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampillkan semua data taman berdasarkan id_taman

exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * from tb_taman where id_taman = ?',(id),
        function(error,rows,fields){
            if(error){
                connection.log(error);
            }else{
                response.ok(rows, res)
            }
        });
};
