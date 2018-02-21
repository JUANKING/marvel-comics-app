'use strict';

const marvelApi = require('../service/marvelApi');

/**
 * Función para buscar todos los comics
 *
 * @param req petición
 * @param res respuesta
 */
function findAllComics(req, res) {
    marvelApi.findAllComics()
    .then((data)=>{
        console.log("Marvel data comics", data);
        data.results=data.results.map(comic => {
            let miniComic={
                id:comic.id,
                title: comic.title,
                img: comic.thumbnail.path +'/standard_medium.jpg'

            }
            return miniComic;
        })
        res.status(200).send(data.results);
    })
    .catch((error)=> {    
        console.log(error);
        res.status(500).send();
    });
}

/**
 * Función para buscar el comic por id
 *
 * @param req petición
 * @param res respuesta
 */
function findComicById(req, res) {
    const {id} = req.params;
    marvelApi.findComicById(id)
    .then((data)=>{
        console.log("Marvel data comics", data);
        res.status(200).send(data.results[0]);
    })
    .catch((error)=> {    
        console.log(error);
        res.status(500).send();
    });
}

module.exports={findAllComics, findComicById}