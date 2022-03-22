"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourPackageCapacity = void 0;
var react_1 = __importDefault(require("@mdi/react"));
var js_1 = require("@mdi/js");
var react_2 = require("react");
var TourPackageCapacity = function (_a) {
    var defaultCapacity = _a.defaultCapacity, min = _a.min, max = _a.max, onChange = _a.onChange;
    var _b = (0, react_2.useState)(defaultCapacity), capacity = _b[0], setCapacity = _b[1];
    var handleLimit = function () {
        var val = capacity;
        if (val < min)
            val = min;
        if (val > max)
            val = max;
        setCapacity(val);
    };
    (0, react_2.useEffect)(function () { return onChange(capacity); }, [capacity]);
    return (<div className="text-center my-4">
      <h4 className="text-lg mb-4">Cantidad de personas</h4>
      <div className="flex justify-center items-center space-x-2">
        <button onClick={function () { return setCapacity(Math.max(capacity - 1, min)); }} className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 disabled:opacity-50 p-2 rounded-full" title={"M\u00EDnimo ".concat(min)} disabled={capacity <= min}>
          <react_1.default path={js_1.mdiMinus} size={1}/>
        </button>
        <input value={capacity} onKeyPress={function (e) { return !/\d/.test(e.key) && e.preventDefault(); }} onChange={function (e) { return setCapacity(+e.target.value); }} onBlur={handleLimit} type="number" min={min} max={max} className="w-32 h-full p-2 border bg-white rounded-full appearance-none-number text-center"/>
        <button onClick={function () { return setCapacity(Math.min(capacity + 1, max)); }} className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 disabled:opacity-50 p-2 rounded-full" title={"M\u00E1ximo ".concat(max)} disabled={capacity >= max}>
          <react_1.default path={js_1.mdiPlus} size={1}/>
        </button>
      </div>
    </div>);
};
exports.TourPackageCapacity = TourPackageCapacity;
