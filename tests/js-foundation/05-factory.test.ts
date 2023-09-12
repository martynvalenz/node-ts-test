import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory', () => {
  test('buildMakePerson should return a function', () => {
    // Arrange
    const getUUID = () => '123';
    const getAge = () => 35;
    // Act
    const makePerson = buildMakePerson({ getUUID, getAge });
    // Assert
    expect(typeof makePerson).toBe('function');
  });

  test('makePerson should return an object', () => {
    // Arrange
    const getUUID = () => '123';
    const getAge = () => 35;
    const makePerson = buildMakePerson({ getUUID, getAge });
    // Act
    const person = makePerson({ name: 'John', birthdate: '1985-10-21' });
    // Assert
    expect(person).toEqual({
      id: '123',
      name: 'John',
      birthdate: '1985-10-21',
      age: 35,
    });
  });
});