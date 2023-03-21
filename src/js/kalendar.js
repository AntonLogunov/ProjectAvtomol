const dateInput = document.getElementById("date");
datepicker("#date", {
  startDay: 1,
  showAllDates: true,
  disableMobile: true,
  maxDate: new Date(2099, 12, 31),
  minDate: new Date(2023, 0, 1),
  dateSelected: new Date(2023, 3, 5),
  overlayPlaceholder: "Введите год",
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
    date.setDate(date.getDate() + 1);
    const value = date.toISOString().substring(0, 10);
    console.log(date);
    dateInput.value = value; // => '1/1/2099'
  }
});