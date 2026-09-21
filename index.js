const display = document.getElementById("_status");
const generator = document.getElementById("_generator");
const clientInput = document.getElementById("_client-text");
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let captcha = "";

function generateCaptcha(){
    const captchaLength = 6;
    captcha = "";
    for(let i = 0; i < captchaLength; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.substring(randomIndex, randomIndex + 1);
    }
    generator.value = captcha;
    display.innerText = "Captcha Generator";
}

generateCaptcha();

submit.onclick = function checkInput(){
    const input = clientInput.value;
    if(input === ""){
        display.innerText = "Please Enter the text Shown below👇";
    }else if(input === captcha){
        display.innerText = "Matched😎";
    }else{
        display.innerText = "Not-Matched😖";
    }
}

refresh.onclick = function refreshCaptcha(){
    generateCaptcha();
    clientInput.value = "";
}







