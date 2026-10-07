/* =====================================
   WANDERWORLD 3.0
   ===================================== */


/* =====================================
   DATA NEGARA
   ===================================== */

const countries = [

  // ASIA
  ["Indonesia","Asia","Jakarta","🇮🇩","Rupiah"],
  ["Japan","Asia","Tokyo","🇯🇵","Yen"],
  ["South Korea","Asia","Seoul","🇰🇷","Won"],
  ["China","Asia","Beijing","🇨🇳","Yuan"],
  ["Singapore","Asia","Singapore","🇸🇬","Dollar"],
  ["Malaysia","Asia","Kuala Lumpur","🇲🇾","Ringgit"],
  ["Thailand","Asia","Bangkok","🇹🇭","Baht"],
  ["Vietnam","Asia","Hanoi","🇻🇳","Dong"],
  ["Philippines","Asia","Manila","🇵🇭","Peso"],
  ["India","Asia","New Delhi","🇮🇳","Rupee"],
  ["Pakistan","Asia","Islamabad","🇵🇰","Rupee"],
  ["Bangladesh","Asia","Dhaka","🇧🇩","Taka"],
  ["Nepal","Asia","Kathmandu","🇳🇵","Rupee"],
  ["Bhutan","Asia","Thimphu","🇧🇹","Ngultrum"],
  ["Mongolia","Asia","Ulaanbaatar","🇲🇳","Tugrik"],
  ["Saudi Arabia","Asia","Riyadh","🇸🇦","Riyal"],
  ["United Arab Emirates","Asia","Abu Dhabi","🇦🇪","Dirham"],
  ["Qatar","Asia","Doha","🇶🇦","Riyal"],
  ["Israel","Asia","Jerusalem","🇮🇱","Shekel"],
  ["Jordan","Asia","Amman","🇯🇴","Dinar"],
  ["Turkey","Asia","Ankara","🇹🇷","Lira"],
  ["Iran","Asia","Tehran","🇮🇷","Rial"],
  ["Iraq","Asia","Baghdad","🇮🇶","Dinar"],
  ["Afghanistan","Asia","Kabul","🇦🇫","Afghani"],
  ["Sri Lanka","Asia","Sri Jayawardenepura Kotte","🇱🇰","Rupee"],

  // EUROPE
  ["France","Europe","Paris","🇫🇷","Euro"],
  ["Germany","Europe","Berlin","🇩🇪","Euro"],
  ["Italy","Europe","Rome","🇮🇹","Euro"],
  ["Spain","Europe","Madrid","🇪🇸","Euro"],
  ["Portugal","Europe","Lisbon","🇵🇹","Euro"],
  ["United Kingdom","Europe","London","🇬🇧","Pound"],
  ["Netherlands","Europe","Amsterdam","🇳🇱","Euro"],
  ["Belgium","Europe","Brussels","🇧🇪","Euro"],
  ["Switzerland","Europe","Bern","🇨🇭","Franc"],
  ["Austria","Europe","Vienna","🇦🇹","Euro"],
  ["Greece","Europe","Athens","🇬🇷","Euro"],
  ["Norway","Europe","Oslo","🇳🇴","Krone"],
  ["Sweden","Europe","Stockholm","🇸🇪","Krona"],
  ["Finland","Europe","Helsinki","🇫🇮","Euro"],
  ["Denmark","Europe","Copenhagen","🇩🇰","Krone"],
  ["Iceland","Europe","Reykjavik","🇮🇸","Krona"],
  ["Poland","Europe","Warsaw","🇵🇱","Zloty"],
  ["Ukraine","Europe","Kyiv","🇺🇦","Hryvnia"],
  ["Ireland","Europe","Dublin","🇮🇪","Euro"],
  ["Croatia","Europe","Zagreb","🇭🇷","Euro"],

  // AFRICA
  ["Egypt","Africa","Cairo","🇪🇬","Pound"],
  ["Morocco","Africa","Rabat","🇲🇦","Dirham"],
  ["South Africa","Africa","Pretoria","🇿🇦","Rand"],
  ["Kenya","Africa","Nairobi","🇰🇪","Shilling"],
  ["Tanzania","Africa","Dodoma","🇹🇿","Shilling"],
  ["Nigeria","Africa","Abuja","🇳🇬","Naira"],
  ["Ghana","Africa","Accra","🇬🇭","Cedi"],
  ["Ethiopia","Africa","Addis Ababa","🇪🇹","Birr"],
  ["Algeria","Africa","Algiers","🇩🇿","Dinar"],
  ["Tunisia","Africa","Tunis","🇹🇳","Dinar"],
  ["Uganda","Africa","Kampala","🇺🇬","Shilling"],
  ["Rwanda","Africa","Kigali","🇷🇼","Franc"],
  ["Senegal","Africa","Dakar","🇸🇳","Franc"],
  ["Zimbabwe","Africa","Harare","🇿🇼","Dollar"],

  // AMERICA
  ["United States","America","Washington D.C.","🇺🇸","Dollar"],
  ["Canada","America","Ottawa","🇨🇦","Dollar"],
  ["Mexico","America","Mexico City","🇲🇽","Peso"],
  ["Brazil","America","Brasilia","🇧🇷","Real"],
  ["Argentina","America","Buenos Aires","🇦🇷","Peso"],
  ["Chile","America","Santiago","🇨🇱","Peso"],
  ["Colombia","America","Bogota","🇨🇴","Peso"],
  ["Peru","America","Lima","🇵🇪","Sol"],
  ["Ecuador","America","Quito","🇪🇨","Dollar"],
  ["Uruguay","America","Montevideo","🇺🇾","Peso"],
  ["Paraguay","America","Asuncion","🇵🇾","Guarani"],
  ["Bolivia","America","Sucre","🇧🇴","Boliviano"],
  ["Costa Rica","America","San Jose","🇨🇷","Colon"],
  ["Panama","America","Panama City","🇵🇦","Balboa"],

  // OCEANIA
  ["Australia","Oceania","Canberra","🇦🇺","Dollar"],
  ["New Zealand","Oceania","Wellington","🇳🇿","Dollar"],
  ["Fiji","Oceania","Suva","🇫🇯","Dollar"],
  ["Papua New Guinea","Oceania","Port Moresby","🇵🇬","Kina"],
  ["Samoa","Oceania","Apia","🇼🇸","Tala"],
  ["Tonga","Oceania","Nuku'alofa","🇹🇴","Pa'anga"]

];


