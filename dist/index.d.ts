import { Request, Response, NextFunction } from 'express';

export declare function safe(
  asyncFn: Function,
): (req: Request, res: Response, next?: NextFunction | undefined) => Promise<any>;
export declare function AsyncHandled<T extends Function>(
  target: object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<T>,
): {
  configurable: boolean;
  get(this: T): (req: Request, res: Response, next?: NextFunction | undefined) => Promise<any>;
};
export default AsyncHandled;
