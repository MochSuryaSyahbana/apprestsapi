'use trict';

module.exports = function(app){
    var jsonku =  require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuataman);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/delete/:id')
        .get(jsonku.deleteberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahtaman);

    app.route('/update/:id')
        .put(jsonku.updatetaman);


    }