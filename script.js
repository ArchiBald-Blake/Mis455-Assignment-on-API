



async function searchCountry() {
    const searchInput = document.getElementById("searchInput").value;
    const response = await fetch(`https://restcountries.com/v3.1/name/${searchInput}`);
    const data = await response.json();
    displayCountry(data);
  }
  
  function displayCountry(countryData) {
    const countryContainer = document.getElementById("countryData");
    countryContainer.innerHTML = "";
  
    countryData.forEach(country => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("country-card");
      countryCard.innerHTML = `
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <p>Population: ${country.population}</p>
        <p>Capital: ${country.capital}</p>
        <button onclick="showWeather('${country.latlng[0]}', '${country.latlng[1]}')">More Details</button>
      `;
      countryContainer.appendChild(countryCard);
    });
  }
  
  async function showWeather(latitude, longitude) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=ebc58f91ad23718270266771f5ad3c6f`);
    const data = await response.json();
    alert(`Weather data for latitude: ${latitude}, longitude: ${longitude}: ${JSON.stringify(data)}`);
  }
  






  

