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
exports.ValidateComponent = void 0;
var core_1 = require("@angular/core");
var ValidateComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-validate',
            standalone: true,
            imports: [],
            templateUrl: './validate.component.html',
            styleUrl: './validate.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _control_decorators;
    var _control_initializers = [];
    var _control_extraInitializers = [];
    var ValidateComponent = _classThis = /** @class */ (function () {
        function ValidateComponent_1() {
            this.viewAllError = (0, core_1.input)(false);
            this.control = __runInitializers(this, _control_initializers, void 0);
            this.validatorName = (__runInitializers(this, _control_extraInitializers), (0, core_1.input)(''));
            this.message = (0, core_1.input)('');
        }
        ValidateComponent_1.prototype.isEntered = function () {
            var _a, _b;
            return ((((_a = this.control) === null || _a === void 0 ? void 0 : _a.touched) || ((_b = this.control) === null || _b === void 0 ? void 0 : _b.dirty)) || this.viewAllError());
        };
        ValidateComponent_1.prototype.ngOnInit = function () {
        };
        ValidateComponent_1.prototype.setControl = function (control) {
            this.control = control;
        };
        return ValidateComponent_1;
    }());
    __setFunctionName(_classThis, "ValidateComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _control_decorators = [(0, core_1.Input)()];
        __esDecorate(null, null, _control_decorators, { kind: "field", name: "control", static: false, private: false, access: { has: function (obj) { return "control" in obj; }, get: function (obj) { return obj.control; }, set: function (obj, value) { obj.control = value; } }, metadata: _metadata }, _control_initializers, _control_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ValidateComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ValidateComponent = _classThis;
}();
exports.ValidateComponent = ValidateComponent;
