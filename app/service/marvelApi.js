'use strict';
const MARVEL_URL  ='http://gateway.marvel.com/v1/public'
const crypto      = require('crypto');
const queryString = require('query-string');
const config      = require('../../config');
const fetch       = require('node-fetch');


function findAllComics(){
    let qs = marvelQuery();
    let url = MARVEL_URL+'/comics?orderBy=title&limit=100&' + qs;
    console.log("fetch: "+url);
    return runFetch(url);
}

function findComicById(id){
    let qs = marvelQuery();
    let url = MARVEL_URL+'/comics/'+id+'?' + qs;
    console.log("fetch: "+url);
    return runFetch(url);
}

function runFetch(url){
    return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.log(res);
      }
      return res.json();
    })
    .then((body) => {
        return body.data;
    });
}

function timestamp() {
    return parseInt(Date.now() / 1000, 10);
};

function createHash(){
    console.log("createHash", config);
    let content = timestamp() + config.MARVEL_PRIVATE_KEY + config.MARVEL_PUBLIC_KEY;
    let hash = crypto.createHash('md5').update(content).digest('hex');  
    return hash;
};

function marvelQuery(){
    return  queryString.stringify({
        ts: timestamp(),
        apikey: config.MARVEL_PUBLIC_KEY,
        hash: createHash()
      });
};

module.exports={findAllComics, findComicById}