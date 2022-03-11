import Link from "next/link";
import { useTourPackages } from "../../hooks/useTourPackages";
import { getOfferRate, hasActiveOffer } from "../../utils/product";

export const HomeMainGrid = () => {
  const { data: tourPackages = [] } = useTourPackages();

  if (!tourPackages.length) return null;

  return (
    <div className="my-12 text-left sm:text-center">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
        {tourPackages.map((product) => (
          <Link key={product.slug} href={"/paquetes/" + product.slug}>
            <a className="shadow-md hover:shadow-lg rounded-lg overflow-hidden bg-white flex sm:flex-col">
              <div className="relative w-1/3 sm:pb-0 sm:w-auto">
                <div className="pt-full sm:pt-2/3 bg-gray-100">
                  <img
                    className="absolute w-full h-full inset-0 object-cover"
                    src={product.images[0]}
                    alt={product.name}
                  />
                </div>
                {hasActiveOffer(product) && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-lg px-3 py-1 rounded-bl-lg">
                    -{getOfferRate(product)}%
                  </div>
                )}
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
                    {hasActiveOffer(product) && (
                      <div className="text-gray-400 line-through text-sm">
                        S/.{product.price}
                      </div>
                    )}
                    <div className="text-secondary font-bold">
                      S/.
                      {hasActiveOffer(product)
                        ? product.offer.price
                        : product.price}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
