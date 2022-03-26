let display = document.querySelector('#currentDisplay');
let buttons = Array.from(document.getElementsByClassName('buttons'));
let memory = document.querySelector('#answer');

buttons.map( button => {
        button.addEventListener('click', (d) => {
            switch(d.target.innerHTML){
                case 'C':
                    display.innerHTML = '';
                    break;
                case '←':
                    display.innerHTML = display.innerHTML.slice(0,-1);
                    break;
                case '=':
                    try{
                        let answer = eval(display.innerHTML);
                        memory.innerHTML = answer;
                    }
                    catch{
                        memory.innerHTML = 'Error!';
                    }
                    finally{
                        display.innerHTML = '';
                    }
                    break;
                default:
                display.innerHTML += d.target.innerHTML;
            }
        });
    })