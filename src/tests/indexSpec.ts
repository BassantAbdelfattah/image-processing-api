import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets /', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
  it('gets /api/images?filename=fjord&width=200&height=200 ', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=20'
    );
    expect(response.status).toBe(200);
  });

  it('gets /api/images?filename=fjord ', async () => {
    const response = await request.get('/api/images?filename');
    expect(response.status).toBe(400);
  });

  it('gets /api/images', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });
  it('gets /api/images?filename=fjord&width=200&height=-200', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=-200'
    );
    expect(response.status).toBe(400);
  });
});
