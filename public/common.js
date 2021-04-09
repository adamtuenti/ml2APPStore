(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header color = 'header'>  \r\n  <ion-toolbar>\r\n    <ion-segment color=\"tertiary\" value=\"{{text}}\" >\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Anuncios</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"categorias\" [routerLink]=\"['/productos-todos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"grid-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Productos</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"locales\" [routerLink]=\"['/categorias-locales']\" routerDirection=\"root\">\r\n        <ion-icon name=\"storefront-outline\" size=\"large\"></ion-icon>\r\n        <ion-label style=\"font-size: 11.5px;\">Locales</ion-label>\r\n      </ion-segment-button>\r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-avatar style=\"height: 48px;width: 48px;margin: auto;\">\r\n          <img src=\"{{FotoPerfil}}\">\r\n        </ion-avatar>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "./src/app/folder/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/folder/components/header/header.component */ "./src/app/folder/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_folder_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/folder/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
        this.FotoPerfil = localStorage.getItem('FotoPerfil');
        this.text = this.nombre;
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nombre',] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/folder/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/models/comentarios.ts":
/*!***************************************!*\
  !*** ./src/app/models/comentarios.ts ***!
  \***************************************/
/*! exports provided: Comentarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comentarios", function() { return Comentarios; });
class Comentarios {
}


/***/ }),

/***/ "./src/app/models/locales.ts":
/*!***********************************!*\
  !*** ./src/app/models/locales.ts ***!
  \***********************************/
/*! exports provided: Locales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locales", function() { return Locales; });
class Locales {
}


/***/ }),

/***/ "./src/app/models/productos.ts":
/*!*************************************!*\
  !*** ./src/app/models/productos.ts ***!
  \*************************************/
/*! exports provided: Productos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productos", function() { return Productos; });
class Productos {
}


/***/ }),

/***/ "./src/app/models/productosLocales.ts":
/*!********************************************!*\
  !*** ./src/app/models/productosLocales.ts ***!
  \********************************************/
/*! exports provided: ProductosLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosLocales", function() { return ProductosLocales; });
class ProductosLocales {
}


/***/ }),

/***/ "./src/app/models/publicacionesGenerales.ts":
/*!**************************************************!*\
  !*** ./src/app/models/publicacionesGenerales.ts ***!
  \**************************************************/
/*! exports provided: PublicacionesGenerales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesGenerales", function() { return PublicacionesGenerales; });
class PublicacionesGenerales {
}


/***/ }),

/***/ "./src/app/models/servicios.ts":
/*!*************************************!*\
  !*** ./src/app/models/servicios.ts ***!
  \*************************************/
/*! exports provided: Servicios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicios", function() { return Servicios; });
class Servicios {
}


/***/ }),

/***/ "./src/app/models/sugerenciaCategoriaLocal.ts":
/*!****************************************************!*\
  !*** ./src/app/models/sugerenciaCategoriaLocal.ts ***!
  \****************************************************/
/*! exports provided: sugerenciaCategoriaLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sugerenciaCategoriaLocal", function() { return sugerenciaCategoriaLocal; });
class sugerenciaCategoriaLocal {
}


/***/ }),

/***/ "./src/app/models/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/models/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuarios", function() { return Usuarios; });
class Usuarios {
}


/***/ }),

/***/ "./src/app/pipes/filtro-categoria-local.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/pipes/filtro-categoria-local.pipe.ts ***!
  \******************************************************/
/*! exports provided: FiltroCategoriaLocalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCategoriaLocalPipe", function() { return FiltroCategoriaLocalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroCategoriaLocalPipe = class FiltroCategoriaLocalPipe {
    quitarAcentos(cadena) {
        const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
        return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
    }
    transform(categoriasLocales, texto) {
        if (texto.length === 0) {
            return categoriasLocales;
        }
        texto = texto.toLocaleLowerCase();
        texto = this.quitarAcentos(texto);
        return categoriasLocales.filter(categoriaLocal => {
            var local = categoriaLocal.Nombre.toLocaleLowerCase();
            local = this.quitarAcentos(local);
            return local.includes(texto);
        });
    }
};
FiltroCategoriaLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroCategoriaLocal'
    })
], FiltroCategoriaLocalPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-categoria.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filtro-categoria.pipe.ts ***!
  \************************************************/
