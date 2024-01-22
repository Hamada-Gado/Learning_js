/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n/* harmony import */ var _Util_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util/DOMHelper.js */ \"./src/Util/DOMHelper.js\");\n\n\n\nclass App {\n    constructor() {\n        throw new Error(\"App class cannot be instantiated.\");\n    }\n\n    static init() {\n        this.activeProjectList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\n        this.finishedProjectList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\n    }\n\n    static switchProject(project, switchBtn) {\n        const type = this.activeProjectList.projects.find(\n            (p) => p.id === project.id\n        )\n            ? \"active\"\n            : \"finished\";\n\n        if (type === \"active\") {\n            this.activeProjectList.projects =\n                this.activeProjectList.projects.filter(\n                    (p) => p.id !== project.id\n                );\n            this.finishedProjectList.projects.push(project);\n\n            switchBtn.textContent = \"Activate\";\n            (0,_Util_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.moveElement)(project.id, `#finished-projects ul`);\n        } else {\n            this.finishedProjectList.projects =\n                this.finishedProjectList.projects.filter(\n                    (p) => p.id !== project.id\n                );\n            this.activeProjectList.projects.push(project);\n\n            switchBtn.textContent = \"Finish\";\n            (0,_Util_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.moveElement)(project.id, `#active-projects ul`);\n        }\n    }\n}\n\nApp.init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNEOztBQUUzQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyw0REFBVztBQUNoRCx1Q0FBdUMsNERBQVc7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksK0RBQVc7QUFDdkIsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuX2pzLy4vc3JjL0FwcC5qcz9iZTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSBcIi4vQXBwL1Byb2plY3RMaXN0LmpzXCI7XG5pbXBvcnQgeyBtb3ZlRWxlbWVudCB9IGZyb20gXCIuL1V0aWwvRE9NSGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBcHAgY2xhc3MgY2Fubm90IGJlIGluc3RhbnRpYXRlZC5cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3QoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMuZmluaXNoZWRQcm9qZWN0TGlzdCA9IG5ldyBQcm9qZWN0TGlzdChcImZpbmlzaGVkXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzd2l0Y2hQcm9qZWN0KHByb2plY3QsIHN3aXRjaEJ0bikge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5hY3RpdmVQcm9qZWN0TGlzdC5wcm9qZWN0cy5maW5kKFxuICAgICAgICAgICAgKHApID0+IHAuaWQgPT09IHByb2plY3QuaWRcbiAgICAgICAgKVxuICAgICAgICAgICAgPyBcImFjdGl2ZVwiXG4gICAgICAgICAgICA6IFwiZmluaXNoZWRcIjtcblxuICAgICAgICBpZiAodHlwZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0TGlzdC5wcm9qZWN0cyA9XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0TGlzdC5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChwKSA9PiBwLmlkICE9PSBwcm9qZWN0LmlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWRQcm9qZWN0TGlzdC5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgICAgICAgICBzd2l0Y2hCdG4udGV4dENvbnRlbnQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBtb3ZlRWxlbWVudChwcm9qZWN0LmlkLCBgI2ZpbmlzaGVkLXByb2plY3RzIHVsYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkUHJvamVjdExpc3QucHJvamVjdHMgPVxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWRQcm9qZWN0TGlzdC5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChwKSA9PiBwLmlkICE9PSBwcm9qZWN0LmlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdExpc3QucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgICAgICAgICAgc3dpdGNoQnRuLnRleHRDb250ZW50ID0gXCJGaW5pc2hcIjtcbiAgICAgICAgICAgIG1vdmVFbGVtZW50KHByb2plY3QuaWQsIGAjYWN0aXZlLXByb2plY3RzIHVsYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkFwcC5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App.js */ \"./src/App.js\");\n\n\nclass ProjectItem {\n    constructor(id) {\n        this.id = id;\n        this.hasActiveTooltip = false;\n        this.connectMoreInfoButton();\n        this.connectSwitchButton();\n        this.connectDrag();\n    }\n\n    showMoreInfoHandler() {\n        if (this.hasActiveTooltip) return;\n\n        const projectElement = document.getElementById(this.id);\n        const tooltipText = projectElement.dataset.extraInfo;\n\n        __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\n            const tooltip = new module.Tooltip(\n                () => (this.hasActiveTooltip = false),\n                tooltipText,\n                this.id\n            );\n            tooltip.attach();\n            this.hasActiveTooltip = true;\n        });\n    }\n\n    connectMoreInfoButton() {\n        const projectItemEl = document.getElementById(this.id);\n        const moreInfoBtn = projectItemEl.querySelector(\"button:first-of-type\");\n        moreInfoBtn.addEventListener(\n            \"click\",\n            this.showMoreInfoHandler.bind(this)\n        );\n    }\n\n    connectSwitchButton() {\n        const projectItemEl = document.getElementById(this.id);\n        const switchBtn = projectItemEl.querySelector(\"button:last-of-type\");\n        switchBtn.addEventListener(\n            \"click\",\n            _App_js__WEBPACK_IMPORTED_MODULE_0__.App.switchProject.bind(_App_js__WEBPACK_IMPORTED_MODULE_0__.App, this, switchBtn)\n        );\n    }\n\n    connectDrag() {\n        document\n            .getElementById(this.id)\n            .addEventListener(\"dragstart\", (event) => {\n                event.dataTransfer.setData(\"text/plain\", this.id);\n                event.dataTransfer.effectAllowed = \"move\";\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDOztBQUV6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLDJKQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdDQUFHLG9CQUFvQix3Q0FBRztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5fanMvLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzPzJlNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL0FwcC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29ubmVjdE1vcmVJbmZvQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdFN3aXRjaEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmNvbm5lY3REcmFnKCk7XG4gICAgfVxuXG4gICAgc2hvd01vcmVJbmZvSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQWN0aXZlVG9vbHRpcCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gcHJvamVjdEVsZW1lbnQuZGF0YXNldC5leHRyYUluZm87XG5cbiAgICAgICAgaW1wb3J0KFwiLi9Ub29sdGlwLmpzXCIpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IG5ldyBtb2R1bGUuVG9vbHRpcChcbiAgICAgICAgICAgICAgICAoKSA9PiAodGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2UpLFxuICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0LFxuICAgICAgICAgICAgICAgIHRoaXMuaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b29sdGlwLmF0dGFjaCgpO1xuICAgICAgICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29ubmVjdE1vcmVJbmZvQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIGNvbnN0IG1vcmVJbmZvQnRuID0gcHJvamVjdEl0ZW1FbC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uOmZpcnN0LW9mLXR5cGVcIik7XG4gICAgICAgIG1vcmVJbmZvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICB0aGlzLnNob3dNb3JlSW5mb0hhbmRsZXIuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbm5lY3RTd2l0Y2hCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgY29uc3Qgc3dpdGNoQnRuID0gcHJvamVjdEl0ZW1FbC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uOmxhc3Qtb2YtdHlwZVwiKTtcbiAgICAgICAgc3dpdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICBBcHAuc3dpdGNoUHJvamVjdC5iaW5kKEFwcCwgdGhpcywgc3dpdGNoQnRuKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbm5lY3REcmFnKCkge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n\n\nclass ProjectList {\n    constructor(type) {\n        this.type = type;\n        this.projects = [];\n        const prjItems = document.querySelectorAll(`#${type}-projects li`);\n        for (const prjItem of prjItems) {\n            this.projects.push(new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id));\n        }\n\n        this.connectDroppable();\n    }\n\n    connectDroppable() {\n        const list = document.querySelector(`#${this.type}-projects ul`);\n\n        list.addEventListener(\"dragenter\", (event) => {\n            if (event.dataTransfer.types[0] === \"text/plain\") {\n                event.preventDefault();\n                list.parentElement.classList.add(\"droppable\");\n            }\n        });\n\n        list.addEventListener(\"dragover\", (event) => {\n            if (event.dataTransfer.types[0] === \"text/plain\") {\n                event.preventDefault();\n            }\n        });\n\n        list.addEventListener(\"dragleave\", (event) => {\n            if (\n                event.relatedTarget.closest(`#${this.type}-projects ul`) !==\n                list\n            )\n                list.parentElement.classList.remove(\"droppable\");\n        });\n\n        list.addEventListener(\"drop\", (event) => {\n            const prjId = event.dataTransfer.getData(\"text/plain\");\n            if (this.projects.find((p) => p.id === prjId)) {\n                list.parentElement.classList.remove(\"droppable\");\n                return;\n            }\n\n            document\n                .getElementById(prjId)\n                .querySelector(\"button:last-of-type\")\n                .click();\n\n            list.parentElement.classList.remove(\"droppable\");\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDOztBQUV4QztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxLQUFLO0FBQzVEO0FBQ0EsbUNBQW1DLHdEQUFXO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsVUFBVTs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5fanMvLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzPzBkY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi9Qcm9qZWN0SXRlbS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICBjb25zdCBwcmpJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3R5cGV9LXByb2plY3RzIGxpYCk7XG4gICAgICAgIGZvciAoY29uc3QgcHJqSXRlbSBvZiBwcmpJdGVtcykge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0SXRlbShwcmpJdGVtLmlkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbm5lY3REcm9wcGFibGUoKTtcbiAgICB9XG5cbiAgICBjb25uZWN0RHJvcHBhYmxlKCkge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xuXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09IFwidGV4dC9wbGFpblwiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdID09PSBcInRleHQvcGxhaW5cIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT1cbiAgICAgICAgICAgICAgICBsaXN0XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgbGlzdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmpJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHByaklkKSkge1xuICAgICAgICAgICAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQocHJqSWQpXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b246bGFzdC1vZi10eXBlXCIpXG4gICAgICAgICAgICAgICAgLmNsaWNrKCk7XG5cbiAgICAgICAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/Util/DOMHelper.js":
/*!*******************************!*\
  !*** ./src/Util/DOMHelper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearEventListeners: () => (/* binding */ clearEventListeners),\n/* harmony export */   moveElement: () => (/* binding */ moveElement)\n/* harmony export */ });\nfunction clearEventListeners(element) {\n    const clonedEl = element.cloneNode(true);\n    element.replaceWith(clonedEl);\n    return clonedEl;\n}\nfunction moveElement(elId, newDestSelector) {\n    const element = document.getElementById(elId);\n    const destinationEl = document.querySelector(newDestSelector);\n    destinationEl.append(element);\n    element.scrollIntoView({ behavior: \"smooth\" });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbC9ET01IZWxwZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm5fanMvLi9zcmMvVXRpbC9ET01IZWxwZXIuanM/NWZiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvbmVkRWwgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZEVsKTtcbiAgICByZXR1cm4gY2xvbmVkRWw7XG59XG5leHBvcnQgZnVuY3Rpb24gbW92ZUVsZW1lbnQoZWxJZCwgbmV3RGVzdFNlbGVjdG9yKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsSWQpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RTZWxlY3Rvcik7XG4gICAgZGVzdGluYXRpb25FbC5hcHBlbmQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Util/DOMHelper.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "learn_js:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "assets/scripts/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklearn_js"] = self["webpackChunklearn_js"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.js");
/******/ 	
/******/ })()
;