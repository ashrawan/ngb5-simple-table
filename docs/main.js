(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*****************************************!*\
  !*** multi ./projects/demo/src/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\BITBUCKET_TEAM_PROJECT\ngb5-simple-table\projects\demo\src\main.ts */"rzic");


/***/ }),

/***/ "1dWg":
/*!*****************************************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/action-template/action-template.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActionTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTemplateComponent", function() { return ActionTemplateComponent; });
/* harmony import */ var ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngb5-simple-table */ "AUie");
/* harmony import */ var _action_template_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-template.model */ "rwpt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../code-showcase/code-showcase.component */ "asB2");







const _c0 = function (a0, a1) { return { "Website": a0, "Additional Details": a1 }; };
function ActionTemplateComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngb5-simple-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "User List")("dataList", ctx_r0.users)("columns", ctx_r0.usersColumnsMap)("staticPagination", true)("actionTemplate", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, _r1, _r3));
} }
function ActionTemplateComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Example Website: ", data_r5.website, "");
} }
function ActionTemplateComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("FullName: ", data_r6.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("Address: ", data_r6 == null ? null : data_r6.address == null ? null : data_r6.address.street, ", ", data_r6 == null ? null : data_r6.address == null ? null : data_r6.address.suite, ", ", data_r6 == null ? null : data_r6.address == null ? null : data_r6.address.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Company: ", data_r6 == null ? null : data_r6.company == null ? null : data_r6.company.name, ", ", data_r6 == null ? null : data_r6.company == null ? null : data_r6.company.catchPhrase, "");
} }
class ActionTemplateComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.users = [];
        this.usersColumnsMap = [
            { id: 1, name: 'id', label: 'SN', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 2, name: 'name', label: 'Full Name', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 3, name: 'username', label: 'UserName', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 4, name: 'address', label: 'Street', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].OBJECT, bindKeys: ['address', 'street'] },
            { id: 5, name: 'phone', label: 'phone', cssClasses: 'badge bg-primary rounded-pill text-uppercase', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
        ];
        // Codes to Highlight
        this.CS_TYPESCRIPT = _action_template_model__WEBPACK_IMPORTED_MODULE_1__["TSATUsersColumn"];
        this.CS_HTML_TEMPLATE = _action_template_model__WEBPACK_IMPORTED_MODULE_1__["TDATUsersHtml"];
        this.CS_JSON_DATA = _action_template_model__WEBPACK_IMPORTED_MODULE_1__["JSONATUsersSample"];
    }
    ngOnInit() {
        this.httpClient.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(data => {
            this.users = data;
        });
    }
}
ActionTemplateComponent.ɵfac = function ActionTemplateComponent_Factory(t) { return new (t || ActionTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ActionTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ActionTemplateComponent, selectors: [["app-action-template"]], decls: 10, vars: 4, consts: [[1, "container"], [1, "text-center"], ["class", "mb-2", 4, "ngIf"], [3, "CS_JSON_DATA", "CS_HTML_TEMPLATE", "CS_TYPESCRIPT"], ["exampleTemplate", ""], ["viewTemplate", ""], [1, "mb-2"], [3, "title", "dataList", "columns", "staticPagination", "actionTemplate"], ["href", "javascript: void(0);", 1, "nav-link"], [1, "border-bottom", "border-2"], [1, "fw-light"]], template: function ActionTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Example: Custom Action Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ActionTemplateComponent_div_3_Template, 2, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-code-showcase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ActionTemplateComponent_ng_template_6_Template, 3, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ActionTemplateComponent_ng_template_8_Template, 7, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.users && ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CS_JSON_DATA", ctx.CS_JSON_DATA)("CS_HTML_TEMPLATE", ctx.CS_HTML_TEMPLATE)("CS_TYPESCRIPT", ctx.CS_TYPESCRIPT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_5__["CodeShowcaseComponent"], ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["Ngb5SimpleTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "2B6q":
/*!************************************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/components/sidebar/sidebar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _home_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home.mode */ "dPKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function SidebarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", navItem_r1.path)("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](navItem_r1.name);
} }
class SidebarComponent {
    constructor() {
        this.APP_ROUTES = _home_mode__WEBPACK_IMPORTED_MODULE_0__["APP_ROUTES"];
        this.navItems = _home_mode__WEBPACK_IMPORTED_MODULE_0__["navItems"];
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 4, vars: 1, consts: [[1, "d-flex", "flex-column", "align-items-center", "align-items-sm-start", "px-3", "pt-2", "min-vh-100", "sticky-top"], ["id", "menu", 1, "nav", "nav-pills", "flex-column", "mb-sm-auto", "mb-0", "align-items-center", "align-items-sm-start"], ["class", "nav-item my-1", 4, "ngFor", "ngForOf"], [1, "nav-item", "my-1"], [1, "nav-link", "align-middle", "px-0", 3, "routerLink", "routerLinkActive"], [1, "ms-1", "d-none", "d-sm-inline", "px-1"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_li_2_Template, 4, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AUie":
/*!***************************************************************************!*\
  !*** ./dist/ngb5-simple-table/__ivy_ngcc__/fesm2015/ngb5-simple-table.js ***!
  \***************************************************************************/
/*! exports provided: ColumnType, Ngb5SimpleTableComponent, Ngb5SimpleTableModule, Ngb5SimpleTableService, SortRotation, TableUI, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnType", function() { return ColumnType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ngb5SimpleTableComponent", function() { return Ngb5SimpleTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ngb5SimpleTableModule", function() { return Ngb5SimpleTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ngb5SimpleTableService", function() { return Ngb5SimpleTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortRotation", function() { return SortRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableUI", function() { return TableUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return StPaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ObjKeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return StColumnSortDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










const _c0 = ["searchInput"];
function Ngb5SimpleTableComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Ngb5SimpleTableComponent_ng_template_2_div_6_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Ngb5SimpleTableComponent_ng_template_2_div_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_template_2_div_6_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
const _c1 = function () { return { standalone: true }; };
function Ngb5SimpleTableComponent_ng_template_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Ngb5SimpleTableComponent_ng_template_2_div_6_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.searchTerm = $event; })("ngModelChange", function Ngb5SimpleTableComponent_ng_template_2_div_6_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.offlineSearchInTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Ngb5SimpleTableComponent_ng_template_2_div_6_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.toggleCaseSensitive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Ngb5SimpleTableComponent_ng_template_2_div_6_ng_container_6_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.searchTerm)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isCaseSensitiveSearch)("ngIfElse", _r3);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_template_7_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_template_2_ng_template_7_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.searchTemplate);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Ngb5SimpleTableComponent_ng_template_2_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 21);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.searchTemplate);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_span_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_span_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_span_4_ng_container_1_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.sortDirection === "asc")("ngIfElse", _r9);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 26);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_Template_th_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.onSortTriggered($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_span_4_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_ng_template_5_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const column_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("direction", ctx_r30.sortDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("column", column_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r29.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.sortColumn.id === column_r29.id)("ngIfElse", _r32);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_template_2_ng_container_13_th_1_Template, 7, 5, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !column_r29.hide);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const key_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r40 === 0 ? "border-left-separator" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", key_r39, "");
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "objKeys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](column_r46.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, column_r46.cssValueMap).length > 0 ? column_r46.cssValueMap[item_r42[column_r46.name]] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, item_r42[column_r46.name]), "");
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "objKeys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](column_r46.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, column_r46.cssValueMap).length > 0 ? column_r46.cssValueMap[item_r42[column_r46.name]] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r50.getObjValueFromPath(item_r42, column_r46.bindKeys), "");
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "objKeys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](column_r46.cssClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, column_r46.cssValueMap).length > 0 ? column_r46.cssValueMap[item_r42[column_r46.name]] : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r42[column_r46.name] != null ? item_r42[column_r46.name] : "---", "");
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_ng_container_2_Template, 6, 9, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_ng_container_3_Template, 5, 7, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_ng_container_4_Template, 5, 7, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", column_r46.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r48.ColumnType.DATE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r48.ColumnType.OBJECT);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !column_r46.hide);
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const key_r59 = ctx.$implicit;
    const i_r60 = ctx.index;
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](i_r60 === 0 ? "border-left-separator" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r45.actionTemplate[key_r59])("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, item_r42));
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_ng_container_3_Template, 3, 6, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "objKeys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r41.actionTemplate));
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_ng_container_1_Template, 5, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", !ctx_r16.staticPagination ? ctx_r16.dataList : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r16.dataList, (ctx_r16.currentPage - 1) * ctx_r16.pageSize, ctx_r16.currentPage * ctx_r16.pageSize));
} }
function Ngb5SimpleTableComponent_ng_template_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r18.noDataColumnCount);
} }
function Ngb5SimpleTableComponent_ng_template_2_div_20_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pp_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pp_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pp_r64, " per Page ");
} }
function Ngb5SimpleTableComponent_ng_template_2_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "lib-st-pagination", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Ngb5SimpleTableComponent_ng_template_2_div_20_Template_lib_st_pagination_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.currentPage = $event; })("pageChanged", function Ngb5SimpleTableComponent_ng_template_2_div_20_Template_lib_st_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.onPageChangeTriggered($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Ngb5SimpleTableComponent_ng_template_2_div_20_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.pageSize = $event; })("ngModelChange", function Ngb5SimpleTableComponent_ng_template_2_div_20_Template_select_ngModelChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.onPageSizeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Ngb5SimpleTableComponent_ng_template_2_div_20_option_4_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r19.totalElements)("ngModel", ctx_r19.currentPage)("itemsPerPage", ctx_r19.pageSize)("maxSize", 10)("rotate", true)("boundaryLinks", ctx_r19.boundaryLinks)("directionLinks", ctx_r19.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.perPageOptions);
} }
const _c3 = function (a1, a2, a3) { return { "table": true, "table-bordered": a1, "table-hover": a2, "table-striped": a3 }; };
function Ngb5SimpleTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Ngb5SimpleTableComponent_ng_template_2_div_6_Template, 7, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Ngb5SimpleTableComponent_ng_template_2_ng_template_7_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Ngb5SimpleTableComponent_ng_template_2_ng_container_13_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, Ngb5SimpleTableComponent_ng_template_2_ng_container_14_Template, 4, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "objKeys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Ngb5SimpleTableComponent_ng_template_2_ng_container_17_Template, 3, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Ngb5SimpleTableComponent_ng_template_2_ng_template_18_Template, 3, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Ngb5SimpleTableComponent_ng_template_2_div_20_Template, 5, 9, "div", 17);
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.staticPagination)("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-responsive", ctx_r2.tableUI.tableResponsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.tableUI.additionalCSSClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](16, _c3, ctx_r2.tableUI.tableBordered, ctx_r2.tableUI.tableHover, ctx_r2.tableUI.tableStripped));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, ctx_r2.actionTemplate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.dataList && ctx_r2.dataList.length > 0)("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.totalElements > 0);
} }
function Ngb5SimpleTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Ngb5SimpleTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Ngb5SimpleTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Ngb5SimpleTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function StPaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StPaginationComponent_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectPage(1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c4, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
} }
function StPaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StPaginationComponent_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectPage(ctx_r17.page - 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c4, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
} }
const _c5 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function StPaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StPaginationComponent_li_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const pg_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectPage(pg_r19.number, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c5, ctx_r2.disabled, pg_r19, ctx_r2.page));
} }
function StPaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StPaginationComponent_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selectPage(ctx_r22.page + 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c4, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
} }
function StPaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StPaginationComponent_li_5_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectPage(ctx_r24.totalPages, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c4, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
} }
function StPaginationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const page_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
} }
function StPaginationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u00BB");
} }
function StPaginationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u00AB");
} }
function StPaginationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u00AB\u00BB");
} }
function StPaginationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u00BB\u00BB");
} }
class Ngb5SimpleTableService {
    constructor() { }
}
Ngb5SimpleTableService.ɵfac = function Ngb5SimpleTableService_Factory(t) { return new (t || Ngb5SimpleTableService)(); };
Ngb5SimpleTableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function Ngb5SimpleTableService_Factory() { return new Ngb5SimpleTableService(); }, token: Ngb5SimpleTableService, providedIn: "root" });
Ngb5SimpleTableService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ngb5SimpleTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const SortRotation = { asc: 'desc', desc: 'asc' };
var ColumnType;
(function (ColumnType) {
    ColumnType["STRING"] = "string";
    ColumnType["NUMBER"] = "number";
    ColumnType["DATE"] = "date";
    ColumnType["LINK"] = "link";
    ColumnType["OBJECT"] = "OBJECT";
    ColumnType["OTHER"] = "other";
})(ColumnType || (ColumnType = {}));
// Table Display Properties
class TableUI {
    constructor() {
        this.tableBordered = true;
        this.tableResponsive = true;
        this.tableHover = true;
        this.tableStripped = true;
        this.additionalCSSClass = '';
        // TODO Pagination Display Config
    }
}

class Ngb5SimpleTableComponent {
    constructor(changeDetection) {
        this.changeDetection = changeDetection;
        this.ColumnType = ColumnType;
        this.title = '';
        this.dataList = [];
        this.totalElements = 0; // Not required if "staticPagination = true"
        // Optional Fields
        this.pageSize = 5;
        this.perPageOptions = [5, 20, 50];
        /**
         * with staticPagination = true: Performs Client side pagination, No dynamic data fetch required,
         * But Emtited values are still available
         * Pgination is done on the full "dataList" using slicing operation
         */
        this.staticPagination = false;
        // ===== Optional UI Display ===========
        this.tableUI = new TableUI();
        // Pagination Fields. TODO: Create NgbNavigationConfig interface and populate pagination fields
        this.boundaryLinks = false; // false: first and last buttons will be hidden
        this.directionLinks = true; // false: previous and next buttons will be hidden
        // Output
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tableStateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentPage = 1;
        this.sortDirection = 'asc';
        this.searchTerm = '';
        this.isCaseSensitiveSearch = false;
        this.tempFullDataList = []; // temp full data list for "staticPagination"
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.initializeDefaultValues();
    }
    initializeDefaultValues() {
        var _a, _b, _c;
        if (this.dataList === null || this.dataList === undefined) {
            this.dataList = [];
        }
        if (this.dataList.length <= 0) {
            const actionTemplateKeysCount = this.actionTemplate ? (_a = Object.keys(this.actionTemplate)) === null || _a === void 0 ? void 0 : _a.length : 0;
            this.noDataColumnCount = ((_b = this.columns) === null || _b === void 0 ? void 0 : _b.length) || 0 + actionTemplateKeysCount;
        }
        if (this.staticPagination) {
            this.tempFullDataList = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.dataList);
            this.totalElements = this.dataList.length;
        }
        if ((((_c = this.columns) === null || _c === void 0 ? void 0 : _c.length) > 0) && !(this.sortColumnName && this.sortColumnName.length > 0)) {
            this.sortColumn = this.columns[0];
            this.sortColumnName = this.columns[0].name;
        }
        this.changeDetection.detectChanges();
    }
    onSortTriggered(sortEvent) {
        // console.log('onSortTriggered ', sortEvent);
        this.sortColumn = sortEvent.column;
        this.sortColumnName = sortEvent.column.name;
        this.sortDirection = sortEvent.direction;
        if (this.staticPagination) {
            const dataList = this.dataList.sort((a, b) => this.compareForSort(a, b));
            this.dataList = this.sortDirection === 'asc' ? dataList : dataList.reverse();
        }
        this.sort.emit(sortEvent);
        this.prepareAndEmitTableStateEvent();
    }
    compareForSort(a, b) {
        const columnName = this.sortColumn.name;
        let firstColumnValue = a[columnName];
        let secondColumnValue = b[columnName];
        if (this.sortColumn.type === ColumnType.OBJECT) {
            firstColumnValue = this.getObjValueFromPath(a, this.sortColumn.bindKeys);
            secondColumnValue = this.getObjValueFromPath(b, this.sortColumn.bindKeys);
        }
        if (firstColumnValue === secondColumnValue) {
            return 0;
        }
        return firstColumnValue > secondColumnValue ? 1 : -1;
    }
    onPageChangeTriggered($event) {
        // console.log('onPageChangeTriggered ', this.currentPage);
        this.pageChange.emit(this.currentPage);
        this.prepareAndEmitTableStateEvent();
    }
    onPageSizeChange() {
        // console.log('onPageSizeChange ', this.pageSize);
        this.prepareAndEmitTableStateEvent();
    }
    prepareAndEmitTableStateEvent() {
        const tableStateEvent = {
            sortEvent: { column: this.sortColumn, direction: this.sortDirection },
            pageNo: this.currentPage,
            pageSize: this.pageSize,
        };
        // console.log('emitting table state event ', tableStateEvent);
        this.changeDetection.detectChanges();
        this.tableStateEvent.emit(tableStateEvent);
    }
    toggleCaseSensitive() {
        var _a, _b;
        this.isCaseSensitiveSearch = !this.isCaseSensitiveSearch;
        this.offlineSearchInTable();
        (_b = (_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.focus();
    }
    offlineSearchInTable() {
        if (this.searchTerm && this.searchTerm.length > 0) {
            const searchTerm = this.searchTerm;
            const filteredDataList = this.tempFullDataList.filter(obj => {
                // check if present in any object value
                let hasMatch = false;
                for (const column of this.columns) {
                    let hasSearchTerm = false;
                    if (column.type === ColumnType.OBJECT) {
                        const value = this.getObjValueFromPath(obj, column.bindKeys) || '';
                        hasSearchTerm = this.checkIfIncludesTerm(value, searchTerm);
                    }
                    else {
                        const value = obj[column.name] || '';
                        hasSearchTerm = this.checkIfIncludesTerm(value.toString(), searchTerm);
                    }
                    hasMatch = hasSearchTerm;
                    if (hasMatch) {
                        break;
                    }
                }
                return hasMatch;
            });
            this.dataList = filteredDataList;
        }
        else {
            this.dataList = this.tempFullDataList;
        }
        this.changeDetection.detectChanges();
    }
    checkIfIncludesTerm(value, term) {
        if (this.isCaseSensitiveSearch) {
            return value.includes(term);
        }
        return value.toLowerCase().includes(term.toLowerCase());
    }
    getObjValueFromPath(object, path) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(object, path);
    }
}
Ngb5SimpleTableComponent.ɵfac = function Ngb5SimpleTableComponent_Factory(t) { return new (t || Ngb5SimpleTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Ngb5SimpleTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Ngb5SimpleTableComponent, selectors: [["ngb5-simple-table"]], viewQuery: function Ngb5SimpleTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, inputs: { title: "title", dataList: "dataList", totalElements: "totalElements", pageSize: "pageSize", perPageOptions: "perPageOptions", staticPagination: "staticPagination", tableUI: "tableUI", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", sortColumnName: "sortColumnName", columns: "columns", searchTemplate: "searchTemplate", actionTemplate: "actionTemplate" }, outputs: { sort: "sort", pageChange: "pageChange", tableStateEvent: "tableStateEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 1, consts: [[1, "row"], [4, "ngTemplateOutlet"], ["tableContent", ""], ["caseSensitiveFALSE", ""], ["caseSensitiveTRUE", ""], ["sortAlphaDown", ""], ["sortAlphaDownAlt", ""], [1, "row", "my-1"], [1, "col-auto", "me-auto"], [1, "st-table-title"], [1, "col-auto"], ["class", "row", 4, "ngIf", "ngIfElse"], ["customSearchTemplate", ""], [3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], ["class", "d-flex justify-content-end", 4, "ngIf"], ["type", "text", "id", "search", "placeholder", "Search", "required", "", 1, "form-control", "border", "border-3", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["searchInput", ""], [1, "fs-3", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["style", "cursor: pointer", "scope", "col", "libStColumnSort", "", 3, "column", "direction", "sort", 4, "ngIf"], ["scope", "col", "libStColumnSort", "", 2, "cursor", "pointer", 3, "column", "direction", "sort"], [1, "px-1"], ["defaultSort", ""], [1, "pe-3"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-danger", "text-center"], [1, "d-flex", "justify-content-end"], [3, "totalItems", "ngModel", "itemsPerPage", "maxSize", "rotate", "boundaryLinks", "directionLinks", "ngModelChange", "pageChanged"], [1, "d-flex", "align-items-center", "mb-3", "ms-3"], ["name", "pageSize", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-badge-cc"], ["d", "M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z"], ["d", "M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-badge-cc-fill"], ["d", "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108zm6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-sort-alpha-down"], ["fill-rule", "evenodd", "d", "M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"], ["d", "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-sort-alpha-down-alt"], ["d", "M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"], ["fill-rule", "evenodd", "d", "M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"], ["d", "M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"]], template: function Ngb5SimpleTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Ngb5SimpleTableComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Ngb5SimpleTableComponent_ng_template_2_Template, 21, 20, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Ngb5SimpleTableComponent_ng_template_4_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Ngb5SimpleTableComponent_ng_template_6_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Ngb5SimpleTableComponent_ng_template_8_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Ngb5SimpleTableComponent_ng_template_10_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], StColumnSortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], StPaginationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]]; }, pipes: function () { return [ObjKeysPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]; }, encapsulation: 2 });
Ngb5SimpleTableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
Ngb5SimpleTableComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    perPageOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortColumnName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    searchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    actionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    staticPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tableUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tableStateEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['searchInput',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ngb5SimpleTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngb5-simple-table',
                template: "<div class=\"row\">\r\n    <ng-container *ngTemplateOutlet=\"tableContent\"></ng-container>\r\n  </div>\r\n  \r\n  <ng-template #tableContent>\r\n  \r\n    <ng-container>\r\n      <div class=\"row my-1\">\r\n        <div class=\"col-auto me-auto\"><h3 class=\"st-table-title\">{{title}}</h3></div>\r\n        <div class=\"col-auto\">\r\n  \r\n          <div *ngIf=\"staticPagination else customSearchTemplate\" class=\"row\">\r\n            <div class=\"col-auto me-auto\">\r\n              <input #searchInput type=\"text\" class=\"form-control border border-3\" id=\"search\"\r\n                     placeholder=\"Search\"\r\n                     [(ngModel)]=\"searchTerm\"\r\n                     (ngModelChange)=\"offlineSearchInTable()\"\r\n                     [ngModelOptions]=\"{standalone: true}\"\r\n                     required/>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <div class=\"fs-3\" style=\"cursor: pointer\" (click)=\"toggleCaseSensitive()\">\r\n                <ng-container *ngIf=\"isCaseSensitiveSearch; else caseSensitiveFALSE\">\r\n                  <ng-container *ngTemplateOutlet=\"caseSensitiveTRUE\"></ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <ng-template #customSearchTemplate>\r\n            <!-- Custom server side search template  -->\r\n            <ng-container *ngIf=\"searchTemplate\">\r\n              <ng-container *ngTemplateOutlet=\"searchTemplate\"></ng-container>\r\n            </ng-container>\r\n          </ng-template>\r\n  \r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  \r\n    <div [class.table-responsive]=\"tableUI.tableResponsive\">\r\n      <table [ngClass]=\"{'table': true, 'table-bordered': tableUI.tableBordered, 'table-hover': tableUI.tableHover, 'table-striped': tableUI.tableStripped}\"\r\n      class=\"{{tableUI.additionalCSSClass}}\">\r\n        <thead>\r\n          <tr>\r\n    \r\n            <ng-container *ngFor=\"let column of columns\">\r\n              <th style=\"cursor: pointer\" *ngIf=\"!column.hide\" scope=\"col\" libStColumnSort [column]=\"column\"\r\n                  direction=\"{{sortDirection}}\" (sort)=\"onSortTriggered($event)\">\r\n                <span>{{column.label}}</span>\r\n                <span class=\"px-1\">\r\n                  <span *ngIf=\"sortColumn.id === column.id; else defaultSort\">\r\n                    <ng-container *ngIf=\"sortDirection === 'asc'; else sortAlphaDownAlt\">\r\n                      <ng-container *ngTemplateOutlet=\"sortAlphaDown\"></ng-container>\r\n                    </ng-container>\r\n                  </span>\r\n                  <ng-template #defaultSort><span class=\"pe-3\"></span></ng-template>\r\n                </span>\r\n              </th>\r\n            </ng-container>\r\n    \r\n            <ng-container *ngFor=\"let key of actionTemplate | objKeys; let i = index;\">\r\n              <th [class]=\"i === 0 ? 'border-left-separator': ''\"><span> {{ key }}</span></th>\r\n            </ng-container>\r\n    \r\n          </tr>\r\n        </thead>\r\n  \r\n        <tbody>\r\n  \r\n        <ng-container *ngIf=\"dataList && dataList.length > 0 else noDataTemplate\">\r\n          <ng-container *ngFor=\"let item of (!staticPagination ? dataList : (dataList | slice: (currentPage-1) * pageSize : currentPage * pageSize ) );\r\n          let i = index\">\r\n            <tr>\r\n  \r\n              <ng-container *ngFor=\"let column of columns; let i = index\">\r\n                <!-- Columns Data Display STARTS -->\r\n                <ng-container *ngIf=\"!column.hide\">\r\n                  <ng-container [ngSwitch]=\"column.type\">\r\n  \r\n                    <ng-container *ngSwitchCase=\"ColumnType.DATE\">\r\n                      <td>\r\n                      <span class=\"{{column.cssClasses}}\"\r\n                            [ngClass]=\"(column.cssValueMap | objKeys ).length > 0 ? column.cssValueMap[item[column.name]] : '' \">\r\n                        {{item[column.name] | date}}</span>\r\n                      </td>\r\n                    </ng-container>\r\n  \r\n                    <ng-container *ngSwitchCase=\"ColumnType.OBJECT\">\r\n                      <td>\r\n                      <span class=\"{{column.cssClasses}}\"\r\n                            [ngClass]=\"(column.cssValueMap | objKeys ).length > 0 ? column.cssValueMap[item[column.name]] : '' \">\r\n                        {{getObjValueFromPath(item, column.bindKeys)}}</span>\r\n                      </td>\r\n                    </ng-container>\r\n  \r\n                    <ng-container *ngSwitchDefault>\r\n                      <td>\r\n                      <span\r\n                        class=\"{{column.cssClasses}}\"\r\n                        [ngClass]=\"(column.cssValueMap | objKeys ).length > 0 ? column.cssValueMap[item[column.name]] : '' \">\r\n                      {{item[column.name] != null ? item[column.name] : '---'}}</span>\r\n                      </td>\r\n                    </ng-container>\r\n  \r\n                  </ng-container>\r\n                </ng-container>\r\n                <!-- Columns Data Display END -->\r\n              </ng-container>\r\n  \r\n              <!-- Any Passed Action Templates  -->\r\n              <ng-container *ngFor=\"let key of actionTemplate | objKeys; let i = index;\">\r\n                <td [class]=\"i === 0 ? 'border-left-separator': ''\">\r\n                  <ng-container *ngTemplateOutlet=\"actionTemplate[key]; context: {$implicit: item}\"></ng-container>\r\n                </td>\r\n              </ng-container>\r\n  \r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n  \r\n        <ng-template #noDataTemplate>\r\n          <tr>\r\n            <td [attr.colspan]=\"noDataColumnCount\" class=\"text-danger text-center\">\r\n              <span>  </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n  \r\n        </tbody>\r\n      </table>\r\n  \r\n    </div>\r\n  \r\n    <!-- Pagination Block  -->\r\n    <div *ngIf=\"totalElements > 0\" class=\"d-flex justify-content-end\">\r\n  \r\n      <lib-st-pagination [totalItems]=\"totalElements\"\r\n                         [(ngModel)]=\"currentPage\"\r\n                         [itemsPerPage]=\"pageSize\"\r\n                         [maxSize]=\"10\"\r\n                         [rotate]=\"true\"\r\n                         [boundaryLinks]=\"boundaryLinks\"\r\n                         [directionLinks]=\"directionLinks\"\r\n                         (pageChanged)=\"onPageChangeTriggered($event)\">\r\n      </lib-st-pagination>\r\n  \r\n      <div class=\"d-flex align-items-center mb-3 ms-3\">\r\n        <select class=\"form-select\" name=\"pageSize\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"onPageSizeChange()\">\r\n            <option *ngFor=\"let pp of perPageOptions\" [ngValue]=\"pp\">\r\n                {{pp}} per Page\r\n            </option>\r\n        </select>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  </ng-template>\r\n\r\n\r\n<!-- Required Icons SVG: SortA-Z, SortZ-A, Case Sensitive (Used from bootstrap-icons) -->\r\n\r\n<ng-template #caseSensitiveFALSE>\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-badge-cc\" viewBox=\"0 0 16 16\">\r\n    <path d=\"M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z\"/>\r\n    <path d=\"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z\"/>\r\n  </svg>\r\n</ng-template>\r\n\r\n<ng-template #caseSensitiveTRUE>\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"currentColor\" class=\"bi bi-badge-cc-fill\" viewBox=\"0 0 16 16\">\r\n    <path d=\"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108zm6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z\"/>\r\n  </svg>\r\n</ng-template>\r\n\r\n<ng-template #sortAlphaDown>\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-sort-alpha-down\" viewBox=\"0 0 16 16\">\r\n    <path fill-rule=\"evenodd\" d=\"M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z\"/>\r\n    <path d=\"M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z\"/>\r\n  </svg>\r\n</ng-template>\r\n\r\n<ng-template #sortAlphaDownAlt>\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-sort-alpha-down-alt\" viewBox=\"0 0 16 16\">\r\n    <path d=\"M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z\"/>\r\n    <path fill-rule=\"evenodd\" d=\"M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z\"/>\r\n    <path d=\"M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z\"/>\r\n  </svg>\r\n</ng-template>"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], perPageOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], staticPagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tableUI: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tableStateEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sortColumnName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], actionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }] }); })();

