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
exports.ModalComponent = void 0;
var core_1 = require("@angular/core");
var ModalComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-modal',
            standalone: true,
            imports: [],
            templateUrl: './modal.component.html',
            styleUrl: './modal.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _closeEvent_decorators;
    var _closeEvent_initializers = [];
    var _closeEvent_extraInitializers = [];
    var _active_decorators;
    var _active_initializers = [];
    var _active_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _get_activeClass_decorators;
    var ModalComponent = _classThis = /** @class */ (function () {
        function ModalComponent_1() {
            this.closeEvent = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _closeEvent_initializers, new core_1.EventEmitter()));
            this.active = (__runInitializers(this, _closeEvent_extraInitializers), __runInitializers(this, _active_initializers, false));
            this.title = (__runInitializers(this, _active_extraInitializers), __runInitializers(this, _title_initializers, ''));
            __runInitializers(this, _title_extraInitializers);
        }
        ModalComponent_1.prototype.close = function () {
            this.active = false;
            this.closeEvent.emit();
        };
        Object.defineProperty(ModalComponent_1.prototype, "activeClass", {
            get: function () {
                return this.active;
            },
            enumerable: false,
            configurable: true
        });
        return ModalComponent_1;
    }());
    __setFunctionName(_classThis, "ModalComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _closeEvent_decorators = [(0, core_1.Output)()];
        _active_decorators = [(0, core_1.Input)()];
        _title_decorators = [(0, core_1.Input)()];
        _get_activeClass_decorators = [(0, core_1.HostBinding)('class.active')];
        __esDecorate(_classThis, null, _get_activeClass_decorators, { kind: "getter", name: "activeClass", static: false, private: false, access: { has: function (obj) { return "activeClass" in obj; }, get: function (obj) { return obj.activeClass; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _closeEvent_decorators, { kind: "field", name: "closeEvent", static: false, private: false, access: { has: function (obj) { return "closeEvent" in obj; }, get: function (obj) { return obj.closeEvent; }, set: function (obj, value) { obj.closeEvent = value; } }, metadata: _metadata }, _closeEvent_initializers, _closeEvent_extraInitializers);
        __esDecorate(null, null, _active_decorators, { kind: "field", name: "active", static: false, private: false, access: { has: function (obj) { return "active" in obj; }, get: function (obj) { return obj.active; }, set: function (obj, value) { obj.active = value; } }, metadata: _metadata }, _active_initializers, _active_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ModalComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ModalComponent = _classThis;
}();
exports.ModalComponent = ModalComponent;
