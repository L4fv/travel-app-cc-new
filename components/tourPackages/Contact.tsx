import { mdiWhatsapp } from "@mdi/js";
import Icon from "@mdi/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { config } from "../../config";

export const TourPackageContact = ({ tourPackage, range, quantity }) => {
  let message = `Buen día. Quisiera reservar el paquete *${tourPackage.name}* para ${quantity} personas `;

  if (range.from && range.to) {
    const from = format(
      new Date(2020, range.from.month - 1, range.from.day),
      "d 'de' LLLL",
      { locale: es }
    );
    const to = format(
      new Date(2020, range.to.month - 1, range.to.day),
      "d 'de' LLLL",
      { locale: es }
    );

    message += `desde el *${from}* ` + `hasta el *${to}*`;
  }

  const encoded = encodeURIComponent(message);

  return (
    <div className="text-center mb-8">
      <a
        href={`https://wa.me/${config.contactPhone}?text=${encoded}`}
        target="_blank"
        className="inline-flex items-center space-x-2 text-xl px-8 py-3 font-bold text-white rounded-full shadow-lg hover:shadow-xl"
        style={{ backgroundColor: "#4fce5d" }}
      >
        <Icon path={mdiWhatsapp} size={1.5} />
        <span>Reservar</span>
      </a>
    </div>
  );
};
