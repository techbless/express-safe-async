// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express';

export function safe(asyncFn: Function) {
  // Handle execption safely during the handling request.
  const exceptionHandled = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      return next!(error);
    }
  };

  return exceptionHandled;
}

// Decorator binding this and handling exception.
export function AsyncHandled<T extends Function>(
  target: object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<T>,
) {
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

      return safe(bound);
    },
  };
}

export default AsyncHandled;