/* =====================================
   VARIABLES
   ===================================== */

let currentRegion = "all";

const countryGrid =
  document.getElementById("countryGrid");

const searchInput =
  document.getElementById("searchInput");

const resultCount =
  document.getElementById("resultCount");

const emptyState =
  document.getElementById("emptyState");


/* =====================================
   RENDER COUNTRIES
   ===================================== */

function renderCountries() {

  const keyword =
    searchInput.value.toLowerCase().trim();

  const filtered =
    countries.filter(country => {

      const name =
        country[0].toLowerCase();

      const capital =
        country[2].toLowerCase();

      const region =
        country[1];

      const searchMatch =
        name.includes(keyword) ||
        capital.includes(keyword);

      const regionMatch =
        currentRegion === "all" ||
        region === currentRegion;

      return searchMatch && regionMatch;

    });


  countryGrid.innerHTML = "";

  resultCount.textContent =
    `${filtered.length} negara ditemukan`;


  if (filtered.length === 0) {

    emptyState.style.display = "block";

    return;

  }

  emptyState.style.display = "none";


  filtered.forEach(country => {

    const [
      name,
      region,
      capital,
      flag,
      currency
    ] = country;


    const favorites =
      JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

    const isFavorite =
      favorites.includes(name);


    const card =
      document.createElement("div");

    card.className = "country-card";


    card.innerHTML = `

      <div class="country-top">

        <div class="country-flag">
          ${flag}
        </div>

        <button
          class="favorite ${isFavorite ? "active" : ""}"
          onclick="toggleFavorite('${name}')"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>

      </div>

      <h3>${name}</h3>

      <p>
        🌍 ${region}
      </p>

      <p>
        🏛️ ${capital}
      </p>

      <button
        class="open-country"
        onclick="openCountry(
          '${name}',
          '${region}',
          '${capital}',
          '${flag}',
          '${currency}'
        )"
      >
        View Details →
      </button>

    `;


    countryGrid.appendChild(card);

  });

}


