import { generoPeliculas, menuItem } from "../helpers/menuHelpers.js"
import { addPeliculas, EditarPeliculas, EliminarPeliculas, getAllPeliculas } from "../helpers/peliculasServices.js"
import { peliculasModels } from "../models/peliculasModels.js"

const Allpeliculas = getAllPeliculas();


export const FormView = (request, response, next) => {
    response.render('admin/add.hbs', { title: 'Agregar - Peliculas', menu: menuItem, genero: generoPeliculas })
}

export const AgregarPeliculas = (request, response, next) => {

    const Peliculas = peliculasModels;
    console.log(request.body)
    Peliculas.id = Math.random();
    Peliculas.Genero = request.body.genero;
    Peliculas.Status = true;
    Peliculas.nombre = request.body.nombre;
    Peliculas.descripcion = request.body.descripcion;
    Peliculas.colorGenero = request.body.colorgenero;


    addPeliculas(Peliculas);

    response.redirect('/');
}

export const eliminar = (request, response, next) => {
    EliminarPeliculas(request.params.id);

    response.redirect('/');
}

export const editarForm = (request, response, next) => {
    let data;
    Allpeliculas.filter((x) => x.id == request.params.id).map(r => data = r)
    response.render('admin/edit.hbs', { title: 'Editar - Peliculas', menu: menuItem, genero: generoPeliculas, peli: data })
}

export const editPeli = (request, response, next) => {
    const Peliculas = peliculasModels;

    Peliculas.id = request.body.id;
    Peliculas.Genero = request.body.genero;
    Peliculas.Status = request.body.status == 'false' ? false : true;
    Peliculas.nombre = request.body.nombre;
    Peliculas.descripcion = request.body.descripcion;
    Peliculas.colorGenero = request.body.colorgenero;

    EditarPeliculas(Peliculas.id, Peliculas)

    response.redirect('/');
}