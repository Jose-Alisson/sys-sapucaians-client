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
exports.InputComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validate_component_1 = require("../validate/validate.component");
var InputComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-input',
            standalone: true,
            imports: [forms_1.FormsModule],
            templateUrl: './input.component.html',
            styleUrl: './input.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _children_decorators;
    var _children_initializers = [];
    var _children_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var InputComponent = _classThis = /** @class */ (function () {
        function InputComponent_1() {
            this.children = __runInitializers(this, _children_initializers, void 0);
            this.title = (__runInitializers(this, _children_extraInitializers), __runInitializers(this, _title_initializers, ''));
            this.value = (__runInitializers(this, _title_extraInitializers), '');
            this.ngControl = (0, core_1.inject)(forms_1.NgControl, { optional: true });
            this.name = "";
            this.type = (0, core_1.input)('text');
            if (this.ngControl) {
                this.ngControl.valueAccessor = this;
            }
        }
        InputComponent_1.prototype.ngAfterContentInit = function () {
            var _this = this;
            var _a;
            this.name = 'input-' + this.title.replace(' ', '');
            (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (validate) {
                var _a;
                var control = (_a = _this.ngControl) === null || _a === void 0 ? void 0 : _a.control;
                if (control && (validate.control === undefined || validate.control === null)) {
                    validate.setControl(control);
                }
            });
        };
        InputComponent_1.prototype.writeValue = function (obj) {
            this.value = obj;
        };
        InputComponent_1.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        InputComponent_1.prototype.registerOnTouched = function (fn) {
            this.OnTouched = fn;
        };
        InputComponent_1.prototype.setDisabledState = function (isDisabled) {
        };
        return InputComponent_1;
    }());
    __setFunctionName(_classThis, "InputComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _children_decorators = [(0, core_1.ContentChildren)(validate_component_1.ValidateComponent)];
        _title_decorators = [(0, core_1.Input)({ required: true })];
        __esDecorate(null, null, _children_decorators, { kind: "field", name: "children", static: false, private: false, access: { has: function (obj) { return "children" in obj; }, get: function (obj) { return obj.children; }, set: function (obj, value) { obj.children = value; } }, metadata: _metadata }, _children_initializers, _children_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        InputComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return InputComponent = _classThis;
}();
exports.InputComponent = InputComponent;