/* =====================================
   SEARCH
   ===================================== */

searchInput.addEventListener(
  "input",
  renderCountries
);


document
  .getElementById("clearSearch")
  .addEventListener("click", () => {

    searchInput.value = "";

    renderCountries();

  });


/* =====================================
   FILTER
   ===================================== */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".filter")
        .forEach(btn =>
          btn.classList.remove("active")
        );

      button.classList.add("active");

      currentRegion =
        button.dataset.region;

      renderCountries();

    });

  });


/* =====================================
   FAVORITE
   ===================================== */

function toggleFavorite(name) {

  let favorites =
    JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );


  if (favorites.includes(name)) {

    favorites =
      favorites.filter(item =>
        item !== name
      );

  } else {

    favorites.push(name);

  }


  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );


  renderCountries();

}


function showFavorites() {

  const favorites =
    JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );


  const result =
    document.getElementById("favoriteResult");


  if (favorites.length === 0) {

    result.innerHTML =
      "Belum ada negara favorit ❤️";

    return;

  }


  result.innerHTML =
    favorites
      .map(name => `❤️ ${name}`)
      .join("<br>");

}


/* =====================================
   RANDOM COUNTRY
   ===================================== */

function randomCountry() {

  const random =
    countries[
      Math.floor(
        Math.random() * countries.length
      )
    ];


  openCountry(
    random[0],
    random[1],
    random[2],
    random[3],
    random[4]
  );

}


/* =====================================
   COUNTRY MODAL
   ===================================== */

