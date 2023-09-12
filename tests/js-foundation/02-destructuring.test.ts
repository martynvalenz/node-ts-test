import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {
  test('characters should contain Flash, Superman', () => {
    // Assert
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  test('Firts character should be Flash and then Supiman', () => {
    const [ flash, superman ] = characters;
    // Assert
    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  });
});