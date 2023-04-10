// Variables Declaration...
let generateDisplay = document.getElementById('displayGenerate');
let formDisplay = document.getElementById('formDisplay');
let pinMatch = document.getElementById('notify2');
let noMatch = document.getElementById('notify1');
let generateButton = document.querySelector('.generate-btn');
let lessNum = document.getElementById('lessNum').innerText;
let lessNumCon = parseInt(lessNum);
// Generate pin Area...
generateButton.addEventListener('click', (e) => {
    let randomNumber = Math.floor(Math.random() * 9999) + 1000;
    generateDisplay.value += randomNumber;
    
});
// Keyboard Area...
let buttons = Array.from(document.querySelectorAll('.button'));
buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                formDisplay.value = " ";
                break;
            case '←':
                formDisplay.value = formDisplay.value.slice(0, -1);
                break;
            default:
                formDisplay.value += e.target.innerText;
        }
    });
});
// Submit Area....
const submit = document.getElementById('submit-btn');
submit.addEventListener('click', (e) => {
    if(generateDisplay.value == formDisplay.value) {
        document.getElementById('notify2').style.display = 'block';
        setTimeout(() => {
            document.getElementById('notify2').style.display = 'none';
        }, 3000);
    }else {
        document.getElementById('notify1').style.display = 'block';
        setTimeout(() => {
            document.getElementById('notify1').style.display = 'none';
        }, 3000);
    }
        generateDisplay.value = "";
        formDisplay.value = "";
    if(generateDisplay.value != formDisplay.value) {
        lessNumCon--;
    }
})
