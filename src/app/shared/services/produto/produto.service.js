"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var file_service_1 = require("../file/file.service");
var platform_browser_1 = require("@angular/platform-browser");
var ProdutoService = function () {
    var _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProdutoService = _classThis = /** @class */ (function () {
        function ProdutoService_1() {
            this.URL = "http://localhost:8080/product";
            this.http = (0, core_1.inject)(http_1.HttpClient);
            this.fileService = (0, core_1.inject)(file_service_1.FileService);
            this.sanitizer = (0, core_1.inject)(platform_browser_1.DomSanitizer);
            this.v = 0;
        }
        ProdutoService_1.prototype.getAllToCategory = function () {
            var _this = this;
            return this.http.get("".concat(this.URL, "/sortByCategory")).pipe((0, rxjs_1.tap)(function (category) {
                category.forEach(function (category) {
                    var _a;
                    (_a = category.products) === null || _a === void 0 ? void 0 : _a.forEach(function (product) {
                        if (product.photoUrl) {
                            _this.v++;
                            _this.fileService.download(product.photoUrl).subscribe(function (blob) {
                                product.photoObject = _this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
                            });
                        }
                    });
                });
            }));
        };
        ProdutoService_1.prototype.search = function (s) {
            var _this = this;
            var params = new http_1.HttpParams().append('s', s);
            return this.http
                .get("".concat(this.URL, "/search"), { params: params })
                .pipe((0, rxjs_1.map)(function (products) {
                return products.map(function (item) {
                    return __assign(__assign({}, item), { photoObj: {} });
                });
            }), (0, rxjs_1.tap)(function (products) {
                products.forEach(function (product) {
                    if (product.photoUrl) {
                        _this.fileService.download(product.photoUrl).subscribe(function (blob) {
                            product.photoObject = _this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
                        });
                    }
                });
            }));
        };
        return ProdutoService_1;
    }());
    __setFunctionName(_classThis, "ProdutoService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProdutoService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProdutoService = _classThis;
}();
exports.ProdutoService = ProdutoService;