class ObjKeysPipe {
    transform(value, ...args) {
        if (value === null || value === undefined) {
            return [];
        }
        return Object.keys(value);
    }
}
ObjKeysPipe.ɵfac = function ObjKeysPipe_Factory(t) { return new (t || ObjKeysPipe)(); };
ObjKeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "objKeys", type: ObjKeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjKeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'objKeys'
            }]
    }], null, null); })();

class StColumnSortDirective {
    constructor() {
        this.direction = 'asc';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isAscending() {
        return this.direction === 'asc';
    }
    get isDescending() {
        return this.direction === 'desc';
    }
    rotate() {
        this.direction = SortRotation[this.direction];
        const sortEvent = { column: this.column, direction: this.direction };
        this.sort.emit(sortEvent);
    }
}
StColumnSortDirective.ɵfac = function StColumnSortDirective_Factory(t) { return new (t || StColumnSortDirective)(); };
StColumnSortDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StColumnSortDirective, selectors: [["th", "libStColumnSort", ""]], hostVars: 4, hostBindings: function StColumnSortDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StColumnSortDirective_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.isAscending)("desc", ctx.isDescending);
    } }, inputs: { direction: "direction", column: "column" }, outputs: { sort: "sort" } });
StColumnSortDirective.propDecorators = {
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isAscending: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.asc',] }],
    isDescending: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.desc',] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StColumnSortDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'th[libStColumnSort]'
            }]
    }], function () { return []; }, { direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isAscending: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.asc']
        }], isDescending: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.desc']
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => StPaginationComponent),
    multi: true
};
/**
 * Referenced taken from package ngx-bootstrap to create this pagination Component class.
 */
