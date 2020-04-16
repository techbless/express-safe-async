import { Request, Response, NextFunction } from 'express';
declare function wrapAsync(asyncFn: Function): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<any>;
declare function AsyncHandler<T extends Function>(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): {
    configurable: boolean;
    get(this: T): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<any>;
};
export { wrapAsync, AsyncHandler };
export default AsyncHandler;
