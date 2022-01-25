function func() {
  var api =
    "https://api.openweathermap.org/data/2.5/weather?q=city&appid=4d09cd0e0c359927e26a1df8e5a0de90";
  var a = document.getElementById("city").value;
  var napi = api.substring(0, 50) + a + api.substring(54);
  document.getElementById("city1").innerHTML = null;
  document.getElementById("cityn").innerHTML = null;
  document.getElementById("coun").innerHTML = null;
  document.getElementById("temp").innerHTML = null;
  document.getElementById("weat").innerHTML = null;
  document.getElementById("emp").innerHTML = null;
  document.getElementById("coun1").innerHTML = null;
  document.getElementById("temp1").innerHTML = null;
  document.getElementById("weat1").innerHTML = null;
  fetch(napi)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      if (response.message === "notdefined") {
        document.getElementById("emp").innerHTML = null;
      } else if (response.message === "city not found") {
        document.getElementById("emp").innerHTML =
          "City not found. Please try again";
      }

      document.getElementById("city1").innerHTML = "Searched City";
      document.getElementById("cityn").innerHTML =
        a.charAt(0).toUpperCase() + a.slice(1);
      document.getElementById("coun").innerHTML = response.sys.country;
      document.getElementById("temp").innerHTML = (
        response.main.temp - 273.15
      ).toFixed(2);
      document.getElementById("weat").innerHTML =
        response.weather[0]["description"];

      document.getElementById("coun1").innerHTML = "Country";
      document.getElementById("temp1").innerHTML = "Temperature[in \u00B0 C]";
      document.getElementById("weat1").innerHTML = "Weather Condition";
    });
}