class StPaginationComponent {
    constructor(changeDetection) {
        this.changeDetection = changeDetection;
        /** if `true` aligns each link to the sides of pager */
        this.align = true;
        /** if false first and last buttons will be hidden */
        this.boundaryLinks = false;
        /** if false previous and next buttons will be hidden */
        this.directionLinks = true;
        /** if true current page will in the middle of pages list */
        this.rotate = true;
        // css
        /** add class to <code><li\></code> */
        this.pageBtnClass = '';
        /** if true pagination component will be disabled */
        this.disabled = false;
        /** custom template for page link */
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.classMap = '';
        this.inited = false;
        this._itemsPerPage = 10;
        this._totalItems = 0;
        this._totalPages = 0;
        this._page = 1;
    }
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /** total number of items in all pages */
    get totalItems() {
        return this._totalItems;
    }
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
        return this._totalPages;
    }
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    get page() {
        return this._page;
    }
    set page(value) {
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    ngOnInit() {
        // watch for maxSize
        if (typeof this.maxSize === 'undefined') {
            this.maxSize = 0;
        }
        if (typeof this.rotate === 'undefined') {
            this.rotate = false;
        }
        if (typeof this.boundaryLinks === 'undefined') {
            this.boundaryLinks = true;
        }
        if (typeof this.directionLinks === 'undefined') {
            this.directionLinks = true;
        }
        if (typeof this.pageBtnClass === 'undefined') {
            this.pageBtnClass = '';
        }
        // base class
        if (typeof this.itemsPerPage === 'undefined') {
            this.itemsPerPage = 0;
        }
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this[`${key}Text`] || this.config[`${key}Text`];
    }
    noPrevious() {
        return this.page === 1;
    }
    noNext() {
        return this.page === this.totalPages;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized && this.maxSize) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    calculateTotalPages() {
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
StPaginationComponent.ɵfac = function StPaginationComponent_Factory(t) { return new (t || StPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
StPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StPaginationComponent, selectors: [["lib-st-pagination"]], inputs: { align: "align", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function StPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StPaginationComponent_li_1_Template, 3, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StPaginationComponent_li_2_Template, 3, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StPaginationComponent_li_3_Template, 3, 10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StPaginationComponent_li_4_Template, 3, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StPaginationComponent_li_5_Template, 3, 7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StPaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StPaginationComponent_ng_template_8_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StPaginationComponent_ng_template_10_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StPaginationComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StPaginationComponent_ng_template_14_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
StPaginationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
StPaginationComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lib-st-pagination',
                template: "\n<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"defaultFirstTemplate\"\n                    [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"defaultPreviousTemplate\"\n                    [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"defaultPageTemplate\"\n                    [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"defaultNextTemplate\"\n                    [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"defaultLastTemplate\"\n                    [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>&raquo;</ng-template>\n\n<ng-template #defaultPreviousTemplate>&laquo;</ng-template>\n\n<ng-template #defaultFirstTemplate>&laquo;&raquo;</ng-template>\n\n<ng-template #defaultLastTemplate>&raquo;&raquo;</ng-template>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class Ngb5SimpleTableModule {
}
Ngb5SimpleTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ngb5SimpleTableModule });
Ngb5SimpleTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Ngb5SimpleTableModule_Factory(t) { return new (t || Ngb5SimpleTableModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ngb5SimpleTableModule, { declarations: function () { return [StPaginationComponent, ObjKeysPipe, StColumnSortDirective, Ngb5SimpleTableComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]; }, exports: function () { return [Ngb5SimpleTableComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ngb5SimpleTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    StPaginationComponent,
                    ObjKeysPipe,
                    StColumnSortDirective,
                    Ngb5SimpleTableComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ],
                exports: [Ngb5SimpleTableComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngb5-simple-table
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ "GSCO":
/*!***************************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/custom-css/custom-css.model.ts ***!
  \***************************************************************************/
/*! exports provided: TSUserslist, TDUserHtml, JSONUserSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSUserslist", function() { return TSUserslist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDUserHtml", function() { return TDUserHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONUserSample", function() { return JSONUserSample; });
const TSUserslist = `
  todoColumns: Column[] = [
  {id: 1, name: 'id', label: 'SN', type: ColumnType.STRING},
  {id: 2, name: 'name', label: 'Full Name', type: ColumnType.STRING},
  {id: 3, name: 'username', label: 'UserName', type: ColumnType.STRING},
  {id: 4, name: 'address', label: 'Street', type: ColumnType.OBJECT, bindKeys: ['address', 'street']},
  {id: 5, name: 'phone', label: 'phone', cssClasses: 'badge rounded-pill text-uppercase', type: ColumnType.STRING},
  ];`;
const TDUserHtml = `
    <ngb5-simple-table
        [title]="'Users List'"
        [dataList]="users"
        [columns]="usersColumnsMap"
        [staticPagination]="true">
    </ngb5-simple-table>`;
const JSONUserSample = `
 users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
    },
    "phone": "1-770-736-8031 x56442"
  },
    ...,
    ...,
]`;


/***/ }),

/***/ "H5HQ":
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.module.ts ***!
  \*********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngb5_simple_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngb5-simple-table */ "AUie");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "Z/5Z");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "NO+I");
/* harmony import */ var _home_wrapper_simple_simple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-wrapper/simple/simple.component */ "jiZs");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/highlight.service */ "KO0L");
/* harmony import */ var _home_wrapper_home_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-wrapper/home-wrapper.component */ "IrNs");
/* harmony import */ var _home_wrapper_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-wrapper/components/sidebar/sidebar.component */ "2B6q");
/* harmony import */ var _home_wrapper_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-wrapper/home-page/home-page.component */ "TAg2");
/* harmony import */ var _home_wrapper_custom_css_custom_css_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-wrapper/custom-css/custom-css.component */ "ST9g");
/* harmony import */ var _home_wrapper_action_template_action_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-wrapper/action-template/action-template.component */ "1dWg");
/* harmony import */ var _home_wrapper_code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-wrapper/code-showcase/code-showcase.component */ "asB2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_highlight_service__WEBPACK_IMPORTED_MODULE_5__["HighlightService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngb5_simple_table__WEBPACK_IMPORTED_MODULE_1__["Ngb5SimpleTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_wrapper_simple_simple_component__WEBPACK_IMPORTED_MODULE_4__["SimpleComponent"],
        _home_wrapper_home_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["HomeWrapperComponent"],
        _home_wrapper_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
        _home_wrapper_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
        _home_wrapper_custom_css_custom_css_component__WEBPACK_IMPORTED_MODULE_9__["CustomCssComponent"],
        _home_wrapper_action_template_action_template_component__WEBPACK_IMPORTED_MODULE_10__["ActionTemplateComponent"],
        _home_wrapper_code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_11__["CodeShowcaseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngb5_simple_table__WEBPACK_IMPORTED_MODULE_1__["Ngb5SimpleTableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]] }); })();


