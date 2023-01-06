const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const cityName = document.querySelector('.cityName');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');

button.addEventListener('click',function () {    
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a6440c30f82db5c7e3010329158842bd')
.then (response => response.json())
.then (data => {
 
    const nameValue = data['name'];
    const descValue = data['weather'][0]['description'];
    const tempValue = data['main']['temp'];
    const latValue = data['coord']['lat'];
    const lonValue = data['coord']['lon'];
    
    cityName.innerHTML = nameValue;
    desc.innerHTML = tempValue;
    temp.innerHTML = descValue;
    lat.innerHTML = latValue;
    lon.innerHTML = lonValue;
})
.catch(err => alert(err))
})
