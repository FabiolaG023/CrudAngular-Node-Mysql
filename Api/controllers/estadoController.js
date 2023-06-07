
const controller = {};
// 1 para activo y 2 para pendiente
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
    conn.query('SELECT * FROM estado', (err, Estado) => {       if (err) {
        res.json(err);
       }
       res.json(Estado); // Responde con un JSON desde la BD
      });
    });
  }; 


  module.exports = controller;