const cities = [
    {
        "id": 1,
        "name": "Palermo",
        "value": "palermo"
    },
    {
        "id": 2,
        "name": "Bagheria",
        "value": "bagheria"
    },
    {
        "id": 3,
        "name": "Monreale",
        "value": "monreale"
    },
    {
        "id": 4,
        "name": "Carini",
        "value": "carini"
    },
    {
        "id": 5,
        "name": "Partinico",
        "value": "partinico"
    },
    {
        "id": 6,
        "name": "Misilmeri",
        "value": "misilmeri"
    },
    {
        "id": 7,
        "name": "Termini Imerese",
        "value": "termini_imerese"
    },   
    {
        "id": 8,
        "name": "Villabate",
        "value": "villabate"
    },   
    {
        "id": 9,
        "name": "Cefalù",
        "value": "cefalu"
    },   
    {
        "id": 10,
        "name": "Ficarazzi",
        "value": "ficarazzi"
    },   
    {
        "id": 11,
        "name": "Cinisi",
        "value": "cinisi"
    },
    {
        "id": 12,
        "name": "Terrasini",
        "value": "terrasini"
    },   
    {
        "id": 13,
        "name": "Casteldaccia",
        "value": "casteldaccia"
    },   
    {
        "id": 14,
        "name": "Capaci",
        "value": "capaci"
    },   
    {
        "id": 15,
        "name": "Belmonte Mezzagno",
        "value": "belmonte_mezzagno"
    },   
    {
        "id": 16,
        "name": "Santa Flavia",
        "value": "santa_flavia"
    },
    {
        "id": 17,
        "name": "Corleone",
        "value": "corleone"
    },   
    {
        "id": 18,
        "name": "Trabia",
        "value": "trabia"
    },   
    {   "id": 19,
        "name": "Altofonte",
        "value": "altofonte"
    },   
    {   "id": 20,
        "name": "Castelbuono",
        "value": "castelbuono"
    },   
    {
        "id": 21,
        "name": "San Giuseppe Jato",
        "value": "san_giuseppe_jato"
    },   
    {
        "id": 22,
        "name": "Altavilla Milicia",
        "value": "altavilla_milicia"
    },
    {
        "id": 23,
        "name": "Caccamo",
        "value": "caccamo"
    },   
    {
        "id": 24,
        "name": "Campofelice di Roccella",
        "value": "campofelice_di_roccella"
    },   
    {
        "id": 25,
        "name": "Borgetto",
        "value": "borgetto"
    },   
    {
        "id": 26,
        "name": "Isola delle Femmine",
        "value": "isola_delle_femmine"
    },   
    {
        "id": 27,
        "name": "Lercara Friddi",
        "value": "lercara_friddi"
    },
    {
        "id": 28,
        "name": "Gangi",
        "value": "gangi"
    },
    {
        "id": 29,
        "name": "Marineo",
        "value": "marineo"
    },   
    {
        "id": 30,
        "name": "Balestrate",
        "value": "balestrate"
    },   
    {
        "id": 31,
        "name": "Piana degli Albanesi",
        "value": "piana_degli_albanesi"
    },   
    {
        "id": 32,
        "name": "Montelepre",
        "value": "montelepre"
    },
    {
        "id": 33,
        "name": "San Cipirello",
        "value": "san_cipirello"
    },   
    {
        "id": 34,
        "name": "Cerda",
        "value": "cerda"
    },   
    {
        "id": 35,
        "name": "Prizzi",
        "value": "prizzi"
    },   
    {
        "id": 36,
        "name": "Bisacquino",
        "value": "bisacquino"
    },   
    {
        "id": 37,
        "name": "Collesano",
        "value": "collesano"
    },   
    {
        "id": 38,
        "name": "Caltavuturo",
        "value": "caltavuturo"
    },
    {
        "id": 39,
        "name": "Ciminna",
        "value": "ciminna"
    },   
    {
        "id": 40,
        "name": "Lascari",
        "value": "lascari"
    },   
    {
        "id": 41,
        "name": "Alia",
        "value": "alia"
    },   
    {
        "id": 42,
        "name": "Valledolmo",
        "value": "valledolmo"
    },   
    {
        "id": 43,
        "name": "Villafrati",
        "value": "villafrati"
    },
    {
        "id": 44,
        "name": "Castellana Sicula",
        "value": "castellana_sicula"
    },   
    {
        "id": 45,
        "name": "Polizzi Generosa",
        "value": "polizzi_generosa"
    },   
    {
        "id": 46,
        "name": "Montemaggiore Belsito",
        "value": "montemaggiore_belsito"
    },   
    {
        "id": 47,
        "name": "Petralia Soprana",
        "value": "petralia_soprana"
    },   
    {
        "id": 48,
        "name": "Camporeale",
        "value": "camporeale"
    },
    {
        "id": 49,
        "name": "Trappeto",
        "value": "trappeto"
    },   
    {
        "id": 50,
        "name": "Castronovo di Sicilia",
        "value": "castronovo_di_sicilia"
    },   
    {
        "id": 51,
        "name": "Pollina",
        "value": "pollina"
    },   
    {
        "id": 52,
        "name": "Mezzojuso",
        "value": "mezzojuso"
    },
    {
        "id": 53,
        "name": "Sciara",
        "value": "sciara"
    },   
    {
        "id": 54,
        "name": "Petralia Sottana",
        "value": "petralia_sottana"
    },   
    {
        "id": 55,
        "name": "Chiusa Sclafani",
        "value": "chiusa_sclafani"
    },   
    {
        "id": 56,
        "name": "Vicari",
        "value": "vicari"
    },   
    {
        "id": 57,
        "name": "Roccapalumba",
        "value": "roccapalumba"
    },
    {
        "id": 58,
        "name": "Giardinello",
        "value": "giardinello"
    },   
    {
        "id": 59,
        "name": "Palazzo Adriano",
        "value": "palazzo_adriano"
    },   
    {
        "id": 60,
        "name": "Alimena",
        "value": "alimena"
    },   
    {
        "id": 61,
        "name": "Baucina",
        "value": "baucina"
    },
    {
        "id": 62,
        "name": "Ventimiglia di Sicilia",
        "value": "ventimiglia_di_sicilia"
    },   
    {
        "id": 63,
        "name": "Giuliana",
        "value": "giuliana"
    },   
    {
        "id": 64,
        "name": "Geraci Siculo",
        "value": "geraci_siculo"
    },   
    {
        "id": 65,
        "name": "Contessa Entellina",
        "value": "contessa_entellina"
    },
    {
        "id": 66,
        "name": "San Mauro Castelverde",
        "value": "san_mauro_castelverde"
    },   
    {
        "id": 67,
        "name": "Isnello",
        "value": "isnello"
    },   
    {
        "id": 68,
        "name": "Roccamena",
        "value": "roccamena"
    },   
    {
        "id": 69,
        "name": "Bonpietro",
        "value": "bonpietro"
    },   
    {
        "id": 70,
        "name": "Ustica",
        "value": "ustica"
    },
    {
        "id": 71,
        "name": "Campofiorito",
        "value": "campofiorito"
    },  
    {
        "id": 72,
        "name": "Aliminusa",
        "value": "aliminusa"
    },   
    {
        "id": 73,
        "name": "Godrano",
        "value": "godrano"
    },   
    {
        "id": 74,
        "name": "Cefalà Diana",
        "value": "cefala_diana"
    },
    {
        "id": 75,
        "name": "Blufi",
        "value": "blufi"
    },   
    {
        "id": 76,
        "name": "Santa Cristina Gela",
        "value": "santa_cristina_gela"
    },   
    {
        "id": 77,
        "name": "Gratteri",
        "value": "gratteri"
    },   
    {
        "id": 78,
        "name": "Scillato",
        "value": "scillato"
    },
    {
        "id": 79,
        "name": "Campofelice di Fitalia",
        "value": "campofelice_di_fitalia"
    },   
    { 
        "id": 80,
        "name": "Sclafani Bagni",
        "value": "sclafani_bagni"
    },
    { 
        "id": 81,
        "name": "Torretta",
        "value": "torretta"
    },
    { 
        "id": 82,
        "name": "Bolognetta",
        "value": "bolognetta"
    }

]


