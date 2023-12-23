import { generoPeliculas, menuItem } from "../helpers/menuHelpers.js"
import { filtrarPorGenero, getAllPeliculas } from "../helpers/peliculasServices.js"

const peliculas = getAllPeliculas();

export const PeliculasIndex = (request, response, next) => {
    response.render('peliculas/index.hbs', { title: 'Inicio - Peliculas', menu: menuItem, genero: generoPeliculas, haspeli: peliculas.length > 0, pelis: peliculas })
}

export const peliculasFiltradas = (request, response, next) => {

    const data = filtrarPorGenero(request.params.genero);

    response.render('peliculas/index.hbs', { title: `${request.params.genero} - Peliculas`, menu: menuItem, genero: generoPeliculas, haspeli: data.length > 0, pelis: data })
}