/***/ }),

/***/ "IrNs":
/*!**********************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/home-wrapper.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomeWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWrapperComponent", function() { return HomeWrapperComponent; });
/* harmony import */ var _home_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.mode */ "dPKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "2B6q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeWrapperComponent {
    constructor() {
        this.APP_ROUTES = _home_mode__WEBPACK_IMPORTED_MODULE_0__["APP_ROUTES"];
    }
    ngOnInit() {
    }
}
HomeWrapperComponent.ɵfac = function HomeWrapperComponent_Factory(t) { return new (t || HomeWrapperComponent)(); };
HomeWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeWrapperComponent, selectors: [["app-home-wrapper"]], decls: 12, vars: 1, consts: [[1, "navbar", "navbar-light", "main-navbar"], [1, "container-fluid"], [1, "navbar-brand", "fw-bold", "fs-4", "text-white", 3, "href"], ["target", "_blank", "href", "http://github.com/ashrawan/ngb5-simple-table", 1, "nav-link", "border", "border-2", "ms-auto"], [1, "row", "flex-nowrap"], [1, "col-auto", "col-md-3", "col-xl-2", "px-sm-2", "px-0", "dash-sidebar"], [1, "col", "py-4", "px-md-4"]], template: function HomeWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ngb5SimpleTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.APP_ROUTES.SIMPLE_TABLE, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "KO0L":
/*!*************************************************************!*\
  !*** ./projects/demo/src/app/services/highlight.service.ts ***!
  \*************************************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "wZee");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "45FF");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "c2Kr");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-css */ "ZgVT");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "QWvX");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-java */ "ki2X");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-markup */ "bPOv");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "XIHC");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-sass */ "eWXi");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-scss */ "hnpa");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_11__);


