let searchBtn = document.querySelector(`#search-btn`);
let countryInp = document.querySelector(`#country-inp`);
let result = document.getElementById(`result`);

searchBtn.addEventListener("click", () => {
  const countryName = countryInp.value;

  let API_URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img"/>
             <h2>${data[0].name.common}</h2>
            <div className="wrapper">
                <div className="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div className="wrapper">
                <div className="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div className="wrapper">
                <div className="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div className="wrapper">
                <div className="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${
                      data[0].currencies[Object.keys(data[0].currencies)].name
                    } - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>
            <div className="wrapper">
                <div className="data-wrapper">
                    <h4>Common languages:</h4>
                    <span>${Object.values(data[0].languages).toString().split`,`
                      .join`, `}</span>
                </div>
            </div>
        `;
    });
});
