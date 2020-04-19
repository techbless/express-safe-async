"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function safe(asyncFn) {
    // Handle execption safely during the handling request.
    const exceptionHandled = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            return yield asyncFn(req, res, next);
        }
        catch (error) {
            return next(error);
        }
    });
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
