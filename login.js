// For default call to generate captcha 
window.onload = cap;

// Function for generate captcha
function cap() {
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
                'T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b',
                'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
                'v','w','x','y','z','!','@','#','$','%','^','&','*','+'];
    let a = alpha[Math.floor(Math.random()*71)];
    let b = alpha[Math.floor(Math.random()*71)];
    let c = alpha[Math.floor(Math.random()*71)];
    let d = alpha[Math.floor(Math.random()*71)];
    let e = alpha[Math.floor(Math.random()*71)];
    let f = alpha[Math.floor(Math.random()*71)];

    let final = (a + b + c + d + e + f);
    document.getElementById("capt").value = final;
} 

// Function for username, email and captcha validation
function validCap() {
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let nameRegEx = /^[A-Za-z\s]+$/;
    let validRegex = /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
    let emailValidateion = validRegex.test(email);
    let nameValidateion = nameRegEx.test(userName);

    let stg1 = document.getElementById('capt').value;
    let stg2 = document.getElementById('textInput').value;
    
    if(nameValidateion && emailValidateion && stg1 == stg2) {
        alert("Login successfully.");
        window.location.href = "index.html";
        return true;
    } else {
        alert("Please enter valid username, email or captcha.");
        return false;
    }
}