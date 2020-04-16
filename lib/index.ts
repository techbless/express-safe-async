// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express';

function wrapAsync(asyncFn: Function) {
  // Handle execption safely during the handling request.
  const exceptionHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      return next(error);
    }
  };

  return exceptionHandler;
}

// Decorator binding this and handling exception.
function AsyncHandler<T extends Function>(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
  // If decorated somthing is not function, throw an error.
  if (!descriptor || typeof descriptor.value !== 'function') {
    throw new TypeError(`Only methods can be decorated with @AsyncHandler. <${propertyKey}> is not a method.`);
  }

  return {
    configurable: true,
    get(this: T) {
      const bound: T = descriptor.value!.bind(this);

      Object.defineProperty(target, propertyKey, {
        value: bound,
        configurable: true,
        writable: true,
      });

      return wrapAsync(bound);
    },
  };
}

export { wrapAsync, AsyncHandler };
export default AsyncHandler;