/*! exports provided: FiltroCategoriaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCategoriaPipe", function() { return FiltroCategoriaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroCategoriaPipe = class FiltroCategoriaPipe {
    transform(categorias, texto) {
        if (texto.length === 0) {
            return categorias;
        }
        texto = texto.toLocaleLowerCase();
        return categorias.filter(categoria => {
            return categoria.Nombre.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroCategoriaPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroCategoria'
    })
], FiltroCategoriaPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-local.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/filtro-local.pipe.ts ***!
  \********************************************/
/*! exports provided: FiltroLocalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroLocalPipe", function() { return FiltroLocalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroLocalPipe = class FiltroLocalPipe {
    transform(locales, texto) {
        if (texto.length === 0) {
            return locales;
        }
        texto = texto.toLocaleLowerCase();
        return locales.filter(locales => {
            return locales.Nombre.toLocaleLowerCase().includes(texto) ||
                locales.Descripcion.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroLocal'
    })
], FiltroLocalPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-producto-local.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/filtro-producto-local.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FiltroProductoLocalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroProductoLocalPipe", function() { return FiltroProductoLocalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroProductoLocalPipe = class FiltroProductoLocalPipe {
    transform(productos, texto) {
        if (texto.length === 0) {
            return productos;
        }
        texto = texto.toLocaleLowerCase();
        return productos.filter(producto => {
            return producto.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroProductoLocalPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroProductoLocal'
    })
], FiltroProductoLocalPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-productos.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filtro-productos.pipe.ts ***!
  \************************************************/
/*! exports provided: FiltroProductosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroProductosPipe", function() { return FiltroProductosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroProductosPipe = class FiltroProductosPipe {
    transform(productos, texto) {
        if (texto.length === 0) {
            return productos;
        }
        texto = texto.toLocaleLowerCase();
        return productos.filter(producto => {
            return producto.Descripcion.toLocaleLowerCase().includes(texto) ||
                producto.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroProductosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroProductos'
    })
], FiltroProductosPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-servicios.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filtro-servicios.pipe.ts ***!
  \************************************************/
/*! exports provided: FiltroServiciosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroServiciosPipe", function() { return FiltroServiciosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroServiciosPipe = class FiltroServiciosPipe {
    transform(servicios, texto) {
        if (texto.length === 0) {
            return servicios;
        }
        texto = texto.toLocaleLowerCase();
        return servicios.filter(servicio => {
            return servicio.Descripcion.toLocaleLowerCase().includes(texto) ||
                servicio.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroServiciosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroServicios'
    })
], FiltroServiciosPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-usuario.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filtro-usuario.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroUsuarioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroUsuarioPipe", function() { return FiltroUsuarioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroUsuarioPipe = class FiltroUsuarioPipe {
    transform(usuarios, texto) {
        if (texto.length === 0) {
            return usuarios;
        }
        texto = texto.toLocaleLowerCase();
        return usuarios.filter(usuarios => {
            let usuarioCompleto = usuarios.Nombre + " " + usuarios.Apellido;
            return usuarioCompleto.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroUsuarioPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroUsuario'
    })
], FiltroUsuarioPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filtro-usuario.pipe */ "./src/app/pipes/filtro-usuario.pipe.ts");
/* harmony import */ var _filtro_categoria_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtro-categoria.pipe */ "./src/app/pipes/filtro-categoria.pipe.ts");
/* harmony import */ var _filtro_productos_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filtro-productos.pipe */ "./src/app/pipes/filtro-productos.pipe.ts");
/* harmony import */ var _filtro_categoria_local_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filtro-categoria-local.pipe */ "./src/app/pipes/filtro-categoria-local.pipe.ts");
/* harmony import */ var _filtro_producto_local_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filtro-producto-local.pipe */ "./src/app/pipes/filtro-producto-local.pipe.ts");
/* harmony import */ var _filtro_local_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filtro-local.pipe */ "./src/app/pipes/filtro-local.pipe.ts");
/* harmony import */ var _filtro_servicios_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filtro-servicios.pipe */ "./src/app/pipes/filtro-servicios.pipe.ts");










