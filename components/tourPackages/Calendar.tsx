import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import { addYears, addDays } from "date-fns/fp";
import { config } from "../../config";
import { spanishLocale } from "../../utils/calendarSpanishLocale";

export const TourPackageCalendar = ({ tourPackage, range, handleChange }) => {
  const dateToObj = (date: Date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });

  const today = new Date();
  const minimumDate = dateToObj(today);
  const maximumDate = dateToObj(addYears(2, today));

  const onChange = ({ from, to }) => {
    if (from && !to) {
      const { year, month, day } = from;
      to = dateToObj(
        addDays(tourPackage.duration, new Date(year, month - 1, day))
      );
    }
    handleChange({ from, to });
  };

  return (
    <div >
      <Calendar
        value={range}
        onChange={onChange}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        shouldHighlightWeekends
        calendarClassName="responsive-calendar mx-auto"
        locale={spanishLocale}
        colorPrimary={config.colors.secondary.DEFAULT}
        colorPrimaryLight={`${config.colors.secondary.DEFAULT}26`}
      />
    </div>
  );
};
