"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourPackageCalendar = void 0;
var react_modern_calendar_datepicker_1 = require("@hassanmojab/react-modern-calendar-datepicker");
var fp_1 = require("date-fns/fp");
var config_1 = require("../../config");
var calendarSpanishLocale_1 = require("../../utils/calendarSpanishLocale");
var TourPackageCalendar = function (_a) {
    var tourPackage = _a.tourPackage, range = _a.range, handleChange = _a.handleChange;
    var dateToObj = function (date) { return ({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
    }); };
    var today = new Date();
    var minimumDate = dateToObj(today);
    var maximumDate = dateToObj((0, fp_1.addYears)(2, today));
    var onChange = function (_a) {
        var from = _a.from, to = _a.to;
        if (from && !to) {
            var year = from.year, month = from.month, day = from.day;
            to = dateToObj((0, fp_1.addDays)(tourPackage.duration, new Date(year, month - 1, day)));
        }
        handleChange({ from: from, to: to });
    };
    return (<div>
      <react_modern_calendar_datepicker_1.Calendar value={range} onChange={onChange} minimumDate={minimumDate} maximumDate={maximumDate} shouldHighlightWeekends calendarClassName="responsive-calendar mx-auto" locale={calendarSpanishLocale_1.spanishLocale} colorPrimary={config_1.config.colors.secondary.DEFAULT} colorPrimaryLight={"".concat(config_1.config.colors.secondary.DEFAULT, "26")}/>
    </div>);
};
exports.TourPackageCalendar = TourPackageCalendar;
