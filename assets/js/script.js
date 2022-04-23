var textarea = document.getElementById("password");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_";
var temp = "";
var password = ""; 

document.querySelector('button').addEventListener('click', handleClick);

function handleClick() {
    let len = prompt('Select a number from: (8-128)');
    
    if(len < 8){
        alert("The number chosen was too short. Try Again!");
        return handleClick();
    };
    if(len >128){
        alert("The number chosen was too long. Try Again!");
        return handleClick();
    };
    if(isNaN(len)){
        alert("Please provide a number.");
        return handleClick();
    };

    let lower = confirm("Would you like lowercase letters on your password?");
    if(lower) temp += letters;
    
    let upper = confirm("Would you like uppercase letters on your password?");
    if(upper) temp += letters.toUpperCase();

    let num = confirm("Would you like numbers in your password?");
    if(num) temp += numbers;

    let special = confirm("Would you like special characters in your password?");
    if(special) temp += symbols;

    for (let i = 0; i < len; i++) {
        password += temp[Math.floor(Math.random() * temp.length)]
    }


    textarea.innerText = password;
}
