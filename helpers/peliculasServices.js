import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export const getAllPeliculas = () => {
    let data;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let rawData = fs.readFileSync(`${__dirname}/../database/peliculas.json`);

    data = JSON.parse(rawData);

    return data;
}

export const addPeliculas = (pelicula) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let data = getAllPeliculas();
    data.push(pelicula);

    fs.writeFileSync(`${__dirname}/../database/peliculas.json`, JSON.stringify(data));
}

export const EliminarPeliculas = (id) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let data = getAllPeliculas();
    let newData = data.filter((f) => f.id != id);

    fs.writeFileSync(`${__dirname}/../database/peliculas.json`, JSON.stringify(newData));

}


export const EditarPeliculas = (id, pelicula) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let data = getAllPeliculas();
    let newData = data.filter((f) => f.id == id);
    newData[0] = pelicula;
    const filtrar = data.filter((f) => f.id != id);
    filtrar.push(newData[0]);

    fs.writeFileSync(`${__dirname}/../database/peliculas.json`, JSON.stringify(filtrar));

}


export const filtrarPorGenero = (genero) => {
    let data = getAllPeliculas();


    const peliculas = data.filter(f => f.Genero === genero);

    return peliculas;

}