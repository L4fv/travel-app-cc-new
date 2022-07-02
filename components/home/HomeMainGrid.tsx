import { useTourPackages } from "../../hooks/useTourPackages";
import { getOfferRate, hasActiveOffer } from "../../utils/product";
import { HeadoutPicks } from "../tourPackages/Picks";

export const HomeMainGrid = () => {
  const { data: tourPackages = [] } = useTourPackages();

  if (!tourPackages.length) return null;
  console.log("product", tourPackages);
  return (
    <div className="bg-blue text-left inline-flex items-center  sm:text-center"> 
      <div  className=" CardsCSS  grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
        {tourPackages.map((product) => (
          <HeadoutPicks
            key={product.id}
            min={product.capacity.min}
            days={product.duration}
            city={product.name}
            about={product.about}
            url={product.images[0]}
            slug={product.slug}
            description={product.name}
            price={product.price}
            stars={5.0}
          />
        ))}
      </div>
    </div>
  );
};
