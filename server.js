const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect("mongodb+srv://karenjimenez:KarenJimenez@clusterretonodejs.twnto.mongodb.net/RetoNodejsDB?retryWrites=true&w=majority")