function populateSelect() {
    let ele = document.getElementById('sel');
    cities.forEach(function(e) {
        ele.innerHTML += '<option value="' + e.name + '">' + e['name'] + '</option>';
    })

}

let selectElement = document.querySelector('#sel');

populateSelect();

function myFunction(element) {
     document.getElementById("city").value = element;
}


window.addEventListener("load", () => {
    let long;
    let lat;

    let weatherEl = document.querySelector('.weather');
    let cityEl = document.querySelector('.city-name');
    let temperatureEl = document.querySelector('.temperature-med');
    let temperatureMinEl = document.querySelector('.temperature-min');
    let temperatureMaxEl = document.querySelector('.temperature-max');
    let umidityEl = document.querySelector('.temperature-umid');

    let locationIcon = document.querySelector('.icon');
    let lang = (navigator.language).substring(0,2);


    let form = document.querySelector('form');
    let input = document.querySelector('input');


    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=070b535a065269d120547bf9c828b152&lang=${lang}`;

    form.addEventListener('click', e => {
        e.preventDefault();
        let city = input.value;
        input.value='';
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=070b535a065269d120547bf9c828b152&lang=${lang}`;
        fetch(api)
            .then((res) => {    
                return res.json();
            })
            .then((data) => {
                const {name, weather, main} = data;
                temperatureEl.textContent = Math.trunc(main.temp-273);
                weatherEl.textContent = (weather[0].description).toUpperCase();
                cityEl.textContent = name.toUpperCase();
                locationIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
                temperatureMinEl.textContent = Math.trunc(main.temp_min-273);
                temperatureMaxEl.textContent = Math.trunc(main.temp_max-273);
                umidityEl.textContent = `${main.humidity}`;
             })
            
        })     
});
      