import connection from '../src/lib/database/connection';

describe('Database connection test', () => {

    describe('Success connection', () => {
        beforeAll((done) => {
            done();
        });

        test('Should response with Database Synced', (done) => {
            const DATABASE_CONNECTION = process.env.MONGODB_URI_V1;
            connection(DATABASE_CONNECTION)
                .then(data => {
                    expect(data).toEqual('Database Synced');
                    done();
                });
        });

        afterAll((done) => {
            done();
        })
    })

    describe('Fail connection', () => {
        beforeAll((done) => {
            done();
        });

        test('Should response with Database Error', (done) => {
            const INVALID_DATABASE_CONNECTION = process.env.MONGODB_URI_V2;
            connection(INVALID_DATABASE_CONNECTION)
                .then(data => {
                    expect(data).toEqual('Database Error');
                    done();
                });
        });

        afterAll((done) => {
            done();
        })
    })
})