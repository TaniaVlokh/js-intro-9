/**
 * bmi = weight/ high ^ 2
 */
const heightEl = document.getElementById('height')
const weightEl = document.getElementById('weight')
const btnEl = document.querySelector('button');
const resultEl = document.querySelector('#results');



btnEl.addEventListener('click', (event) => {
    event.preventDefault();

    const hVal = parseInt(heightEl.value);
    const wVal = parseInt(weightEl.value);
    
   const bmi = (wVal/(hVal/1000)^2)
   resultEl.innerHTML = bmi;

})

 


