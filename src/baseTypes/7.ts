/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  MONDAY = 1,
  TUASDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY
    ? true
    : false;
}
