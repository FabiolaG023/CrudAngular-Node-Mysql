const controller = {};


controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM proveedor', (err, Proveedor) => {
     if (err) {
      res.json(err);
     }
     res.json(Proveedor); // Responde con un JSON desde la BD
    });
  });
}; 


controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO proveedor set ?', data, (err, Proveedor) => {
      console.log(Proveedor)
      res.json(Proveedor);
    })
  })
};

  // un solicitud
controller.read = (req, res) => {
  const { proveedor_id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM proveedor WHERE proveedor_id = ?", [proveedor_id], (err, Proveedor) => {
      console.log(Proveedor);
      res.json(Proveedor);
    });
  });
};

controller.update = (req, res) => {
  const { proveedor_id } = req.params;
  const newProveedor = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE proveedor set ? where proveedor_id = ?', [newProveedor, proveedor_id], (err, Proveedor) => {
    console.log(Proveedor);
    res.json(Proveedor);
  });
  });
};

controller.delete = (req, res) => {
  const { proveedor_id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM proveedor WHERE proveedor_id = ?', [proveedor_id], (err, Proveedor) => {
      console.log(Proveedor);
      res.json(Proveedor);
    });
  });
}

module.exports = controller;
