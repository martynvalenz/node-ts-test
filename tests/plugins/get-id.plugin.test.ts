import { getUUID } from '../../src/plugins/get-id.plugin';

describe('plugins/get-id.plugin', () => {
  test('getUUID should return a string', () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89a-b][a-f0-9]{3}-[a-f0-9]{12}$/i);
    expect(uuid.length).toBe(36);
  });
});