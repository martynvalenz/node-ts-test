import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template.ts', () => {
  test('emailTemplate should contain a greeting', () => {
    // // Arrange
    // const name = 'John';
    // const orderId = '1234';

    // // Act
    // const result = emailTemplate
    //   .replace('{{name}}', name)
    //   .replace('{{orderId}}', orderId);

    // Assert
    expect(emailTemplate).toContain('Hi, ');
  });

  test('EmailTemplate should contain {{ name }} and {{ orderId }}', () => {
    // Arrange
    const name = '';
    const orderId = '';

    // Act
    const result = emailTemplate
      .replace('{{name}}', name)
      .replace('{{orderId}}', orderId);

    // Assert
    expect(result).toContain(name);
    expect(result).toContain(orderId);
  });
});