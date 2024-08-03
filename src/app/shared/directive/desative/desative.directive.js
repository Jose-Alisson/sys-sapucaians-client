"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesativeAdicionaisDirective = void 0;
var core_1 = require("@angular/core");
var DesativeAdicionaisDirective = function () {
    var _classDecorators = [(0, core_1.Directive)({
            selector: '[desativAdicionais]',
            standalone: true
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _select_decorators;
    var _select_initializers = [];
    var _select_extraInitializers = [];
    var _additional_decorators;
    var _additional_initializers = [];
    var _additional_extraInitializers = [];
    var _max_decorators;
    var _max_initializers = [];
    var _max_extraInitializers = [];
    var _desactive_decorators;
    var _desactive_initializers = [];
    var _desactive_extraInitializers = [];
    var _reactive_decorators;
    var DesativeAdicionaisDirective = _classThis = /** @class */ (function () {
        function DesativeAdicionaisDirective_1() {
            this.select = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _select_initializers, void 0));
            this.additional = (__runInitializers(this, _select_extraInitializers), __runInitializers(this, _additional_initializers, void 0));
            this.max = (__runInitializers(this, _additional_extraInitializers), __runInitializers(this, _max_initializers, 0));
            this.desactive = (__runInitializers(this, _max_extraInitializers), __runInitializers(this, _desactive_initializers, void 0));
            __runInitializers(this, _desactive_extraInitializers);
        }
        DesativeAdicionaisDirective_1.prototype.reactive = function (event) {
            var _this = this;
            var _a, _b, _c;
            if (this.select.length < this.max) {
                var index = this.select.findIndex(function (attr) { return attr === _this.additional; });
                if (index != -1) {
                    (_a = this.select) === null || _a === void 0 ? void 0 : _a.splice(index, 1);
                }
                else {
                    (_b = this.select) === null || _b === void 0 ? void 0 : _b.push(this.additional);
                }
            }
            else {
                var index = this.select.findIndex(function (attr) { return attr === _this.additional; });
                if (index != -1) {
                    (_c = this.select) === null || _c === void 0 ? void 0 : _c.splice(index, 1);
                }
            }
            if (this.select.length < this.max) {
                this.desactive.desactive = false;
            }
            else {
                this.desactive.desactive = true;
            }
            console.log(this.select);
        };
        return DesativeAdicionaisDirective_1;
    }());
    __setFunctionName(_classThis, "DesativeAdicionaisDirective");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _select_decorators = [(0, core_1.Input)()];
        _additional_decorators = [(0, core_1.Input)()];
        _max_decorators = [(0, core_1.Input)()];
        _desactive_decorators = [(0, core_1.Input)()];
        _reactive_decorators = [(0, core_1.HostListener)('click', ['$event'])];
        __esDecorate(_classThis, null, _reactive_decorators, { kind: "method", name: "reactive", static: false, private: false, access: { has: function (obj) { return "reactive" in obj; }, get: function (obj) { return obj.reactive; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _select_decorators, { kind: "field", name: "select", static: false, private: false, access: { has: function (obj) { return "select" in obj; }, get: function (obj) { return obj.select; }, set: function (obj, value) { obj.select = value; } }, metadata: _metadata }, _select_initializers, _select_extraInitializers);
        __esDecorate(null, null, _additional_decorators, { kind: "field", name: "additional", static: false, private: false, access: { has: function (obj) { return "additional" in obj; }, get: function (obj) { return obj.additional; }, set: function (obj, value) { obj.additional = value; } }, metadata: _metadata }, _additional_initializers, _additional_extraInitializers);
        __esDecorate(null, null, _max_decorators, { kind: "field", name: "max", static: false, private: false, access: { has: function (obj) { return "max" in obj; }, get: function (obj) { return obj.max; }, set: function (obj, value) { obj.max = value; } }, metadata: _metadata }, _max_initializers, _max_extraInitializers);
        __esDecorate(null, null, _desactive_decorators, { kind: "field", name: "desactive", static: false, private: false, access: { has: function (obj) { return "desactive" in obj; }, get: function (obj) { return obj.desactive; }, set: function (obj, value) { obj.desactive = value; } }, metadata: _metadata }, _desactive_initializers, _desactive_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DesativeAdicionaisDirective = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DesativeAdicionaisDirective = _classThis;
}();
exports.DesativeAdicionaisDirective = DesativeAdicionaisDirective;
