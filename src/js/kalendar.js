const dateInput = document.getElementById("date");
datepicker("#date", {
  startDay: 1,
  showAllDates: true,
  disableMobile: true,
  maxDate: new Date(2020, 4, 10),
  minDate: new Date(2020, 0, 1),
  dateSelected: new Date(2020, 0, 5),
  overlayPlaceholder: "4-Stelliges Jahr",
  customMonths: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ],
  customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  onSelect: (instance, date) => {
    const value = date.toISOString().substring(0, 10);
    console.log(date);
    dateInput.value = value; // => '1/1/2099'
  }
});