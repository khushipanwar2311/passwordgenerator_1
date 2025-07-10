function getRandomPassword(length) {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let password = "";

for (let index = 0; index < length; index++) {
    let randomIndex = Math.floor(Math.random()*char.length);
    password += char[randomIndex]
}
return password;
}

document.getElementById("btn").addEventListener("click", function(){
let password = getRandomPassword(8);
document.getElementById("passdisplay").textContent = password;


});