const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => { // muestra el valor de la llave foranea
     conn.query('SELECT* FROM solicitud s  INNER JOIN proveedor p ON p.proveedor_id  = s.id_proveedor ', (err, Solicitud) => {
       if (err) {
        res.json(err);
       }
       res.json(Solicitud); // Responde con un JSON desde la BD
      });
    });
  }; 

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO solicitud set ?', data, (err, Solicitud) => {
        console.log(Solicitud)
        if(err){res.json(err)}
        res.json(Solicitud);
      });
    });
  };

  controller.read = (req, res) => {
    const { solicitud_id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM solicitud WHERE solicitud_id = ?", [solicitud_id], (err, Solicitud) => {
        console.log(Solicitud);
        if(err){res.json(err)}
        res.json(Solicitud);
      });
    });
  };

  controller.delete = (req, res) => {
    const { solicitud_id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM solicitud WHERE solicitud_id = ?', [solicitud_id], (err, Solicitud) => {
        console.log(Solicitud);
        if(err){res.json(err)}
        res.json(Solicitud);
      });
    });
  };

  controller.update = (req, res) => {
    const { solicitud_id } = req.params;
    const newSolicitud = req.body;
    req.getConnection((err, conn) => {
    conn.query('UPDATE solicitud set ? where solicitud_id = ?', [newSolicitud, solicitud_id], (err, Solicitud) => {
      console.log(Solicitud);
      if(err){res.json(err)}
      res.json(Solicitud);
    });
    });
  };


  module.exports = controller;