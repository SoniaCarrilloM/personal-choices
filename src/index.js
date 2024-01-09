function showCity(event) {
  if (event.target.value === "Madrid") {
    alert("I OVE Madrid");
  }

  if (event.target.value === "New York") {
    alert("I LOVE New York");
  }

  if (event.target.value === "London") {
    alert("I LOVE London");
  }
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showCity);
