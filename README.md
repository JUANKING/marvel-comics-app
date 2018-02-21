# ReactJs-Nodejs Marvel API

Projecto para hacer uso de la API de Marvel.

## Requirements

1. Git ([git-linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 
or [git-windows](https://git-for-windows.github.io/)).
1. [Node.js](https://nodejs.org/en/) (latest stable version v6+).
1. [Yarn](https://yarnpkg.com/en/docs/cli/) installed as a global package.
1. Marvel API public key. Go to [Marvel Developer site](https://developer.marvel.com) and create your account.
Find your public key [https://developer.marvel.com/account](https://developer.marvel.com/account).

## Installation

1. Clone el proyecto
1. Instala las dependecias con el comando `yarn`
1. Crea un nuevo fichetro `.env` para las variables de entorno. 
`EXPORT MARVEL_PUBLIC_KEY=PUBLIC_KEY`
`EXPORT MARVEL_PRIVATE_KEY=PRIVATE_KEY`

## Run

Arranca la aplicación con el comando `npm run dev`.

## Authenticate

La aplicación simula la la autenticación con JWT. Al arrancar la pantalla de inicio el front realiza una llamada
al endpoint `/authenticate` el cual le otorga un token acceso.