import * as request from 'supertest';
import { expect } from 'chai';
import app from './app';

app.listen(1234);

describe('express-safe-async', () => {
  let req: request.SuperTest<request.Test>;

  // mock http requset of app
  before(() => {
    req = request(app);
  });

  describe('@AsycHandler', () => {
    it('Route Handler having only req and res', async () => {
      const result = await req.get('/req/res').expect(200);
      expect(result.text).equals('onlyReqAndRes');
    });

    it('Route Handler having only req and res with an error', async () => {
      const result = await req.get('/req/res/error').expect(500);
      expect(result.text).contains('onlyReqAndResWithError');
    });

    it('Route Handler including next function', async () => {
      const result = await req.get('/req/res/next').expect(200);
      expect(result.text).equals('onlyReqAndRes');
    });

    it('Route Handler including next function with an error', async () => {
      const result = await req.get('/req/res/next/error').expect(500);
      expect(result.text).contains('includingNextWithError');
    });
  });
});
