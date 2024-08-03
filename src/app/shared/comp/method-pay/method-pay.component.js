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
exports.MethodPayComponent = void 0;
var core_1 = require("@angular/core");
var dropdown_component_1 = require("../dropdown/dropdown.component");
var common_1 = require("@angular/common");
var modal_component_1 = require("../modal/modal.component");
var forms_1 = require("@angular/forms");
var input_component_1 = require("../form/input/input.component");
var validate_component_1 = require("../form/validate/validate.component");
var MethodPayComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-method-pay',
            standalone: true,
            imports: [dropdown_component_1.DropdownComponent, common_1.CommonModule, modal_component_1.ModalComponent, forms_1.ReactiveFormsModule, input_component_1.InputComponent, validate_component_1.ValidateComponent],
            templateUrl: './method-pay.component.html',
            styleUrl: './method-pay.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _drop_decorators;
    var _drop_initializers = [];
    var _drop_extraInitializers = [];
    var MethodPayComponent = _classThis = /** @class */ (function () {
        function MethodPayComponent_1() {
            this.paymentValue = new forms_1.FormControl(0, [forms_1.Validators.required]);
            this.drop = __runInitializers(this, _drop_initializers, void 0);
            __runInitializers(this, _drop_extraInitializers);
        }
        MethodPayComponent_1.prototype.getMethodPayment = function () {
            var _a, _b;
            if ((_a = this.drop) === null || _a === void 0 ? void 0 : _a.select) {
                var payment = [(_b = this.drop) === null || _b === void 0 ? void 0 : _b.select, this.paymentValue.value].filter(function (item) { return item != null && item != undefined; }).join(', ');
                return payment;
            }
            return 'Não Especificada';
        };
        return MethodPayComponent_1;
    }());
    __setFunctionName(_classThis, "MethodPayComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _drop_decorators = [(0, core_1.ViewChild)('drop')];
        __esDecorate(null, null, _drop_decorators, { kind: "field", name: "drop", static: false, private: false, access: { has: function (obj) { return "drop" in obj; }, get: function (obj) { return obj.drop; }, set: function (obj, value) { obj.drop = value; } }, metadata: _metadata }, _drop_initializers, _drop_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MethodPayComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MethodPayComponent = _classThis;
}();
exports.MethodPayComponent = MethodPayComponent;
