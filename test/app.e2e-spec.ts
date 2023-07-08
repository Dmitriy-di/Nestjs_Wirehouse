import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

let access_token = '';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/register (POST)', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        name_organisation: 'test_name',
        password: 'test_pass',
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name_organisation: expect.any(String),
            password: expect.any(String),
          }),
        );
      });
  });

  //! Из-за того что после создания нового собственника в бд в предыдущем тесте его поля с именем и
  //! паролем затираются к моменту выполнения теста ниже, то этот тест завершится неудачей
  it('/auth/login (GET)', () => {
    return request(app.getHttpServer())
      .get('/auth/login')
      .send({
        name_organisation: 'test_name',
        password: 'test_pass',
      })
      .expect(200)
      .expect((res) => {
        access_token = res.body.access_token;
        expect(res.body).toEqual(
          expect.objectContaining({
            access_token: expect.any(String),
          }),
        );
      });
  });

  it('/posts (PATCH)', () => {
    return request(app.getHttpServer())
      .patch('/posts/1')
      .set('Authorization', 'Bearer ' + access_token)
      .send({
        name_post: '123',
        salary: 123,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            salary: expect.any(Number),
            name_post: expect.any(String),
          }),
        );
      });
  });

  it('/wirehouse-owners (delete)', () => {
    return request(app.getHttpServer())
      .delete('/wirehouse-owners/1')
      .set('Authorization', 'Bearer ' + access_token)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            raw: expect.any(Array),
            affected: expect.any(Number),
          }),
        );
      });
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
