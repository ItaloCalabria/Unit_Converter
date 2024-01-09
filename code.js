function converterTemperatura() {
    let celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    if (!isNaN(celsiusInput)) {
      let fahrenheit = (celsiusInput * 9 / 5) + 32;
      document.getElementById("resultado").textContent = `${celsiusInput}°C = ${fahrenheit}°F`;
    } else {
      document.getElementById("resultado").textContent = "Insira um valor válido!";
    }
  }
  