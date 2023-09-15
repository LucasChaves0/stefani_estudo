let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hour.innerHTML = `${formatTime(hours)}`;
  min.innerHTML = `${formatTime(minutes)}`;
  sec.innerHTML = `${formatTime(seconds)}`;
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
