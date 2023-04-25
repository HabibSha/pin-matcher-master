// Variables Declaration...
const generateDisplay = document.getElementById('displayGenerate');
const formDisplay = document.getElementById('formDisplay');
const pinMatch = document.getElementById('notify2');
const pinNotMatch = document.getElementById('notify1');
const generateButton = document.querySelector('.generate-btn');
const lessNum = document.getElementById('lessNum').innerText;
let less = parseInt(lessNum);


// Generate pin Area...
generateButton.addEventListener('click', (e) => {
    let randomNumber = Math.floor(Math.random() * 9999) + 1000;
    generateDisplay.value += randomNumber;
    
});

// // Keyboard Area...
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

// // Submit Area....
const submit = document.getElementById('submit-btn');
submit.addEventListener('click', (e) => {
    if(generateDisplay.value == formDisplay.value) {
        pinMatch.style.display = 'block';
        setTimeout(() => {
            pinMatch.style.display = 'none';
        }, 3000);
    }else {
        pinNotMatch.style.display = 'block';
        setTimeout(() => {
            pinNotMatch.style.display = 'none';
        }, 3000);
    }
    if(generateDisplay.value != formDisplay.value) {
        less--;
    }
    generateDisplay.value = "";
    formDisplay.value = "";
})





// const generateButton = document.querySelector('.generate-btn');
// const generateDisplay = document.getElementById('displayGenerate');
// const formDisplay = document.getElementById('formDisplay');
// const notify1 = document.getElementById('notify1');
// const notify2 = document.getElementById('notify2');

// generateButton.addEventListener('click', (e) => {
//     let randomNumber = Math.floor(Math.random() * 9999) + 1000;
//     generateDisplay.value += randomNumber;
// })

// let buttons = Array.from(document.querySelectorAll('.button'));
// buttons.map((button) => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 formDisplay.value = " ";
//                 break;
//             case '←':
//                 formDisplay.value = formDisplay.value.slice(0, -1);
//                 break;
//             default:
//                 formDisplay.value += e.target.innerText;
//         }
//     })
// })

// const submit = document.getElementById('submit-btn');
// submit.addEventListener('click', (e) => {
//     if(generateDisplay.value == formDisplay.value){
//         notify2.style.display = "block";
//         setTimeout(() => {
//             notify2.style.display = 'none';
//         }, 3000);
//     }else{
//         notify1.style.display = "block";
//         setTimeout(() => {
//             notify1.style.display = 'none';
//         }, 3000);
//     }
//     generateDisplay.value = " ";
//     formDisplay.value = " ";
// })

