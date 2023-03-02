// Устанавливаем дату, до которой будет идти обратный отсчет
let countDownDate = new Date("Mar 8, 2023 15:37:25").getTime();

// Обновляем таймер каждую секунду
let x = setInterval(function() {

  // Получаем текущую дату и время
  let now = new Date().getTime();

  // Разница между текущей датой и временем и датой и временем, до которых идет обратный отсчет
  let distance = countDownDate - now;

  // Рассчитываем дни, часы, минуты и секунды
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выводим результат в элемент с id "timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Если обратный отсчет закончился, выводим сообщение
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
