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
exports.CartComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cart_service_1 = require("../../shared/services/cart/cart.service");
var modal_component_1 = require("../../shared/comp/modal/modal.component");
var method_pay_component_1 = require("../../shared/comp/method-pay/method-pay.component");
var method_delivery_component_1 = require("../../shared/comp/method-delivery/method-delivery.component");
var forms_1 = require("@angular/forms");
var pedido_service_1 = require("../../shared/services/pedido/pedido.service");
var CartComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-cart',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterModule, modal_component_1.ModalComponent, method_pay_component_1.MethodPayComponent, method_delivery_component_1.MethodDeliveryComponent, forms_1.ReactiveFormsModule],
            templateUrl: './cart.component.html',
            styleUrl: './cart.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _mdlConfirm_decorators;
    var _mdlConfirm_initializers = [];
    var _mdlConfirm_extraInitializers = [];
    var _mdlDados_decorators;
    var _mdlDados_initializers = [];
    var _mdlDados_extraInitializers = [];
    var _mtdPay_decorators;
    var _mtdPay_initializers = [];
    var _mtdPay_extraInitializers = [];
    var _mtdDelivery_decorators;
    var _mtdDelivery_initializers = [];
    var _mtdDelivery_extraInitializers = [];
    var CartComponent = _classThis = /** @class */ (function () {
        function CartComponent_1() {
            var _this = this;
            this.mdlConfirm = __runInitializers(this, _mdlConfirm_initializers, void 0);
            this.mdlDados = (__runInitializers(this, _mdlConfirm_extraInitializers), __runInitializers(this, _mdlDados_initializers, void 0));
            this.mtdPay = (__runInitializers(this, _mdlDados_extraInitializers), __runInitializers(this, _mtdPay_initializers, void 0));
            this.mtdDelivery = (__runInitializers(this, _mtdPay_extraInitializers), __runInitializers(this, _mtdDelivery_initializers, void 0));
            this.form = (__runInitializers(this, _mtdDelivery_extraInitializers), (0, core_1.inject)(forms_1.FormBuilder));
            this.cart = (0, core_1.inject)(cart_service_1.CartService);
            this.pedido = (0, core_1.inject)(pedido_service_1.PedidoService);
            this.router = (0, core_1.inject)(router_1.Router);
            this.total = 0;
            this.clienteForm = this.form.group({
                nome: ['', [forms_1.Validators.required]],
                telefone: ['', [forms_1.Validators.required]]
            });
            if (this.cart.getCart().getValue().length <= 0) {
                this.router.navigate(['menu']);
                return;
            }
            this.cart.total.subscribe(function (t) {
                _this.total = t;
            });
        }
        CartComponent_1.prototype.increment = function (amount) {
            this.cart.increment(amount);
        };
        CartComponent_1.prototype.decrement = function (amount) {
            this.cart.decrement(amount);
        };
        CartComponent_1.prototype.getAmountValue = function (amount) {
            var _a;
            var value = amount === null || amount === void 0 ? void 0 : amount.product.price;
            (_a = amount === null || amount === void 0 ? void 0 : amount.additional) === null || _a === void 0 ? void 0 : _a.forEach(function (attr) {
                value += attr.price;
            });
            return value * (amount === null || amount === void 0 ? void 0 : amount.quantity);
        };
        CartComponent_1.prototype.getAttributeList = function (attrs) {
            var _a;
            return (_a = attrs === null || attrs === void 0 ? void 0 : attrs.map(function (attr) { return attr.name; })) === null || _a === void 0 ? void 0 : _a.join(', ');
        };
        CartComponent_1.prototype.delete = function (amount) {
            this.cart.removeItemToCart(amount);
        };
        CartComponent_1.prototype.sendMenssageWhatsapp = function (message) {
            var phoneNumber = '+5581973127515'; // Número de telefone no formato internacional
            var url = "https://wa.me/".concat(phoneNumber, "?text=").concat(encodeURIComponent(message));
            window.open(url, '_blank');
        };
        CartComponent_1.prototype.finalizarPedido = function () {
            var _this = this;
            if (this.clienteForm.valid) {
                this.mdlDados.active = false;
                this.mdlConfirm.active = true;
                var pedido = {
                    name: this.clienteForm.controls.nome.value || '',
                    cellPhone: this.clienteForm.controls.telefone.value || '',
                    amounts: this.cart.cart.getValue(),
                    payment: this.mtdPay.getMethodPayment(),
                    address: this.mtdDelivery.getMethodDelivery(),
                    id: 0,
                    dateCreation: ''
                };
                console.log(pedido);
                this.order = pedido;
                this.pedido.create(pedido).subscribe(function (data) {
                    _this.order = data;
                });
            }
            else {
                this.mdlDados.active = true;
            }
        };
        CartComponent_1.prototype.confirm = function () {
            var _this = this;
            var _a;
            if (this.order) {
                var allProduct_1 = "";
                (_a = this.order.amounts) === null || _a === void 0 ? void 0 : _a.forEach(function (amount) {
                    var _a;
                    var addicionais = "";
                    (_a = amount.additional) === null || _a === void 0 ? void 0 : _a.forEach(function (add) {
                        addicionais +=
                            " 1 ".concat(add.name, "\n");
                    });
                    var product = "x".concat(amount.quantity, " ").concat(amount.product.name, " ").concat(_this.getAmountValue(amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), "\n").concat(addicionais);
                    allProduct_1 += product;
                });
                var message = "\n Ol\u00E1, Gostaria de Confirmar Meu Pedido! \uD83C\uDF54\n    \n\uD83D\uDD39 ID do Pedido: ".concat(this.order.id, "\n\uD83D\uDD39 Nome do Cliente: ").concat(this.order.name, "\n\uD83D\uDD39 Telefone: ").concat(this.order.cellPhone, "\n\uD83D\uDD39 Endere\u00E7o: ").concat(this.order.address, "\n    \n\uD83D\uDCE6 Produtos:\n\n").concat(allProduct_1, "\n    \n\uD83D\uDCB3 Forma de Pagamento: ").concat(this.order.payment, "\n\uD83D\uDCB0 Total: ").concat(this.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), "\n");
                console.log(message);
                this.sendMenssageWhatsapp(message);
            }
        };
        return CartComponent_1;
    }());
    __setFunctionName(_classThis, "CartComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _mdlConfirm_decorators = [(0, core_1.ViewChild)('confimModal')];
        _mdlDados_decorators = [(0, core_1.ViewChild)('dados')];
        _mtdPay_decorators = [(0, core_1.ViewChild)('mtdPay')];
        _mtdDelivery_decorators = [(0, core_1.ViewChild)('mtdDelivery')];
        __esDecorate(null, null, _mdlConfirm_decorators, { kind: "field", name: "mdlConfirm", static: false, private: false, access: { has: function (obj) { return "mdlConfirm" in obj; }, get: function (obj) { return obj.mdlConfirm; }, set: function (obj, value) { obj.mdlConfirm = value; } }, metadata: _metadata }, _mdlConfirm_initializers, _mdlConfirm_extraInitializers);
        __esDecorate(null, null, _mdlDados_decorators, { kind: "field", name: "mdlDados", static: false, private: false, access: { has: function (obj) { return "mdlDados" in obj; }, get: function (obj) { return obj.mdlDados; }, set: function (obj, value) { obj.mdlDados = value; } }, metadata: _metadata }, _mdlDados_initializers, _mdlDados_extraInitializers);
        __esDecorate(null, null, _mtdPay_decorators, { kind: "field", name: "mtdPay", static: false, private: false, access: { has: function (obj) { return "mtdPay" in obj; }, get: function (obj) { return obj.mtdPay; }, set: function (obj, value) { obj.mtdPay = value; } }, metadata: _metadata }, _mtdPay_initializers, _mtdPay_extraInitializers);
        __esDecorate(null, null, _mtdDelivery_decorators, { kind: "field", name: "mtdDelivery", static: false, private: false, access: { has: function (obj) { return "mtdDelivery" in obj; }, get: function (obj) { return obj.mtdDelivery; }, set: function (obj, value) { obj.mtdDelivery = value; } }, metadata: _metadata }, _mtdDelivery_initializers, _mtdDelivery_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CartComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CartComponent = _classThis;
}();
exports.CartComponent = CartComponent;
