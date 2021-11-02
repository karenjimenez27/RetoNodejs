const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const UsuarioSchema = require("./Modelos/Usuario.js");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect("mongodb+srv://karenjimenez:KarenJimenez@clusterretonodejs.twnto.mongodb.net/RetoNodejsDB?retryWrites=true&w=majority")

//OperacionesCRUD

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

router.get('/',(req, res) => {
    res.send("Este es el inicio de mi primera API");
});

//Insertar
router.post('/Usuario', (req, res) =>{
    let nuevoUsuario = new UsuarioSchema({
        tipoDocumento: req.body.tipoDocumento,
        documentoId: req.body.documentoId,
        nombresUsuario: req.body.nombres,
        apellidosUsuario: req.body.apellidos,
        direccionUsuario: req.body.direccion,
        correoUsuario: req.body.correo,
        telefonoFijoUsuario: req.body.telefono,
        celularUsuario: req.body.celular,
        enlaceSitioWeb: req.body.enlaceSitioWeb,
        descripcionPerfil: req.body.descripcionPerfil

    });
    nuevoUsuario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Usuario Almacenado")

    })
})

//Consultar todo (método get)

router.get('/Usuario', (req, res) => {
    UsuarioSchema.find(function(err, datos){
        if(err){
            console.log("Error en la lectura de datos");        
        }else{
            res.send(datos);
        }
    })
})