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

exports.deleteberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('DELETE from tb_taman where id_taman = ?',(id),
        function(error,rows,fields){
            if(error){
                connection.log(error);
            }else{
                response.ok("Data Berhasil Di Hapus", res)
            }
        });
};

//Menambahkan Data Taman
exports.tambahtaman = function(req,res){
    
    var nama = req.body.nama;
    var alamat =req.body.alamat;

    connection.query('INSERT INTO tb_taman (nama,alamat) VALUES (?,?)',[nama,alamat],
    function (error, rows,fileds){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data",res)
        }
    });

};

exports.updatetaman = function(req,res){
    var id = req.body.id_taman;
    var nama = req.body.nama;
    var alamat =req.body.alamat;

    connection.query('UPDATE tb_taman SET nama=?, alamat=? where id_taman= ?' ,[id,nama,alamat],
    function (error, rows,fileds){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Mengupdate Data",res)
        }
    });

};