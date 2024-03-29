import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";


const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

import handlerFunctions from "./controller.js"
// //Routes
app.get('/medications', handlerFunctions.getMedications);
app.post('/medication/add', handlerFunctions.addMedication);
app.delete('/medication/delete/:id', handlerFunctions.deleteMedication);
app.put('/medication/update/:id', handlerFunctions.updateMedication);

ViteExpress.listen(app, 3564, () => console.log(`Messi está por jugar en la el lugar de http://localhost:3564`))