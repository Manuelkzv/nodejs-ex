"use strict";

module.exports = (app) =>{

    //Test
    app.get('/testRuta', function (req, res) {
      res.send('Ruta lista');
    });

};
