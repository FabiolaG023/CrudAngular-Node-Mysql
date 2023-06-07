const router = require('express').Router();


const proveedorController = require('../controllers/proveedorController');
const solicitudController = require('../controllers/solicitudController');
const estadoController = require('../controllers/estadoController');


//router.get('/api', function(req,res) {res.send("Ruta de Inicio! Node en funcion")}); 

//-----Controles de Solicitud------
router.get('/', solicitudController.list);
router.post('/add-solicitud', solicitudController.save);
router.get('/read-solicitud/:solicitud_id', solicitudController.read);
router.delete('/delete-solicitud/:solicitud_id', solicitudController.delete);
router.put('/update-solicitud/:solicitud_id', solicitudController.update);

/// ------Controles de Proveedor-------
router.get('/proveedor', proveedorController.list);
router.post('/add-proveedor', proveedorController.save);
router.get('/read-proveedor/:proveedor_id', proveedorController.read);
router.delete('/delete-proveedor/:proveedor_id', proveedorController.delete);
router.put('/update-proveedor/:proveedor_id', proveedorController.update);

//----Control de estado----
router.get('/estado', estadoController.list);




module.exports = router;

