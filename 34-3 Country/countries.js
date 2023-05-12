const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (countries) => {
  const allContainer = document.getElementById("all-container");

  countries.forEach((country) => {
    const divContainer = document.createElement("div");

    divContainer.classList.add("country");

    divContainer.innerHTML = `
    
    
<h3> Name :  ${country.name.common}</h3>

<p>Capital : ${country.capital ? country.capital[0] : "NO capital"} </p>

<button class="btn" onclick="displayCountyDetails('${
      country.cca2
    }')">Details</button>
    `;

    // console.log(country.cca2);

    allContainer.appendChild(divContainer);
  });
};

const displayCountyDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;

  //   console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetails(data[0]));
};

const showCountryDetails = (country) => {
  const detailContainer = document.getElementById("country-details");
  detailContainer.innerHTML = `


<h3>Country Details...</h3>
<h3>Country Name : ${country.name.common} </h3>
<p>Capital :  ${country.capital[0]}  </p>
<img src="${country.flags.png}">


`;

  console.log(country.flags.png);
};

loadCountries();
