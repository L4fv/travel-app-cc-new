"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeMainGrid = void 0;
var link_1 = __importDefault(require("next/link"));
var useTourPackages_1 = require("../../hooks/useTourPackages");
var product_1 = require("../../utils/product");
var HomeMainGrid = function () {
    var _a = (0, useTourPackages_1.useTourPackages)().data, tourPackages = _a === void 0 ? [] : _a;
    if (!tourPackages.length)
        return null;
    return (<div className="my-12 text-left sm:text-center">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
        {tourPackages.map(function (product) { return (<link_1.default key={product.slug} href={"/paquetes/" + product.slug}>
            <a className="shadow-md hover:shadow-lg rounded-lg overflow-hidden bg-white flex sm:flex-col">
              <div className="relative w-1/3 sm:pb-0 sm:w-auto">
                <div className="pt-full sm:pt-2/3 bg-gray-100">
                  <img className="absolute w-full h-full inset-0 object-cover" src={product.images[0]} alt={product.name}/>
                </div>
                {(0, product_1.hasActiveOffer)(product) && (<div className="absolute top-0 right-0 bg-red-500 text-white text-lg px-3 py-1 rounded-bl-lg">
                    -{(0, product_1.getOfferRate)(product)}%
                  </div>)}
              </div>
              <div className="flex-1 px-4 py-2 flex flex-col">
                <h2 className="text-primary text-sm sm:text-base mb-2">
                  {product.name}
                </h2>
                <div className="flex justify-between items-end mt-auto">
                  <div className="text-sm text-gray-500">
                    {product.duration + 1} días
                  </div>
                  <div className="text-right">
                    {(0, product_1.hasActiveOffer)(product) && (<div className="text-gray-400 line-through text-sm">
                        S/.{product.price}
                      </div>)}
                    <div className="text-secondary font-bold">
                      S/.
                      {(0, product_1.hasActiveOffer)(product)
                ? product.offer.price
                : product.price}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </link_1.default>); })}
      </div>
    </div>);
};
exports.HomeMainGrid = HomeMainGrid;
