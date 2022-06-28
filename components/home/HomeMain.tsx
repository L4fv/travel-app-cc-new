import { config } from "../../config";
import { HomeMainGrid } from "./HomeMainGrid";
import {CityCard} from "../tourPackages/CityCard"
import {HeadoutPicks} from "../tourPackages/Picks";


export const HomeMain = () => {

  const description = {
    lm: "Paquetes turísticos diseñados para escaparse de la rutina a un gran precio",
    sht: "Paquetes turísticos diseñados para escaparse de la rutina a un gran precio",
    ht: "Tenemos paquetes turísticos a la medida de tus aventuras a un gran precio",
  };
  
  return (
    <div className="px-4 sm:px-8 py-12 text-center bg-red" >
      <div className="max-w-6xl mx-auto bg-red" >
        <h2 className="text-2xl md:text-4xl text-primary  uppercase font-bold mb-8">
          Disfruta de tus vacaciones 
        </h2>
        <p className="md:text-lg ">{description[config.brand]}</p>
        <HomeMainGrid />
      </div>
    </div>
  );
};

// const pickedData = [
//   {
//     id: 1,
//     currentPrice: 29,
//     currency: '$',
//     stars: 4.6,
//     ratings: 681,
//     city: 'NEW YORK',
//     description: 'The Phantom of the Opera',
//     url:
//       'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
//   },
//   {
//     id: 2,
//     currentPrice: 57.5,
//     currency: '$',
//     stars: 4.6,
//     ratings: 564,
//     cashback: 10,
//     city: 'NEW YORK',
//     description: 'Aladdin',
//     url:
//       'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
//   },
//   {
//     id: 3,
//     currentPrice: 40.5,
//     lastPrice: 79,
//     currency: '$',
//     discount: 49,
//     city: 'NEW YORK',
//     description: 'King Kong - Broadway Week Discount',
//     url:
//       'https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
//   },
//   {
//     id: 4,
//     currentPrice: 141,
//     lastPrice: 146,
//     currency: 'AED',
//     discount: 16,
//     stars: 4.6,
//     ratings: 2588,
//     cashback: 5,
//     city: 'DUBAI',
//     description: 'Burj Khalifa: At the Top (Level 124 & 125)',
//     url:
//       'https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
//   },
//   {
//     id: 5,
//     currentPrice: 196,
//     lastPrice: 206,
//     currency: 'AED',
//     discount: 8,
//     stars: 4.6,
//     ratings: 1240,
//     cashback: 5,
//     city: 'DUBAI',
//     description: 'Dubai Acquarium & Underwater Zoo + Burj Khalifa Combo',
//     url:
//       'https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
//   },
//   {
//     id: 6,
//     currentPrice: 20,
//     currency: '€',
//     stars: 4.6,
//     ratings: 437,
//     city: 'PARIS',
//     description:
//       'Palace of Versailles All Access Passport Entry with Audioguide',
//     url:
//       'https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
//   },
//   {
//     id: 7,
//     currentPrice: 31,
//     lastPrice: 45,
//     currency: '€',
//     discount: 31,
//     stars: 4.6,
//     ratings: 474,
//     cashback: 10,
//     city: 'PARIS',
//     description: 'Skip The Line: Eiffel Tower Tickets with Host',
//     url:
//       'https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
//   }
// ];