import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
import { useEffect, useState } from "react";

export const TourPackageCapacity = ({
  defaultCapacity,
  min,
  max,
  onChange,
}) => {
  const [capacity, setCapacity] = useState(defaultCapacity);

  const handleLimit = () => {
    let val = capacity;
    if (val < min) val = min;
    if (val > max) val = max;
    setCapacity(val);
  };

  useEffect(() => onChange(capacity), [capacity]);

  return (
    <div className="text-center my-4">
      <h4 className="text-lg mb-4">Cantidad de personas</h4>
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => setCapacity(Math.max(capacity - 1, min))}
          className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 disabled:opacity-50 p-2 rounded-full"
          title={`Mínimo ${min}`}
          disabled={capacity <= min}
        >
          <Icon path={mdiMinus} size={1} />
        </button>
        <input
          value={capacity}
          onKeyPress={(e) => !/\d/.test(e.key) && e.preventDefault()}
          onChange={(e) => setCapacity(+e.target.value)}
          onBlur={handleLimit}
          type="number"
          min={min}
          max={max}
          className="w-32 h-full p-2 border bg-white rounded-full appearance-none-number text-center"
        />
        <button
          onClick={() => setCapacity(Math.min(capacity + 1, max))}
          className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 disabled:opacity-50 p-2 rounded-full"
          title={`Máximo ${max}`}
          disabled={capacity >= max}
        >
          <Icon path={mdiPlus} size={1} />
        </button>
      </div>
    </div>
  );
};
