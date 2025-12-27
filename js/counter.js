function getElapsedTime(dateString) {
  const start = new Date(dateString);
  const now = new Date();

  // Get total difference in milliseconds
  const diffMs = now.getTime() - start.getTime();

  // Calculate each unit
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInWeek = millisecondsInDay * 7;
  const millisecondsInMonth = millisecondsInDay * 30.44; // Average month length
  const millisecondsInYear = millisecondsInDay * 365.25; // Account for leap years
  

  const years = Math.floor(diffMs / millisecondsInYear);
  const months = Math.floor((diffMs % millisecondsInYear) / millisecondsInMonth);
  const weeks = Math.floor((diffMs % millisecondsInMonth) / millisecondsInWeek);
  const days = Math.floor((diffMs % millisecondsInYear) / millisecondsInDay);
  const hours = Math.floor((diffMs % millisecondsInDay) / millisecondsInHour);
  const minutes = Math.floor(
    (diffMs % millisecondsInHour) / millisecondsInMinute
  );
  const seconds = Math.floor(
    (diffMs % millisecondsInMinute) / millisecondsInSecond
  );
 

  return { years, months, weeks, days, hours, minutes, seconds };
}

// Fixed date
const fixedDate = "2007-07-31";

// const result = document.getElementById("result");
const resultYears = document.getElementById("resultYears");
const resultMonths = document.getElementById("resultMonths");
const resultWeeks = document.getElementById("resultWeeks");
const resultDays = document.getElementById("resultDays");
const resultHours = document.getElementById("resultHours");
const resultMinutes = document.getElementById("resultMinutes");
const resultSeconds = document.getElementById("resultSeconds");


function updateResult() {
  const elapsed = getElapsedTime(fixedDate);

//   result.innerHTML = `<strong>Time Together:</strong><br>`;
  resultYears.innerHTML = `${elapsed.years} Anos`;
  resultMonths.innerHTML = `${elapsed.months} Meses`;
  resultWeeks.innerHTML = `${elapsed.weeks} Semanas`;
  resultDays.innerHTML = `${elapsed.days} Dias`;
  resultHours.innerHTML = `${elapsed.hours} Horas`;
  resultMinutes.innerHTML = `${elapsed.minutes} Minutos`;
  resultSeconds.innerHTML = `${elapsed.seconds} Segundos`
}



//     ${elapsed.minutes} minutes,
//     ${elapsed.seconds} seconds,
//     ${elapsed.milliseconds} milliseconds
// Update every second to show live counting
window.addEventListener("DOMContentLoaded", () => {
  updateResult();
  setInterval(updateResult, 1000); // Update every second
});
