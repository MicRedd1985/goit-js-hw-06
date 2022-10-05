const decrement = document.querySelectorAll ("button")[0];
const increment = document.querySelectorAll ("button")[1];


let counterValue = 0;


decrement.addEventListener('click', (event)=> {
    counterValue = counterValue - 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
});

increment.addEventListener(`click`, (event)=> {
    counterValue += 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
});
