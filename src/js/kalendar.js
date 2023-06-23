const dateInput = document.getElementById("date");
datepicker("#date", {
  startDay: 1,
  showAllDates: false,
  disableMobile: false,
  maxDate: new Date(2099, 12, 31),
  minDate: new Date(2023, 4, 1),
  dateSelected: new Date(2023, 4, 5),
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
    const dateValue = date.toISOString().substring(0, 10);
    dateInput.value = dateValue; // => '1/1/2099'
    console.log(dateValue);
    
  }
});