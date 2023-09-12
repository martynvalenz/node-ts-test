import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
  test('getPokemonById should return a promise', async() => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  });

  test('getPokemonById should return error', async() => {
    const pokemonId = 1000000;
    
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon no existen con el id ${ pokemonId }`);
    }
  });
});