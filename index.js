const express = require("express");
const cors = require("cors");
const app = express();

const gatoRoutes = require("./routes/gato")
const animalRoutes = require("./routes/animal")
const fichaRoutes = require("./routes/ficha")
const veterinarioRoutes = require("./routes/veterinario")

require("dotenv").config()

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main(){
    await mongoose.connect(process.env.MONGO_CNN)
    console.log("Database connected");
}

main().catch((err)=> console.log(err))

app.use(cors());
app.use(express.json())


app.use("/gatos", gatoRoutes);
app.use("/animales", animalRoutes);
app.use("/fichas", fichaRoutes)
app.use("/veterinarios", veterinarioRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Servidor en funcionamiento en el puerto "+process.env.PORT)
})