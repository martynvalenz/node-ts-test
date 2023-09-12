import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin', () => {
  test('getAge should return the age of the person', () => {
    const birthdate = '1987-01-19';
    const age = getAge(birthdate);
    expect(typeof age).toBe('number');
  });

  test('getAge should return current age', () => {
    const birthdate = '1987-01-19';
    const age = getAge(birthdate);
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test('getAge should return cero years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = '1995-01-19';
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalledWith();
  });
});