// import 'clipboard';











class HighlightService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    highlightAll() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    }
}
HighlightService.ɵfac = function HighlightService_Factory(t) { return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HighlightService, factory: HighlightService.ɵfac });


/***/ }),

/***/ "NO+I":
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ST9g":
/*!*******************************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/custom-css/custom-css.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomCssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCssComponent", function() { return CustomCssComponent; });
/* harmony import */ var ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngb5-simple-table */ "AUie");
/* harmony import */ var _custom_css_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-css.model */ "GSCO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../code-showcase/code-showcase.component */ "asB2");







function CustomCssComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngb5-simple-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "User List")("dataList", ctx_r0.users)("columns", ctx_r0.usersColumnsMap)("staticPagination", true);
} }
class CustomCssComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.users = [];
        this.usersColumnsMap = [
            { id: 1, name: 'id', label: 'SN', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 2, name: 'name', label: 'Full Name', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 3, name: 'username', label: 'UserName', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 4, name: 'address', label: 'Street', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].OBJECT, bindKeys: ['address', 'street'] },
            { id: 5, name: 'phone', label: 'phone', cssClasses: 'badge bg-primary rounded-pill text-uppercase', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
        ];
        // Codes to Highlight
        this.CS_TYPESCRIPT = _custom_css_model__WEBPACK_IMPORTED_MODULE_1__["TSUserslist"];
        this.CS_HTML_TEMPLATE = _custom_css_model__WEBPACK_IMPORTED_MODULE_1__["TDUserHtml"];
        this.CS_JSON_DATA = _custom_css_model__WEBPACK_IMPORTED_MODULE_1__["JSONUserSample"];
    }
    ngOnInit() {
        this.httpClient.get('https://jsonplaceholder.typicode.com/users')
            .subscribe(data => {
            this.users = data;
        });
    }
}
CustomCssComponent.ɵfac = function CustomCssComponent_Factory(t) { return new (t || CustomCssComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CustomCssComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomCssComponent, selectors: [["app-custom-css"]], decls: 6, vars: 4, consts: [[1, "container"], [1, "text-center"], ["class", "mb-2", 4, "ngIf"], [3, "CS_JSON_DATA", "CS_HTML_TEMPLATE", "CS_TYPESCRIPT"], [1, "mb-2"], [3, "title", "dataList", "columns", "staticPagination"]], template: function CustomCssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Examples: Object Binding and CSS append");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CustomCssComponent_div_3_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-code-showcase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.users && ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CS_JSON_DATA", ctx.CS_JSON_DATA)("CS_HTML_TEMPLATE", ctx.CS_HTML_TEMPLATE)("CS_TYPESCRIPT", ctx.CS_TYPESCRIPT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_5__["CodeShowcaseComponent"], ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["Ngb5SimpleTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tY3NzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "TAg2":
/*!*****************************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/home-page/home-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 2, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Z/5Z":
/*!*****************************************************!*\
  !*** ./projects/demo/src/app/app-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_wrapper_simple_simple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-wrapper/simple/simple.component */ "jiZs");
/* harmony import */ var _home_wrapper_home_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-wrapper/home-wrapper.component */ "IrNs");
/* harmony import */ var _home_wrapper_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-wrapper/home-page/home-page.component */ "TAg2");
/* harmony import */ var _home_wrapper_custom_css_custom_css_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-wrapper/custom-css/custom-css.component */ "ST9g");
/* harmony import */ var _home_wrapper_action_template_action_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-wrapper/action-template/action-template.component */ "1dWg");
/* harmony import */ var _home_wrapper_home_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-wrapper/home.mode */ "dPKN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: '',
        component: _home_wrapper_home_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["HomeWrapperComponent"],
        children: [
            { path: '', component: _home_wrapper_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
            { path: _home_wrapper_home_mode__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].SIMPLE_TABLE, component: _home_wrapper_simple_simple_component__WEBPACK_IMPORTED_MODULE_1__["SimpleComponent"] },
            { path: _home_wrapper_home_mode__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].CUSTOM_CSS, component: _home_wrapper_custom_css_custom_css_component__WEBPACK_IMPORTED_MODULE_4__["CustomCssComponent"] },
            { path: _home_wrapper_home_mode__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].ACTION_TEMPLATE, component: _home_wrapper_action_template_action_template_component__WEBPACK_IMPORTED_MODULE_5__["ActionTemplateComponent"] },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZcuK":