function openCountry(
  name,
  region,
  capital,
  flag,
  currency
) {

  document.getElementById(
    "modalHeader"
  ).innerHTML = `

    <div style="font-size:70px">
      ${flag}
    </div>

    <h2>${name}</h2>

  `;


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <p>
      🌍 Region: ${region}
    </p>

    <p>
      🏛️ Capital: ${capital}
    </p>

    <p>
      💰 Currency: ${currency}
    </p>

    <br>

    <p>
      ✈️ Negara ini bisa menjadi salah satu
      destinasi menarik untuk dijelajahi.
      Cari informasi lebih lanjut mengenai
      budaya, tempat wisata, makanan,
      cuaca, dan transportasinya sebelum
      melakukan perjalanan.
    </p>

  `;


  document
    .getElementById("countryModal")
    .classList.add("show");

}


function closeModal() {

  document
    .getElementById("countryModal")
    .classList.remove("show");

}


document
  .getElementById("countryModal")
  .addEventListener("click", event => {

    if (
      event.target.id === "countryModal"
    ) {
      closeModal();
    }

  });


/* =====================================
   WEATHER
   ===================================== */

async function checkWeather() {

  const city = document
    .getElementById("weatherCity")
    .value
    .trim();

  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "⚠️ Masukkan nama kota.";
    return;
  }

  result.innerHTML = "⏳ Mengambil data cuaca...";

  try {

    // 1. Cari koordinat kota
    const geoURL =
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=id&format=json`;

    const geoResponse = await fetch(geoURL);
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      result.innerHTML =
        "❌ Kota tidak ditemukan.";
      return;
    }

    const location = geoData.results[0];

    const latitude = location.latitude;
    const longitude = location.longitude;

    // 2. Ambil cuaca
    const weatherURL =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`;

    const weatherResponse =
      await fetch(weatherURL);

    const weatherData =
      await weatherResponse.json();

    const current =
      weatherData.current;

    const description =
      getWeatherDescription(
        current.weather_code
      );

    result.innerHTML = `

      <div class="weather-result">

        <h3>
          📍 ${location.name}
        </h3>

        <p>
          ${location.country || ""}
        </p>

        <div class="weather-main">
          ${description.icon}
          <strong>
            ${current.temperature_2m}°C
          </strong>
        </div>

        <p>
          ${description.text}
        </p>

        <p>
          💧 Kelembapan:
          ${current.relative_humidity_2m}%
        </p>

        <p>
          🌡️ Terasa:
          ${current.apparent_temperature}°C
        </p>

        <p>
          💨 Angin:
          ${current.wind_speed_10m} km/j
        </p>

      </div>

    `;

  } catch (error) {

    console.error(error);

    result.innerHTML =
      "❌ Gagal mengambil data cuaca. Coba lagi.";

  }

}

function getWeatherDescription(code) {

  const weather = {

    0: {
      icon: "☀️",
      text: "Cerah"
    },

    1: {
      icon: "🌤️",
      text: "Cerah berawan"
    },

    2: {
      icon: "⛅",
      text: "Berawan sebagian"
    },

    3: {
      icon: "☁️",
      text: "Berawan"
    },

    45: {
      icon: "🌫️",
      text: "Berkabut"
    },

    48: {
      icon: "🌫️",
      text: "Kabut"
    },

    51: {
      icon: "🌦️",
      text: "Gerimis ringan"
    },

    53: {
      icon: "🌦️",
      text: "Gerimis"
    },

    55: {
      icon: "🌧️",
      text: "Gerimis deras"
    },

    61: {
      icon: "🌧️",
      text: "Hujan ringan"
    },

    63: {
      icon: "🌧️",
      text: "Hujan"
    },

    65: {
      icon: "🌧️",
      text: "Hujan deras"
    },

    71: {
      icon: "🌨️",
      text: "Salju ringan"
    },

    73: {
      icon: "❄️",
      text: "Salju"
    },

    75: {
      icon: "❄️",
      text: "Salju deras"
    },

    80: {
      icon: "🌦️",
      text: "Hujan singkat"
    },

    81: {
      icon: "🌧️",
      text: "Hujan"
    },

    82: {
      icon: "⛈️",
      text: "Hujan deras"
    },

    95: {
      icon: "⛈️",
      text: "Badai petir"
    },

    96: {
      icon: "⛈️",
      text: "Badai petir + hujan es"
    },

    99: {
      icon: "⛈️",
      text: "Badai petir kuat"
    }

  };

  return weather[code] || {
    icon: "🌡️",
    text: "Kondisi cuaca tidak diketahui"
  };

}


/* =====================================
   BUDGET CALCULATOR
   ===================================== */

function calculateBudget() {

  const ticket =
    Number(
      document.getElementById("ticket").value
    ) || 0;

  const hotel =
    Number(
      document.getElementById("hotel").value
    ) || 0;

  const food =
    Number(
      document.getElementById("food").value
    ) || 0;

  const transport =
    Number(
      document.getElementById("transport").value
    ) || 0;


  const total =
    ticket +
    hotel +
    food +
    transport;


  document.getElementById(
    "budgetResult"
  ).innerHTML = `

    💰 Total Budget:<br>

    <strong>
      Rp ${total.toLocaleString("id-ID")}
    </strong>

  `;

}


/* =====================================
   MAP
   ===================================== */

function mapCountry(region) {

  currentRegion = region;


  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.classList.remove("active");

      if (
        button.dataset.region === region
      ) {

        button.classList.add("active");

      }

    });


  document.getElementById(
    "mapResult"
  ).innerHTML =
    `🌎 Kamu memilih wilayah <strong>${region}</strong>`;


  renderCountries();


  document
    .getElementById("destinations")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =====================================
   COUNTRY COMPARISON
   ===================================== */

const compare1 =
  document.getElementById("compare1");

const compare2 =
  document.getElementById("compare2");


countries.forEach(country => {

  const option1 =
    document.createElement("option");

  option1.value = country[0];

  option1.textContent =
    `${country[3]} ${country[0]}`;

  compare1.appendChild(option1);


  const option2 =
    document.createElement("option");

  option2.value = country[0];

  option2.textContent =
    `${country[3]} ${country[0]}`;

  compare2.appendChild(option2);

});


function compareCountries() {

  const first =
    countries.find(
      country =>
        country[0] === compare1.value
    );


  const second =
    countries.find(
      country =>
        country[0] === compare2.value
    );


  document.getElementById(
    "compareResult"
  ).innerHTML = `

    <strong>
      ${first[3]} ${first[0]}
      VS
      ${second[3]} ${second[0]}
    </strong>

    <br><br>

    🌍 Region:<br>
    ${first[1]} — ${second[1]}

    <br><br>

    🏛️ Capital:<br>
    ${first[2]} — ${second[2]}

    <br><br>

    💰 Currency:<br>
    ${first[4]} — ${second[4]}

  `;

}


/* =====================================
   QUIZ
   ===================================== */

const quizQuestions = [

  {
    question:
      "🇫🇷 Paris adalah ibu kota negara...",

    options: [
      "France",
      "Italy",
      "Spain",
      "Germany"
    ],

    answer: "France"
  },


  {
    question:
      "🇯🇵 Tokyo adalah ibu kota...",

    options: [
      "China",
      "Japan",
      "South Korea",
      "Thailand"
    ],

    answer: "Japan"
  },


  {
    question:
      "🇮🇩 Jakarta adalah ibu kota...",

    options: [
      "Malaysia",
      "Indonesia",
      "Singapore",
      "Thailand"
    ],

    answer: "Indonesia"
  }

];


let quizIndex = 0;
let quizScore = 0;


function loadQuiz() {

  const question =
    quizQuestions[quizIndex];


  document.getElementById(
    "quizQuestion"
  ).textContent =
    question.question;


  const options =
    document.getElementById(
      "quizOptions"
    );


  options.innerHTML = "";


  question.options.forEach(option => {

    const button =
      document.createElement("button");

    button.className =
      "quiz-option";

    button.textContent =
      option;


    button.onclick = () =>
      answerQuiz(option);


    options.appendChild(button);

  });


  document.getElementById(
    "quizScore"
  ).textContent =
    `Score: ${quizScore}/${quizQuestions.length}`;

}


function answerQuiz(answer) {

  const question =
    quizQuestions[quizIndex];


  if (answer === question.answer) {

    quizScore++;

    alert("✅ Benar!");

  } else {

    alert(
      `❌ Salah. Jawaban: ${question.answer}`
    );

  }


  quizIndex++;


  if (
    quizIndex >=
    quizQuestions.length
  ) {

    document.getElementById(
      "quizQuestion"
    ).textContent =
      "🎉 Quiz selesai!";

    document.getElementById(
      "quizOptions"
    ).innerHTML =
      `<strong>Score akhir: ${quizScore}/${quizQuestions.length}</strong>`;

    return;

  }


  loadQuiz();

}


/* =====================================
   DARK / LIGHT MODE
   ===================================== */

document
  .getElementById("themeBtn")
  .addEventListener("click", () => {

    document
      .body
      .classList
      .toggle("light");


    const isLight =
      document.body.classList.contains(
        "light"
      );


    document.getElementById(
      "themeBtn"
    ).textContent =
      isLight ? "☀️" : "🌙";


    localStorage.setItem(
      "theme",
      isLight ? "light" : "dark"
    );

  });


if (
  localStorage.getItem("theme") ===
  "light"
) {

  document.body.classList.add("light");

  document.getElementById(
    "themeBtn"
  ).textContent = "☀️";

}


/* =====================================
   LANGUAGE SELECTOR
   ===================================== */

document
  .getElementById("languageBtn")
  .addEventListener("click", () => {

    const current =
      document.getElementById(
        "languageBtn"
      ).textContent;


    if (current === "🇮🇩") {

      document.getElementById(
        "languageBtn"
      ).textContent = "🇬🇧";

      alert(
        "English mode selected 🇬🇧\n\nFull translation can be added later."
      );

    } else {

      document.getElementById(
        "languageBtn"
      ).textContent = "🇮🇩";

      alert(
        "Mode Bahasa Indonesia 🇮🇩"
      );

    }

  });


/* =====================================
   START WEBSITE
   ===================================== */

renderCountries();

loadQuiz();