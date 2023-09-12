"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const { http } = require('../plugins');
const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    // const resp = await fetch( url );
    // const pokemon = await resp.json();
    // throw new Error('Pokemon no existe');
    return pokemon.name;
    // return fetch( url )
    //   .then( ( resp ) => resp.json())
    //   // .then( () => { throw new Error('Pokemon no existe') })
    //   .then( ( pokemon ) => pokemon.name );
};
exports.getPokemonById = getPokemonById;
