'use trict';

module.exports = function(app){
    var jsonku =  require('./controller');

    app.router('/')
        .get(jsonku.index);
}