let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_categoria_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroCategoriaPipe"], _filtro_productos_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroProductosPipe"], _filtro_categoria_local_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroCategoriaLocalPipe"], _filtro_producto_local_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroProductoLocalPipe"], _filtro_local_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroLocalPipe"], _filtro_servicios_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroServiciosPipe"]],
        exports: [_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_categoria_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroCategoriaPipe"], _filtro_productos_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroProductosPipe"], _filtro_categoria_local_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroCategoriaLocalPipe"], _filtro_producto_local_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroProductoLocalPipe"], _filtro_local_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroLocalPipe"], _filtro_servicios_pipe__WEBPACK_IMPORTED_MODULE_9__["FiltroServiciosPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/services/comentarios.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/comentarios.service.ts ***!
  \*************************************************/
/*! exports provided: ComentariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosService", function() { return ComentariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ComentariosService = class ComentariosService {
    constructor(firestore) {
        this.ComentariosCollection = firestore.collection('Comentarios', ref => ref.orderBy("Fecha", "desc"));
        this.Comentarios = this.ComentariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getComentarios() {
        return this.Comentarios;
    }
    getComentario(id) {
        return this.ComentariosCollection.doc(id).valueChanges();
    }
    updateComentario(id, Comentarios) {
        return this.ComentariosCollection.doc(id).update(Object.assign({}, Comentarios));
    }
    removeComentario(id) {
        return this.ComentariosCollection.doc(id).delete();
    }
    addComentario(Comentarios) {
        return this.ComentariosCollection.add(Object.assign({}, Comentarios));
    }
};
ComentariosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ComentariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComentariosService);



/***/ }),

/***/ "./src/app/services/locales.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/locales.service.ts ***!
  \*********************************************/
/*! exports provided: LocalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalesService", function() { return LocalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LocalesService = class LocalesService {
    constructor(firestore) {
        this.firestore = firestore;
        this.localesCollection = firestore.collection('Locales'); //, ref => ref.where("Nombre", "==", "Celulares")
        this.locales = this.localesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getLocales() {
        return this.locales;
    }
    getLocal(id) {
        return this.localesCollection.doc(id).valueChanges();
    }
    addLocal(locales) {
        return this.localesCollection.add(Object.assign({}, locales));
    }
    updateLocal(id, locales) {
        return this.localesCollection.doc(id).update(Object.assign({}, locales));
    }
    removeLocal(id) {
        return this.localesCollection.doc(id).delete();
    }
};
LocalesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
LocalesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalesService);



/***/ }),

/***/ "./src/app/services/mensaje-error.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/mensaje-error.service.ts ***!
  \***************************************************/
/*! exports provided: MensajeErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeErrorService", function() { return MensajeErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MensajeErrorService = class MensajeErrorService {
    constructor() { }
    AuthErrorCodeSpanish(description) {
        if (description == "email-already-in-use") {
            return "Este correo ya está siendo usado por otro usuario";
        }
        else if (description == "user-disabled") {
            return "Este usuario ha sido deshabilitado";
        }
        else if (description == "operation-not-allowed") {
            return "Operación no permitida";
        }
        else if (description == "invalid-email") {
            return "Correo electrónico no válido";
        }
        else if (description == "wrong-password") {
            return "Contraseña incorrecta";
        }
        else if (description == "user-not-found") {
            return "No se encontró cuenta del usuario con el correo especificado";
        }
        else if (description == "network-request-failed") {
            return "Promblema al intentar conectar al servidor";
        }
        else if (description == "weak-password") {
            return "Contraseña muy débil o no válida";
        }
        else if (description == "missing-email") {
            return "Hace falta registrar un correo electrónico";
        }
        else if (description == "internal-error") {
            return "Error interno";
        }
        else if (description == "invalid-custom-token") {
            return "Token personalizado invalido";
        }
        else if (description == "too-many-requests") {
            return "Ya se han enviado muchas solicitudes al servidor";
        }
        else {
            return "Algo salio mal, intentelo de nuevo";
        }
    }
};
MensajeErrorService.ctorParameters = () => [];
MensajeErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MensajeErrorService);



/***/ }),