/*!*******************************************************!*\
  !*** ./projects/demo/src/environments/environment.ts ***!
  \*******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "asB2":
/*!*************************************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/code-showcase/code-showcase.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CodeShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeShowcaseComponent", function() { return CodeShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/highlight.service */ "KO0L");


class CodeShowcaseComponent {
    constructor(highlightService) {
        this.highlightService = highlightService;
        // Codes to Highlight
        this.CS_TYPESCRIPT = ``;
        this.CS_HTML_TEMPLATE = '';
        this.CS_JSON_DATA = '';
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
}
CodeShowcaseComponent.ɵfac = function CodeShowcaseComponent_Factory(t) { return new (t || CodeShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
CodeShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeShowcaseComponent, selectors: [["app-code-showcase"]], inputs: { CS_TYPESCRIPT: "CS_TYPESCRIPT", CS_HTML_TEMPLATE: "CS_HTML_TEMPLATE", CS_JSON_DATA: "CS_JSON_DATA" }, decls: 27, vars: 3, consts: [[1, "text-center"], [1, "row", "border", "border-1", "mb-5", "py-1"], [1, "col-12", "border-end", "border-3", "border-primary", "mb-3"], [1, "language-json"], [1, "col-6", "border-start", "border-end", "border-3", "border-primary"], [1, "language-ts"], [1, "col-6", "border-end", "border-3", "border-primary"], [1, "language-markup"]], template: function CodeShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Data List:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Columns Definition:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Using in Template:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n        ", ctx.CS_JSON_DATA, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n        ", ctx.CS_TYPESCRIPT, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n        ", ctx.CS_HTML_TEMPLATE, "\n      ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RlLXNob3djYXNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "dPKN":
/*!*********************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/home.mode.ts ***!
  \*********************************************************/
/*! exports provided: APP_ROUTES, navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var APP_ROUTES;
(function (APP_ROUTES) {
    APP_ROUTES["HOME"] = "/";
    APP_ROUTES["SIMPLE_TABLE"] = "simple-example";
    APP_ROUTES["CUSTOM_CSS"] = "custom-css";
    APP_ROUTES["ACTION_TEMPLATE"] = "action-template";
})(APP_ROUTES || (APP_ROUTES = {}));
const navItems = [
    { path: APP_ROUTES.SIMPLE_TABLE, name: 'Simple Example' },
    { path: APP_ROUTES.CUSTOM_CSS, name: 'CSS Example' },
    { path: APP_ROUTES.ACTION_TEMPLATE, name: 'Action Template' }
];


/***/ }),

/***/ "jiZs":
/*!***********************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/simple/simple.component.ts ***!
  \***********************************************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngb5-simple-table */ "AUie");
