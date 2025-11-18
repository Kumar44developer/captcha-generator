const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let captcha = "";


body.onload = function generateCaptcha(){
 const captchaLength = 6;
    for(let i = 0; i<captchaLength; i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.substring(randomIndex,randomIndex + 1);
    }
