"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var Footer_1 = require("./Footer");
var Topbar_1 = require("./Topbar");
var Layout = function (_a) {
    var children = _a.children;
    return (<div className="relative font-app flex flex-col min-h-screen">
      <Topbar_1.Topbar />
      {children}
      <Footer_1.Footer />
    </div>);
};
exports.Layout = Layout;