/* harmony import */ var _simple_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple.mode */ "k5WB");
/* harmony import */ var _json_sample_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json-sample.model */ "v1UG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code-showcase/code-showcase.component */ "asB2");






class SimpleComponent {
    constructor() {
        this.JSONTodoList = _json_sample_model__WEBPACK_IMPORTED_MODULE_2__["JSONTodoList"]; // Data
        // Columns
        this.todoColumns = [
            { id: 1, name: 'id', label: 'SN', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 2, name: 'title', label: 'Title', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
            { id: 3, name: 'completed', label: 'Completed', type: ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING },
        ];
        // Codes to Highlight
        this.CS_TYPESCRIPT = _simple_mode__WEBPACK_IMPORTED_MODULE_1__["TSTodolist"];
        this.CS_HTML_TEMPLATE = _simple_mode__WEBPACK_IMPORTED_MODULE_1__["TDTodoHtml"];
        this.CS_JSON_DATA = _simple_mode__WEBPACK_IMPORTED_MODULE_1__["JSONTodoSample"];
    }
    ngOnInit() {
    }
}
SimpleComponent.ɵfac = function SimpleComponent_Factory(t) { return new (t || SimpleComponent)(); };
SimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SimpleComponent, selectors: [["app-simple"]], decls: 7, vars: 7, consts: [[1, "container"], [1, "text-center"], [1, "mb-2"], [3, "title", "dataList", "columns", "staticPagination"], [3, "CS_JSON_DATA", "CS_HTML_TEMPLATE", "CS_TYPESCRIPT"]], template: function SimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Example: Simple Table Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngb5-simple-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-code-showcase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Todo List")("dataList", ctx.JSONTodoList)("columns", ctx.todoColumns)("staticPagination", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("CS_JSON_DATA", ctx.CS_JSON_DATA)("CS_HTML_TEMPLATE", ctx.CS_HTML_TEMPLATE)("CS_TYPESCRIPT", ctx.CS_TYPESCRIPT);
    } }, directives: [ngb5_simple_table__WEBPACK_IMPORTED_MODULE_0__["Ngb5SimpleTableComponent"], _code_showcase_code_showcase_component__WEBPACK_IMPORTED_MODULE_4__["CodeShowcaseComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "k5WB":
/*!******************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/simple/simple.mode.ts ***!
  \******************************************************************/
/*! exports provided: TSTodolist, TDTodoHtml, JSONTodoSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSTodolist", function() { return TSTodolist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDTodoHtml", function() { return TDTodoHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONTodoSample", function() { return JSONTodoSample; });
const TSTodolist = `
  todoColumns: Column[] = [
  { id: 1, name: 'id', label: 'SN', type: ColumnType.STRING },
  { id: 2, name: 'title', label: 'Title', type: ColumnType.STRING },
  { id: 3, name: 'completed', label: 'Completed', type: ColumnType.STRING },
  ];`;
const TDTodoHtml = `
    <ngb5-simple-table
        [title]="'Todo List'"
        [dataList]="todoList"
        [columns]="todoColumns"
        [staticPagination]="true">
    </ngb5-simple-table>`;
const JSONTodoSample = `
 todoList = [
    {"id":1,"title":"delectus aut autem","completed":false},
    {"id":2,"title":"quis ut nam facilis et officia qui","completed":false},
    {"id":3,"title":"fugiat veniam minus","completed":false},
    {"id":4,"title":"et porro tempora","completed":true},
    ...,
    ...,
]`;


/***/ }),

