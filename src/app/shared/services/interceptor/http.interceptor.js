"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpInterceptor = void 0;
var httpInterceptor = function (req, next) {
    var modifiedReq = req.clone({
        headers: req.headers.set('Access-Control-Allow-Origin', '*')
    });
    return next(modifiedReq);
};
exports.httpInterceptor = httpInterceptor;
