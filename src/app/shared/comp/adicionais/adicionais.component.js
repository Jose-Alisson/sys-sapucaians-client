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
exports.AdicionaisComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var desative_directive_1 = require("../../directive/desative/desative.directive");
var AdicionaisComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-adicionais',
            standalone: true,
            imports: [common_1.CommonModule, desative_directive_1.DesativeAdicionaisDirective],
            templateUrl: './adicionais.component.html',
            styleUrl: './adicionais.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _additional_decorators;
    var _additional_initializers = [];
    var _additional_extraInitializers = [];
    var _active_decorators;
    var _active_initializers = [];
    var _active_extraInitializers = [];
    var AdicionaisComponent = _classThis = /** @class */ (function () {
        function AdicionaisComponent_1() {
            this.additional = __runInitializers(this, _additional_initializers, {
                id: undefined,
                name: '',
                max: 0,
                min: 0,
                additional: []
            });
            this.active = (__runInitializers(this, _additional_extraInitializers), __runInitializers(this, _active_initializers, false));
            this.select = (__runInitializers(this, _active_extraInitializers), []);
            this.desactive = { desactive: false };
        }
        AdicionaisComponent_1.prototype.getSize = function (element, active) {
            if (active) {
                return { '--full': element.getBoundingClientRect().height + 'px' };
            }
            return { '--full': '0px' };
        };
        AdicionaisComponent_1.prototype.activeSelection = function (item) {
            var i = this.select.findIndex(function (attr) { return attr === item; });
            return i != -1;
        };
        AdicionaisComponent_1.prototype.desative = function (item) {
            if (this.desactive.desactive) {
                var i = this.select.findIndex(function (attr) { return attr === item; });
                if (i == -1) {
                    return true;
                }
            }
            return false;
        };
        return AdicionaisComponent_1;
    }());
    __setFunctionName(_classThis, "AdicionaisComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _additional_decorators = [(0, core_1.Input)()];
        _active_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _additional_decorators, { kind: "field", name: "additional", static: false, private: false, access: { has: function (obj) { return "additional" in obj; }, get: function (obj) { return obj.additional; }, set: function (obj, value) { obj.additional = value; } }, metadata: _metadata }, _additional_initializers, _additional_extraInitializers);
        __esDecorate(null, null, _active_decorators, { kind: "field", name: "active", static: false, private: false, access: { has: function (obj) { return "active" in obj; }, get: function (obj) { return obj.active; }, set: function (obj, value) { obj.active = value; } }, metadata: _metadata }, _active_initializers, _active_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AdicionaisComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AdicionaisComponent = _classThis;
}();
exports.AdicionaisComponent = AdicionaisComponent;
