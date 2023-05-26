function setClock() {
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  const digitalHour = document.querySelector(".hour");
  const digitalMinute = document.querySelector(".minute");

  const currentDate = new Date();
  const hours = currentDate.getHours() % 12;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const hourRotation = hours * 30 + minutes / 2;
  const minuteRotation = minutes * 6 + seconds / 10;
  const secondRotation = seconds * 6;

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;

  digitalHour.textContent = hours.toString().padStart(2, "0");
  digitalMinute.textContent = minutes.toString().padStart(2, "0");
}

setInterval(setClock, 1000);

setClock();
