let hour = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

const start = function () {
  timer = true;
  stopwatch();
};

const pause = function () {
  timer = false;
};

const reset = function () {
  timer = false;
  hourStr = '0';
  minStr = '0';
  secStr = '0';
  countStr = '0';
   hour = 0;
   min = 0;
   sec = 0;
   count = 0;
  document.getElementById('hour').innerHTML = hourStr + hour;
  document.getElementById('min').innerHTML = minStr + min;
  document.getElementById('sec').innerHTML = secStr + sec;
  document.getElementById('count').innerHTML = countStr + count;
};

const stopwatch = function () {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hour = hour + 1;
      min = 0;
    }

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('count').innerHTML = count;
    setTimeout('stopwatch()', 10);
  }
};
