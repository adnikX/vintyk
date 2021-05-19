let nAme = "ALex";
let age = 88;
console.log(nAme, typeof age);

const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".header_nav a");
console.log(navLinks);

function number1() {
    console.log("My mane is Jupiter");
}
number1();
function sinpleMat(a, b) {
    let result = a + b;
    console.log(result);
}
sinpleMat(112, 22);

// Скроллинг

window.addEventListener("scroll", checkScroll);
document.addEventListener("DONcontentLoaded", checkScroll)

function checkScroll () {
    let scrollpos = window.scrollY;
    if (scrollpos > 0) {
        header.classList.add("red")
    } else {
        header.classList.remove("red")
    }      
}

// Клики

const testbutton = document.querySelector(".button");
testbutton.addEventListener("click", function name(params) {
    console.log("cliked");
});

for(let navItem of navLinks) {
    navItem.addEventListener("click", function name(params) {
        console.log(navItem.text);
    });
}