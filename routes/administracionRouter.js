import express from "express";
import { AgregarPeliculas, editarForm, editPeli, eliminar, FormView } from "../controllers/AdministracionController.js";
import { PeliculasIndex } from "../controllers/PeliculasController.js";

const administracionRouter = express.Router();

administracionRouter.get('/', PeliculasIndex);
administracionRouter.get('/create', FormView);
administracionRouter.post('/post-peliculas', AgregarPeliculas);
administracionRouter.post('/edit-peliculas', editPeli);
administracionRouter.get('/delete/:id', eliminar);
administracionRouter.get('/edit/:id', editarForm);
export default administracionRouter;