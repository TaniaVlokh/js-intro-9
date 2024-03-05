const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

for(let i = 0; i < cities.length; i++){
    if(cities[i].length % 2 !== 0) {
        console.log(cities[i]);
        break;
    }
}

const cityMore5 = [];

for(const city of cities){
    if(city.length > 5) cityMore5.push(city);
}
console.log(cityMore5)