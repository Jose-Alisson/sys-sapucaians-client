"use strict";
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
exports.CartService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CartService = function () {
    var _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CartService = _classThis = /** @class */ (function () {
        function CartService_1() {
            var _this = this;
            this.cart = new rxjs_1.BehaviorSubject([]);
            this.total = new rxjs_1.BehaviorSubject(0);
            this.cart.subscribe(function (cart) {
                var total = 0;
                cart.forEach(function (amount) {
                    var _a, _b;
                    var price = ((_a = amount.product) === null || _a === void 0 ? void 0 : _a.price) || 0;
                    if (amount === null || amount === void 0 ? void 0 : amount.additional) {
                        (_b = amount === null || amount === void 0 ? void 0 : amount.additional) === null || _b === void 0 ? void 0 : _b.forEach(function (item) {
                            price += item.price;
                        });
                    }
                    price *= (amount === null || amount === void 0 ? void 0 : amount.quantity) || 0;
                    total += price;
                });
                _this.total.next(total);
            });
        }
        CartService_1.prototype.getCart = function () {
            return this.cart;
        };
        CartService_1.prototype.addItemToCart = function (item) {
            this.cart.getValue().push(item);
            this.cart.next(this.cart.getValue());
        };
        CartService_1.prototype.removeItemToCart = function (item) {
            var index = this.cart.getValue().findIndex(function (i) { return i === item; });
            if (index != -1) {
                this.cart.getValue().splice(index, 1);
                this.cart.next(this.cart.getValue());
            }
        };
        CartService_1.prototype.increment = function (item) {
            var index = this.cart.getValue().findIndex(function (i) { return i === item; });
            if (index != -1) {
                if ((item === null || item === void 0 ? void 0 : item.quantity) < 10) {
                    item.quantity++;
                }
                this.cart.next(this.cart.getValue());
            }
        };
        CartService_1.prototype.decrement = function (item) {
            var index = this.cart.getValue().findIndex(function (i) { return i === item; });
            if (index != -1) {
                if (item.quantity > 1) {
                    item.quantity--;
                }
                else {
                    this.removeItemToCart(item);
                }
                this.cart.next(this.cart.getValue());
            }
        };
        return CartService_1;
    }());
    __setFunctionName(_classThis, "CartService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CartService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CartService = _classThis;
}();
exports.CartService = CartService;
