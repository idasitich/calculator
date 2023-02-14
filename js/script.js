const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const keyscreen = document.getElementById('keyscreen');

let inputsString =[];
let operator;
let number1;
let number2;

const isOperator = (element) => (element == '+'|| element == '-' || element == '/' || element == '*');

const rinseWell = () => screen.textContent = "";
const clear = () => keyscreen.textContent = "";

const controlDecimals = (num) => {
    if(num - Math.floor(num) != 0 && (num - Math.trunc(num)).toString().length > 8) {
        return num.toFixed(7);
    }
    return num;
}


const reset = () => {
    screen.className= '';
    screen.textContent = '';
    keyscreen.textContent = '';
    operator = '';
    number1 = 0;
    number2 = 0;
    inputsString = [];
    negativize = 1;
};

const mathOperation = (number1, operator, number2) => {
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = (number2 != 0)? (number1 / number2): 'Please, do not divide by 0';
            break;
        default:
            result = 'Please, right operators';
      }
    return result;
}
 
document.querySelectorAll('.yellow').forEach(button => {
    screen.className= '';
    button.addEventListener('click', () => {
        if(screen.textContent == '0' && button.value == '0'){ return; }
        else{
            screen.textContent += button.value;
            inputsString.push(button.value);
            console.log(inputsString);
            keyscreen.textContent =inputsString.join('');
        }
})});

document.querySelectorAll('.purple').forEach(button => {
        screen.className= '';
        button.addEventListener('click', () => {
            if(button.value == '-'){
                if(screen.textContent.length == 0){ 
                    screen.textContent = button.value 
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                }
                else if((screen.textContent == '' || isOperator(screen.textContent.charAt(-1)))){
                    screen.textContent += button.value 
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                } else {
                    number1 = Number(screen.textContent);
                    operator= button.value
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                    console.log('screen_after_operator', screen.textContent)
                    console.log('number1_after_operator', number1)
                    console.log('number2_after_operator', number2)
                    console.log('operator_after_operator', number2)
                    rinseWell();
                }
                
            } else if( button.value == '+'){
                console.log('my prev screen with +', inputsString.at(-1));
                console.log('-1', inputsString.at(-1));
                if(!isOperator(inputsString.at(-1))) {
                    number1 = Number(screen.textContent);
                    operator= button.value
                    inputsString.push(button.value);
                    keyscreen.textContent =inputsString.join('');
                   
                    console.log('screen_after_operator', screen.textContent)
                    console.log('number1_after_operator', number1)
                    console.log('number2_after_operator', number2)
                    console.log('operator_after_operator', number2)
                    rinseWell();
                } else {
                    screen.textContent = screen.textContent 
                    inputsString.push();
                    keyscreen.textContent =inputsString.join('');
                }
            }
            else {
                number1 = Number(screen.textContent);
                operator= button.value
                inputsString.push(button.value);
                keyscreen.textContent =inputsString.join('');
                console.log('screen_after_operator', screen.textContent)
                console.log('number1_after_operator', number1)
                console.log('number2_after_operator', number2)
                console.log('operator_after_operator', number2)
                rinseWell();
            }
    })});


equals.addEventListener("click", () => {
    screen.className= '';
    number2 = Number(screen.textContent);
    
    let result = (number1 && operator && number2)? controlDecimals(mathOperation(number1, operator, number2)): 'invalid operation';
    if(isNaN(result)){ screen.className= 'smaller_font';}
    screen.textContent = (isNaN(result) && result != 'Please, not divide by 0')? 'Error, Invalid Numbers': result;
    screen.textContent = result;
    console.log('screen_after_equals', screen.textContent)
    console.log('number1_after_equals', number1)
    console.log('number2_after_equals', number2)
    console.log('result', result)
});

ac.addEventListener('click', () => reset());

bs.addEventListener('click', () => screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1));


document.addEventListener('keydown', function (event) {
    let numbers = /[0-9]/g;
    let operators = /[+\-*\/]/g;
    if (event.key.match(numbers)) {
      screen.textContent += event.key;
      keyscreen.textContent += event.key;
    }
    if (event.key === '.') {
      screen.textContent += event.key;
      keyscreen.textContent += event.key;
    }
    if (event.key.match(operators)) {
      number1 = +screen.textContent;
      operator = event.key;
      screen.textContent += event.key;
       rinseWell();
      keyscreen.textContent += event.key;
    }
    if (event.key === 'Enter' || event.key === '=') {
      number2 = +screen.textContent;
      if(isNaN(number1)) {screen.textContent = 'Error, Invalid Numbers';};
      let result = mathOperation(number1, operator, number2);
      if(result == 'Please, not divide by 0'){ screen.className= 'smaller_font';}
      screen.textContent = mathOperation(number1, operator, number2);
      clear();
    }
    if (event.key === "Backspace") {
      reset()
    }
    if (event.key == 'Delete') {
     screen.textContent =  screen.textContent.substring(0, screen.textContent.length - 1)
    }
  });
  