/***/ "./src/app/services/productos-locales.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/productos-locales.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductosLocalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosLocalesService", function() { return ProductosLocalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ProductosLocalesService = class ProductosLocalesService {
    constructor(firestore) {
        this.ComentariosCollection = firestore.collection('ProductosLocales');
        this.Comentarios = this.ComentariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getProductos() {
        return this.Comentarios;
    }
    getProducto(id) {
        return this.ComentariosCollection.doc(id).valueChanges();
    }
    addProducto(productosLocales) {
        return this.ComentariosCollection.add(Object.assign({}, productosLocales));
    }
    updateProducto(id, ProductosLocales) {
        return this.ComentariosCollection.doc(id).update(Object.assign({}, ProductosLocales));
    }
    removerProducto(id) {
        return this.ComentariosCollection.doc(id).delete();
    }
};
ProductosLocalesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProductosLocalesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductosLocalesService);



/***/ }),

/***/ "./src/app/services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let ProductosService = class ProductosService {
    constructor(firestore) {
        this.firestore = firestore;
        this.productosCollection = firestore.collection('Productos'); //, ref => ref.where("Nombre", "==", "Celulares")
        this.productos = this.productosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getProductos() {
        return this.productos;
    }
    getProductosCategoria(categoria) {
        return this.firestore.collection('Productos', ref => ref.where("Categoria", "==", "Celulares"));
    }
    getProducto(id) {
        return this.productosCollection.doc(id).valueChanges();
    }
    addProducto(productos) {
        return this.productosCollection.add(Object.assign({}, productos));
    }
    updateProducto(id, productos) {
        return this.productosCollection.doc(id).update(Object.assign({}, productos));
    }
    removerProducto(id) {
        return this.productosCollection.doc(id).delete();
    }
};
ProductosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProductosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductosService);



/***/ }),

/***/ "./src/app/services/publicaciones-generales.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/publicaciones-generales.service.ts ***!
  \*************************************************************/
/*! exports provided: PublicacionesGeneralesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesGeneralesService", function() { return PublicacionesGeneralesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let PublicacionesGeneralesService = class PublicacionesGeneralesService {
    constructor(firestore) {
        this.firestore = firestore;
        this.publicacionesCollection = firestore.collection('PublicacionesGenerales', ref => ref.orderBy("Fecha", "desc")); //, ref => ref.where("Nombre", "==", "Celulares")
        this.publicaciones = this.publicacionesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getPublicaciones() {
        return this.publicaciones;
    }
    getPublicacion(id) {
        return this.publicacionesCollection.doc(id).valueChanges();
    }
    addPublicacion(publicacion) {
        return this.publicacionesCollection.add(Object.assign({}, publicacion));
    }
    updatePublicacion(id, publicacion) {
        return this.publicacionesCollection.doc(id).update(Object.assign({}, publicacion));
    }
    removePublicacion(id) {
        return this.publicacionesCollection.doc(id).delete();
    }
};
PublicacionesGeneralesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PublicacionesGeneralesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublicacionesGeneralesService);



/***/ }),

/***/ "./src/app/services/servicios.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/servicios.service.ts ***!
  \***********************************************/
/*! exports provided: ServiciosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosService", function() { return ServiciosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ServiciosService = class ServiciosService {
    constructor(firestore) {
        this.firestore = firestore;
        this.serviciosCollection = firestore.collection('Servicios'); //, ref => ref.where("Nombre", "==", "Celulares")
        this.servicios = this.serviciosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getServicios() {
        return this.servicios;
    }
    getServicio(id) {
        return this.serviciosCollection.doc(id).valueChanges();
    }
    addServicio(servicios) {
        return this.serviciosCollection.add(Object.assign({}, servicios));
    }
    updateServicio(id, servicios) {
        return this.serviciosCollection.doc(id).update(Object.assign({}, servicios));
    }
    removeServicio(id) {
        return this.serviciosCollection.doc(id).delete();
    }
};
ServiciosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ServiciosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiciosService);



/***/ }),

/***/ "./src/app/services/sugerencia-locales.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/sugerencia-locales.service.ts ***!
  \********************************************************/
/*! exports provided: SugerenciaLocalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugerenciaLocalesService", function() { return SugerenciaLocalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let SugerenciaLocalesService = class SugerenciaLocalesService {
    constructor(firestore) {
        this.firestore = firestore;
        this.sugerenciasCollection = firestore.collection('SugerenciasCategoriasLocales');
        this.sugerencias = this.sugerenciasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    addSugerencia(sugerencia) {
        return this.sugerenciasCollection.add(Object.assign({}, sugerencia));
    }
};
SugerenciaLocalesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
SugerenciaLocalesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SugerenciaLocalesService);



/***/ })

}]);
//# sourceMappingURL=common.js.map