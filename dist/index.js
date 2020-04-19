"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function safe(asyncFn) {
    // Handle execption safely during the handling request.
    const exceptionHandled = async (req, res, next) => {
        try {
            return await asyncFn(req, res, next);
        }
        catch (error) {
            return next(error);
        }
    };
    return exceptionHandled;
}
exports.safe = safe;
// Decorator binding this and handling exception.
function AsyncHandled(target, propertyKey, descriptor) {
    // If decorated somthing is not function, throw an error.
    if (!descriptor || typeof descriptor.value !== 'function') {
        throw new TypeError(`Only methods can be decorated with @AsyncHandler. <${propertyKey}> is not a method.`);
    }
    return {
        configurable: true,
        get() {
            const bound = descriptor.value.bind(this);
            Object.defineProperty(target, propertyKey, {
                value: bound,
                configurable: true,
                writable: true,
            });
            return safe(bound);
        },
    };
}
exports.AsyncHandled = AsyncHandled;
exports.default = AsyncHandled;