/***/ "rwpt":
/*!*************************************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/action-template/action-template.model.ts ***!
  \*************************************************************************************/
/*! exports provided: TSATUsersColumn, TDATUsersHtml, JSONATUsersSample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSATUsersColumn", function() { return TSATUsersColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDATUsersHtml", function() { return TDATUsersHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONATUsersSample", function() { return JSONATUsersSample; });
const TSATUsersColumn = `
  todoColumns: Column[] = [
  {id: 1, name: 'id', label: 'SN', type: ColumnType.STRING},
  {id: 2, name: 'name', label: 'Full Name', type: ColumnType.STRING},
  {id: 3, name: 'username', label: 'UserName', type: ColumnType.STRING},
  {id: 4, name: 'address', label: 'Street', type: ColumnType.OBJECT, bindKeys: ['address', 'street']},
  {id: 5, name: 'phone', label: 'phone', cssClasses: 'badge rounded-pill text-uppercase', type: ColumnType.STRING},
  ];`;
const TDATUsersHtml = `
    <ngb5-simple-table
        [title]="'Users List'"
        [dataList]="users"
        [columns]="usersColumnsMap"
        [staticPagination]="true"
        [actionTemplate]="{'Website': exampleTemplate, 'Additional Details': viewTemplate}">
    </ngb5-simple-table>

    <ng-template #exampleTemplate let-data>
      <a class="nav-link" href="{{data.website}}">
        <span>{{data.website}}</span>
      </a>
    </ng-template>

    <ng-template #viewTemplate let-data>
      <div>
        <p class="border-bottom border-2">FullName: {{data.name}}}</p>
        <p class="fw-light">Address: {{data?.address?.street}}, {{data?.address?.suite}}, {{data?.address?.city}}</p>
        <p class="fw-light">Company: {{data?.company?.name}}, {{data?.company?.catchPhrase}}</p>
      </div>
    </ng-template>
`;
const JSONATUsersSample = `
 users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
    { ... },
    { ... }
]`;


/***/ }),

/***/ "rzic":
/*!***********************************!*\
  !*** ./projects/demo/src/main.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "H5HQ");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "ZcuK");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "v1UG":
/*!*****************************************************************!*\
  !*** ./projects/demo/src/app/home-wrapper/json-sample.model.ts ***!
  \*****************************************************************/
/*! exports provided: JSONTodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONTodoList", function() { return JSONTodoList; });
const JSONTodoList = [
    {
        id: 1,
        title: 'delectus aut autem',
        completed: false
    },
    {
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
    },
    {
        id: 3,
        title: 'fugiat veniam minus',
        completed: false
    },
    {
        id: 4,
        title: 'et porro tempora',
        completed: true
    },
    {
        id: 5,
        title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: false
    },
    {
        id: 6,
        title: 'est dicta totam qui explicabo doloribus qui dignissimos',
        completed: false
    },
    {
        id: 7,
        title: 'perspiciatis velit id laborum placeat iusto et aliquam odio',
        completed: false
    },
    {
        id: 8,
        title: 'et sequi qui architecto ut adipisci',
        completed: true
    },
    {
        id: 9,
        title: 'odit optio omnis qui sunt',
        completed: true
    },
    {
        id: 10,
        title: 'et placeat et tempore aspernatur sint numquam',
        completed: false
    },
    {
        id: 11,
        title: 'doloremque aut dolores quidem fuga qui nulla',
        completed: true
    },
    {
        id: 12,
        title: 'voluptas consequatur qui ut quia magnam nemo esse',
        completed: false
    },
    {
        id: 13,
        title: 'fugiat pariatur ratione ut asperiores necessitatibus magni',
        completed: false
    },
    {
        id: 14,
        title: 'rerum eum molestias autem voluptatum sit optio',
        completed: false
    },
    {
        id: 15,
        title: 'quia voluptatibus voluptatem quos similique maiores repellat',
        completed: false
    },
    {
        id: 16,
        title: 'aut id perspiciatis voluptatem iusto',
        completed: false
    },
    {
        id: 17,
        title: 'doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit',
        completed: false
    },
];


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map