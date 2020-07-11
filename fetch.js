class Fetch {
    async getCurrentLocationWeather(input){
        const apiKey = '38c730700486700e008b1a8a8008b2aa';

        const response  = await fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }



}