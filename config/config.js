import expressHbs from "express-handlebars";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Error404 } from "../controllers/404Controller.js";
import peliculasRouter from "../routes/peliculasRouter.js";
import administracionRouter from "../routes/administracionRouter.js";
//const peliculas = require('../routes/peliculasRouter').default;

export const config = (app) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.engine('hbs', expressHbs.engine({ layoutsDir: `${__dirname}/../views/layout`, defaultLayout: 'main.hbs', extname: "hbs" }));

    app.set('view engine', 'hbs');
    app.set('views', `${__dirname}/../views`);
    app.use(express.urlencoded({ extended: false }));
    console.log();
    app.use("/public", express.static(`${__dirname}/../public`));

    app.use(peliculasRouter);
    app.use('/admin', administracionRouter);
    app.use("/", Error404);

}