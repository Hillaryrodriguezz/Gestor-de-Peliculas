import express from "express";
import { peliculasFiltradas, PeliculasIndex } from "../controllers/PeliculasController.js";

const peliculasRouter = express.Router();

peliculasRouter.get('/', PeliculasIndex);


peliculasRouter.get('/categoria/:genero', peliculasFiltradas);

export default peliculasRouter;