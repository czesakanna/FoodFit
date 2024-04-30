

var express = require("express");
const mongoose = require('mongoose');
var cors = require("cors");
const multer = require("multer");
const { response } = require("express");
const bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());

const CONNECTION_STRING="";

const DATABASENAME="parameters";
const PORT = 8080
let db;

app.listen(PORT, ()=>{
    console.log(`Server listen on port ${PORT}`)
    mongoose.connect(CONNECTION_STRING, {dbName: DATABASENAME});

    db = mongoose.connection;
    db.once("open", (_) => {
      console.log(`Database connected: ${CONNECTION_STRING}`);
    });
   
    db.on("error", (err) => {
      console.error(`connection error: ${err}`);
    });

    // app.post('/calculator/caloricDemand', (request, response)=>{
    //     const {caloricDemand} = request.body;
    //     console.log("zapotrzebowanie: ", caloricDemand);
    // })

    app.post('/calculator/caloricDemand', multer().none(),(request, response)=>{
        db.collection("parametersCollection").count({},function(error,numOfDocs){
            db.collection("parametersCollection").insertOne({
                user_id: (numOfDocs+1).toString(), //tu zamiast inkrementacji powinniśmy pobierać id aktualnie zalogowanego uzytkownika
                caloric_demand:request.body.caloricDemand
            });
            response.json("added succesfully")
        })
    })
})