import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
  test('getUserById should return an error if user does not exist', ( done ) => {
    // Arrange
    const id = 10;
    // Act
    getUserById( id, (err, user) =>{
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });
 
  test('getUserById should return John Doe', ( done ) => {
    // Arrange
    const id = 1;
    // Act
    getUserById( id, (err, user) =>{
      expect(err).toBe(undefined);
      expect(user).toEqual({ id: 1, name: 'John Doe' });
      done();
    });
  });
});