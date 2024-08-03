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
exports.MethodDeliveryComponent = void 0;
var core_1 = require("@angular/core");
var dropdown_component_1 = require("../dropdown/dropdown.component");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var modal_component_1 = require("../modal/modal.component");
var MethodDeliveryComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-method-delivery',
            standalone: true,
            imports: [dropdown_component_1.DropdownComponent, common_1.CommonModule, modal_component_1.ModalComponent, forms_1.ReactiveFormsModule],
            templateUrl: './method-delivery.component.html',
            styleUrl: './method-delivery.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _modalEnd_decorators;
    var _modalEnd_initializers = [];
    var _modalEnd_extraInitializers = [];
    var _drop_decorators;
    var _drop_initializers = [];
    var _drop_extraInitializers = [];
    var MethodDeliveryComponent = _classThis = /** @class */ (function () {
        function MethodDeliveryComponent_1() {
            var _this = this;
            this.modalEnd = __runInitializers(this, _modalEnd_initializers, void 0);
            this.drop = (__runInitializers(this, _modalEnd_extraInitializers), __runInitializers(this, _drop_initializers, void 0));
            this.form = (__runInitializers(this, _drop_extraInitializers), (0, core_1.inject)(forms_1.FormBuilder));
            this.addressForm = this.form.group({
                rua: ['', [forms_1.Validators.required]],
                numero: ['', [forms_1.Validators.required]],
                complemento: ['']
            });
            (0, core_1.effect)(function () {
                var _a, _b;
                var valor = (_a = _this.drop) === null || _a === void 0 ? void 0 : _a.selectSignal();
                if (valor === 'Loja') {
                    _this.address = undefined;
                }
                if (valor === 'Delivery') {
                    _this.modalEnd.active = true;
                }
                return (_b = _this.drop) === null || _b === void 0 ? void 0 : _b.selectSignal();
            });
        }
        MethodDeliveryComponent_1.prototype.concluirEndereco = function () {
            this.address = __assign({}, this.addressForm.value);
            this.addressForm.reset();
            this.modalEnd.active = false;
        };
        MethodDeliveryComponent_1.prototype.getMethodDelivery = function () {
            if (this.address) {
                var rua = this.address.rua;
                var numero = this.address.numero;
                var complemento = this.address.complemento;
                var address = [rua, numero, complemento].filter(function (item) { return item != null && item != undefined; }).join(', ');
                return address;
            }
            return 'Loja';
        };
        return MethodDeliveryComponent_1;
    }());
    __setFunctionName(_classThis, "MethodDeliveryComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _modalEnd_decorators = [(0, core_1.ViewChild)('modalEndereco')];
        _drop_decorators = [(0, core_1.ViewChild)('drop')];
        __esDecorate(null, null, _modalEnd_decorators, { kind: "field", name: "modalEnd", static: false, private: false, access: { has: function (obj) { return "modalEnd" in obj; }, get: function (obj) { return obj.modalEnd; }, set: function (obj, value) { obj.modalEnd = value; } }, metadata: _metadata }, _modalEnd_initializers, _modalEnd_extraInitializers);
        __esDecorate(null, null, _drop_decorators, { kind: "field", name: "drop", static: false, private: false, access: { has: function (obj) { return "drop" in obj; }, get: function (obj) { return obj.drop; }, set: function (obj, value) { obj.drop = value; } }, metadata: _metadata }, _drop_initializers, _drop_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MethodDeliveryComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MethodDeliveryComponent = _classThis;
}();
exports.MethodDeliveryComponent = MethodDeliveryComponent;
