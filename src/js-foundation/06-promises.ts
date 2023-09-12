const { httpClient } = require('../plugins');

export const getPokemonById = async( id: string|number ):Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
  
    const pokemon = await httpClient.get( url );
  
    // const resp = await fetch( url );
    // const pokemon = await resp.json();
  
  
    // throw new Error('Pokemon no existe');
    
    return pokemon.name;
    
    // return fetch( url )
    //   .then( ( resp ) => resp.json())
    //   // .then( () => { throw new Error('Pokemon no existe') })
    //   .then( ( pokemon ) => pokemon.name );
  } catch (error) {
    throw `Pokemon no existen con el id ${ id }`;
  }

}


