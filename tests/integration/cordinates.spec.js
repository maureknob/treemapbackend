const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('coordinates', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
       await connection.migrate.latest();
    });

    afterAll(() => {
        connection.destroy();
    });

    it('should be able to create a new coordinate', async ()=> {
        const response = await request(app).post('/coordinates').send(
            {
                lat: "-29.165254979092634",
                lng: "-51.1752330237732"
            });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});