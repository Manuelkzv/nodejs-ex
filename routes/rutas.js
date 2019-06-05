"use strict";

module.exports = (app) =>{

    //Test
    app.get('/testRuta', sfunction (req, res) {
      res.send('Ruta lista');
    });

};
