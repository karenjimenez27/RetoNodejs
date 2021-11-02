const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();


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