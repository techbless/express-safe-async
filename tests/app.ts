import * as express from 'express';
import AsyncHandler from '../lib';

class TestController {
  @AsyncHandler
  public async onlyReqAndRes(_req: express.Request, res: express.Response) {
    res.status(200).send('onlyReqAndRes');
  }

  @AsyncHandler
  public async onlyReqAndResWithError(_req: express.Request, _res: express.Response) {
    throw Error('onlyReqAndResWithError');
  }

  @AsyncHandler
  public async includingNext(_req: express.Request, res: express.Response, _next: express.NextFunction) {
    res.status(200).send('onlyReqAndRes');
  }

  @AsyncHandler
  public async includingNextWithError(_req: express.Request, _res: express.Response, _next: express.NextFunction) {
    throw Error('includingNextWithError');
  }
}

const app = express();
const testController = new TestController();

app.get('/req/res', testController.onlyReqAndRes);
app.get('/req/res/error', testController.onlyReqAndResWithError);
app.get('/req/res/next', testController.includingNext);
app.get('/req/res/next/error', testController.includingNextWithError);

export default app;
