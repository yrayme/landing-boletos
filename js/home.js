function handleCheckHome(e) {
  localStorage.setItem("type", e.value);
  var oneWay = document.getElementById('one-way')
  var roundTrip = document.getElementById('round-trip')
  var endDate = document.getElementById('h-input-end-date')
  if (e.value === 'one-way') {
    oneWay.classList.add("h-input-radio-active");
    roundTrip.classList.remove("h-input-radio-active");
    endDate.style.display = "none"
  } else {
    oneWay.classList.remove("h-input-radio-active");
    roundTrip.classList.add("h-input-radio-active");
    endDate.style.display = "flex"
  }
}