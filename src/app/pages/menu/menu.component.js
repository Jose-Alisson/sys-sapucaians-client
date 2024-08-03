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
exports.MenuComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var modal_component_1 = require("../../shared/comp/modal/modal.component");
var adicionais_component_1 = require("../../shared/comp/adicionais/adicionais.component");
var forms_1 = require("@angular/forms");
var sidebar_component_1 = require("../../shared/comp/sidebar/sidebar.component");
var cart_service_1 = require("../../shared/services/cart/cart.service");
var router_1 = require("@angular/router");
var establishment_service_1 = require("../../shared/services/establishment/establishment.service");
var produto_service_1 = require("../../shared/services/produto/produto.service");
var MenuComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-menu',
            standalone: true,
            imports: [common_1.CommonModule, common_1.CurrencyPipe, modal_component_1.ModalComponent, adicionais_component_1.AdicionaisComponent, forms_1.ReactiveFormsModule, sidebar_component_1.SidebarComponent],
            templateUrl: './menu.component.html',
            styleUrl: './menu.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _sidebar_decorators;
    var _sidebar_initializers = [];
    var _sidebar_extraInitializers = [];
    var _add_decorators;
    var _add_initializers = [];
    var _add_extraInitializers = [];
    var _modal_decorators;
    var _modal_initializers = [];
    var _modal_extraInitializers = [];
    var MenuComponent = _classThis = /** @class */ (function () {
        function MenuComponent_1() {
            this.cart = (0, core_1.inject)(cart_service_1.CartService);
            this.produtoService = (0, core_1.inject)(produto_service_1.ProdutoService);
            this.establishmentService = (0, core_1.inject)(establishment_service_1.EstablishmentService);
            this.router = (0, core_1.inject)(router_1.Router);
            this.sidebar = __runInitializers(this, _sidebar_initializers, void 0);
            this.add = (__runInitializers(this, _sidebar_extraInitializers), __runInitializers(this, _add_initializers, void 0));
            this.modal = (__runInitializers(this, _add_extraInitializers), __runInitializers(this, _modal_initializers, void 0));
            this.observation = (__runInitializers(this, _modal_extraInitializers), new forms_1.FormControl('', [forms_1.Validators.maxLength(255)]));
            this.searchControl = new forms_1.FormControl('');
            this.counter = 1;
            // categorias: category[] = []
            this.totalCart = 0;
            this.viewportScroller = (0, core_1.inject)(common_1.ViewportScroller);
            this.s = '';
            this.categorias = [];
            this.searchResult = [];
        }
        MenuComponent_1.prototype.ngOnInit = function () {
            var _this = this;
            this.produtoService.getAllToCategory().subscribe(function (data) {
                _this.categorias = data;
            });
            this.cart.total.subscribe(function (total) {
                _this.totalCart = total;
            });
            this.establishmentService.getEstablishment().subscribe(function (data) {
                _this.establishment = data;
            });
            this.establishmentService.inf.subscribe(function (data) {
                _this.establishment = data;
            });
        };
        // Adiciona ao carrinho o item desejado
        MenuComponent_1.prototype.comprar = function (item) {
            var _a, _b;
            var allSelected = true;
            (_a = this.add) === null || _a === void 0 ? void 0 : _a.forEach(function (a) {
                console.log(a);
                if (a.select.length < a.additional.min) {
                    a.active = true;
                    allSelected = false;
                }
            });
            if (allSelected) {
                var amount = {
                    product: item,
                    quantity: this.counter,
                    additional: this.getAdditionalSelect(),
                    observation: this.observation.value || '',
                    id: null
                };
                this.cart.addItemToCart(amount);
                (_b = this.modal) === null || _b === void 0 ? void 0 : _b.forEach(function (m) {
                    m.active = false;
                });
            }
        };
        MenuComponent_1.prototype.search = function (event) {
            var _this = this;
            // this.produtoService.search()
            if (event.key === 'Enter') {
                this.produtoService.search(this.searchControl.value || '').subscribe(function (data) {
                    _this.searchResult = data;
                    _this.s = _this.searchControl.value || '';
                });
            }
        };
        //No modal ele diminui a quantidade do item que o cliente quer
        MenuComponent_1.prototype.decrement = function () {
            if (this.counter > 1) {
                this.counter--;
            }
        };
        //No modal ele aumenta a quantidade do item que o cliente quer
        MenuComponent_1.prototype.increment = function () {
            if (this.counter < 9) {
                this.counter++;
            }
        };
        //No modal ele aumenta retorna o price do item já com os adicionais
        MenuComponent_1.prototype.getPrice = function (item) {
            var _a;
            var price = item.price;
            (_a = this.add) === null || _a === void 0 ? void 0 : _a.forEach(function (add) {
                add.select.forEach(function (select) {
                    price += select.price;
                });
            });
            return price * this.counter;
        };
        MenuComponent_1.prototype.getAmountValue = function (amount) {
            var _a, _b;
            var value = (_a = amount === null || amount === void 0 ? void 0 : amount.product) === null || _a === void 0 ? void 0 : _a.price;
            (_b = amount.additional) === null || _b === void 0 ? void 0 : _b.forEach(function (attr) {
                value += attr.price;
            });
            return value * amount.quantity;
        };
        //No modal atual ele retona as seleçoes feitas no adicionais
        MenuComponent_1.prototype.getAdditionalSelect = function () {
            var _a;
            var additionals = [];
            (_a = this.add) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                additionals.push.apply(additionals, item.select);
            });
            return additionals;
        };
        MenuComponent_1.prototype.getAdditionalText = function (item) {
        };
        MenuComponent_1.prototype.clean = function () {
            var _a;
            this.observation = new forms_1.FormControl('');
            this.counter = 1;
            (_a = this.add) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                item.desactive.desactive = false;
                item.select = [];
            });
        };
        MenuComponent_1.prototype.getCategorysName = function () {
            return this.categorias.map(function (category) { return category.name; });
        };
        MenuComponent_1.prototype.scrollToCategory = function (categoryName) {
            this.s = '';
            var category = document.getElementById('category-' + categoryName);
            var top = document.getElementById('top');
            var categoryB = category === null || category === void 0 ? void 0 : category.getBoundingClientRect();
            var topB = top === null || top === void 0 ? void 0 : top.getBoundingClientRect();
            this.viewportScroller.scrollToPosition([0, categoryB.top + window.scrollY - topB.height || 0]);
        };
        MenuComponent_1.prototype.isSelectInvalid = function () {
            var _a;
            var invalid = false;
            (_a = this.add) === null || _a === void 0 ? void 0 : _a.forEach(function (add) {
                if (add.select.length < add.additional.min) {
                    invalid = true;
                }
            });
            return invalid;
        };
        // ----------------------------------------------------------//
        MenuComponent_1.prototype.getAttributeList = function (attrs) {
            var _a;
            return (_a = attrs === null || attrs === void 0 ? void 0 : attrs.map(function (attr) { return attr.name; })) === null || _a === void 0 ? void 0 : _a.join(', ');
        };
        MenuComponent_1.prototype.incrementAmount = function (amount) {
            this.cart.increment(amount);
        };
        MenuComponent_1.prototype.decrementAmount = function (amount) {
            this.cart.decrement(amount);
        };
        MenuComponent_1.prototype.navigateToCart = function () {
            this.router.navigate(['cart']);
        };
        return MenuComponent_1;
    }());
    __setFunctionName(_classThis, "MenuComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _sidebar_decorators = [(0, core_1.ViewChild)('sidebar')];
        _add_decorators = [(0, core_1.ViewChildren)('add')];
        _modal_decorators = [(0, core_1.ViewChildren)('modal')];
        __esDecorate(null, null, _sidebar_decorators, { kind: "field", name: "sidebar", static: false, private: false, access: { has: function (obj) { return "sidebar" in obj; }, get: function (obj) { return obj.sidebar; }, set: function (obj, value) { obj.sidebar = value; } }, metadata: _metadata }, _sidebar_initializers, _sidebar_extraInitializers);
        __esDecorate(null, null, _add_decorators, { kind: "field", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; }, set: function (obj, value) { obj.add = value; } }, metadata: _metadata }, _add_initializers, _add_extraInitializers);
        __esDecorate(null, null, _modal_decorators, { kind: "field", name: "modal", static: false, private: false, access: { has: function (obj) { return "modal" in obj; }, get: function (obj) { return obj.modal; }, set: function (obj, value) { obj.modal = value; } }, metadata: _metadata }, _modal_initializers, _modal_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MenuComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MenuComponent = _classThis;
}();
exports.MenuComponent = MenuComponent;
