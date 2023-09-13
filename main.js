let display = document.getElementById('display');
let allButtons = document.querySelectorAll('button');
let store = "";

let buttonArray = Array.from(allButtons);

buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            if((store).includes('.')) {
                store = eval(store).toFixed(2);
                display.value = store;
            }
            else {
                store = eval(store);
                display.value = store;
            }
        }
        else if(e.target.innerHTML == 'AC') {
            store = '';
            display.value = store;
        }
        else if(e.target.innerHTML == 'C') {
            store = store.toString().slice(0, -1)
            display.value = store;
        }
        else {
            store += e.target.innerHTML;
            display.value = store;
        }
    })
});
