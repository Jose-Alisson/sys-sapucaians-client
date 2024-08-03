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
exports.SidebarComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var SidebarComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-sidebar',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './sidebar.component.html',
            styleUrl: './sidebar.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _side_decorators;
    var _side_initializers = [];
    var _side_extraInitializers = [];
    var _active_decorators;
    var _active_initializers = [];
    var _active_extraInitializers = [];
    var _get_activeClass_decorators;
    var SidebarComponent = _classThis = /** @class */ (function () {
        function SidebarComponent_1() {
            this.side = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _side_initializers, 'left'));
            this.active = (__runInitializers(this, _side_extraInitializers), __runInitializers(this, _active_initializers, false));
            __runInitializers(this, _active_extraInitializers);
        }
        SidebarComponent_1.prototype.toogleActive = function () {
            this.active = !this.active;
        };
        SidebarComponent_1.prototype.getSide = function () {
            return this.side;
        };
        SidebarComponent_1.prototype.setActive = function (active) {
            this.active = active;
        };
        Object.defineProperty(SidebarComponent_1.prototype, "activeClass", {
            get: function () {
                return this.active;
            },
            enumerable: false,
            configurable: true
        });
        return SidebarComponent_1;
    }());
    __setFunctionName(_classThis, "SidebarComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _side_decorators = [(0, core_1.Input)()];
        _active_decorators = [(0, core_1.Input)()];
        _get_activeClass_decorators = [(0, core_1.HostBinding)('class.active')];
        __esDecorate(_classThis, null, _get_activeClass_decorators, { kind: "getter", name: "activeClass", static: false, private: false, access: { has: function (obj) { return "activeClass" in obj; }, get: function (obj) { return obj.activeClass; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _side_decorators, { kind: "field", name: "side", static: false, private: false, access: { has: function (obj) { return "side" in obj; }, get: function (obj) { return obj.side; }, set: function (obj, value) { obj.side = value; } }, metadata: _metadata }, _side_initializers, _side_extraInitializers);
        __esDecorate(null, null, _active_decorators, { kind: "field", name: "active", static: false, private: false, access: { has: function (obj) { return "active" in obj; }, get: function (obj) { return obj.active; }, set: function (obj, value) { obj.active = value; } }, metadata: _metadata }, _active_initializers, _active_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SidebarComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SidebarComponent = _classThis;
}();
exports.SidebarComponent = SidebarComponent;
