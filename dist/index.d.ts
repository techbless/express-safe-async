import { Request, Response, NextFunction } from 'express';
declare function safe(asyncFn: Function): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next?: NextFunction | undefined) => Promise<any>;
declare function AsyncHandled<T extends Function>(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): {
    configurable: boolean;
    get(this: T): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>, next?: NextFunction | undefined) => Promise<any>;
};
export { safe, AsyncHandled };
export default AsyncHandled;
