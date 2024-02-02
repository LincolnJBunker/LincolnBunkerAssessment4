import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

// import handlerFunctions from "./controller.js"
//Routes

ViteExpress.listen(app, 3564, () => console.log(`Messi está por jugar en la el lugar de http://localhost:3564`))