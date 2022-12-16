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
        $(".plus").click(function(){
            $(this).toggleClass("minus")  ; 
           })
     
});
      