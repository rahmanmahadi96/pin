function getpin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getpin();
    }
}

function genpin (){
    const pin = getpin();
    document.getElementById('gen-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    if(isNaN(number)){

        if(number == c){
            calc.value = '';
        }
    }
    else{
    const calc = document.getElementById('typed-numbers');
    const prevCal = calc.value;
    const newCalc = prevCal + number;
    calc.value = newCalc;
    }
})

function verifypin(){
    const pin = document.getElementById('gen-input').value;
    const typed = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-pass');
    const fail = document.getElementById('notify-err');
    if(pin == typed){
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else{
        success.style.display = 'none';
        fail.style.display = 'block';
    }
}