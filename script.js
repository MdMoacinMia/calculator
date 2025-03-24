let numspan = document.querySelectorAll(".num span");
let aritmatick = document.querySelectorAll(".sai span");
let show = document.querySelector(".show h1");



numspan.forEach(NumSpan => {
    NumSpan.addEventListener("click", function(){
        let inputNumber = this.innerText;
        show.innerHTML+=inputNumber;
    });
});


aritmatick.forEach(aritma =>{
    aritma.addEventListener("click", function(){
        let inpuraritmatik = this.innerText;
        show.innerHTML+=inpuraritmatik;
    });
});


let soman = document.querySelector("#soman");
soman.addEventListener("click", function(){
    let value = show.textContent;
    let result = new Function( ' return ' + value)();
    show.innerHTML= result;
});

let closeAll = document.querySelector("#closeAll");

closeAll.addEventListener("click", function(){
    show.innerHTML = "";
})


let close = document.querySelector("#close");
close.addEventListener("click", function(){
    let currentText = show.innerText;
    if ( currentText.length > 0 ){
        show.innerText = currentText.slice(0, -1);
    }
})





