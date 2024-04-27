//Variable

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.querySelector("body");
const randomBtn = document.getElementById("random");
const cssMessage = document.getElementById("message")
const hexCodes = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
]

let fColor = hexCodeGenerator();
let sColor = hexCodeGenerator();

input1.value = fColor;
input2.value = sColor;
body.style.background = `linear-gradient(90deg,${fColor},${sColor})` ;
updateMessage(input1.value,input2.value);


input1.addEventListener("input", ()=> {
    let firstColor = input1.value;
    body.style.background = `linear-gradient(90deg,${firstColor},${input2.value})` ;
    updateMessage(input1.value,input2.value);
})

input2.addEventListener("input", ()=> {
    let secondColor = input2.value;
    body.style.background = `linear-gradient(90deg,${input1.value},${secondColor})` ;
    updateMessage(input1.value,input2.value);
})

randomBtn.addEventListener("click", ()=>{
    let firstRandom = hexCodeGenerator();
    let secondRandom = hexCodeGenerator();
    body.style.background = `linear-gradient(90deg,${firstRandom},${secondRandom})`
    updateMessage(firstRandom,secondRandom)
    input1.value = firstRandom;
    input2.value = secondRandom;
})






function updateMessage(first,second) {
    cssMessage.textContent = `background: linear-gradient(90deg, ${first}, ${second})`
}

function hexCodeGenerator() {
    let randomHexCode = "#"
    for (var i=0; i<6;i++ ){
        let hexCode = hexCodes[Math.floor(Math.random()*hexCodes.length)];
        randomHexCode = randomHexCode + hexCode
    }
    return randomHexCode;
}

