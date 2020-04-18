<h1 align="center">Welcome to express-safe-async 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/express-safe-async" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/express-safe-async.svg">
  </a>
  <a href="https://github.com/techbless/express-safe-async#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/techbless/express-safe-async/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/techbless/express-safe-async/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/techbless/express-safe-async" />
  </a>
</p>

> Elegant async error handler with Decorator for async router function(controller) in express

### 🏠 [Homepage](https://github.com/techbless/express-safe-async)

## Install

```sh
npm install express-safe-async
```

## Usage

```typescript
import * as express from 'express';
import AsyncHandler from 'express-safe-async';

class ExampleController {
  @AsyncHandler
  public async example(req: express.Request, res: express.Response) {
    // Your stuff here
    ...
  }
}

const testController = new TestController();
const app = express();

app.get('/example', testController.example);
app.listen(PORT, (err) => {
  ...
})
```

## Run tests when you contribute

```sh
npm run test
```

## Author

👤 **Yunbin Chang**

* Website: https://techbless.github.io
* Github: [@techbless](https://github.com/techbless)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/techbless/express-safe-async/issues). You can also take a look at the [contributing guide](https://github.com/techbless/express-safe-async/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Yunbin Chang](https://github.com/techbless).<br />
This project is [MIT](https://github.com/techbless/express-safe-async/blob/master/LICENSE) licensed.