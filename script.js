alert("Vitaj hre OK!!! V tejto hre ide o to dať, čo najvisie skóre tým, že budeš ťukať na tlacitko OK, ktoré ty bude utekať. Pozor máš na to len určitý čas tak rýchlo. Uži si hru.");

let casomiera = 10;

let ok = document.querySelector("h1");

let kolkoClick = 0;

let style = getComputedStyle(ok);

ok.addEventListener("click", klikol);

function klikol() {
    kolkoClick++;

    document.querySelector("h2").textContent = kolkoClick;

    let oldLeft = parseInt(style.left);
    let oldRight = parseInt(style.top);


    let newLeft = oldLeft + Math.floor(Math.random() * (700 - (-700)) ) + (-700);
    ok.style.left = newLeft + "px";		

    var newRight = oldRight + Math.floor(Math.random() * (300 - (-300)) ) + (-300);
    ok.style.top = newRight + "px";

    if (newLeft <= 0){
        let newLeft = oldLeft + 700;
        ok.style.left = newLeft + "px";		
    }

    if (newLeft >= 1400){
        let newLeft = oldLeft - 700;
        ok.style.left = newLeft + "px";		
    }

    if (newRight <= 0){
        var newRight = oldRight + 300;
        ok.style.top = newRight + "px";
    }

    if (newRight >= 680){
        var newRight = oldRight - 300;
        ok.style.top = newRight + "px";
    }
}
//   ***********************************

let resetBtn = document.getElementById('reset');
 
let minute = 0;
let second = 0;
let count = 0;

ok.addEventListener('click', function () {
    if(kolkoClick <= 1){
        timer = true;
        stopWatch();
    }
});


resetBtn.addEventListener('click', function () {
    timer = false;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    kolkoClick = 0;
    document.querySelector("h1").style.display = "inline-block";
    kolkoClick = 0
});
 
function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        let minString = minute;
        let secString = second;
        let countString = count;

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);

        if (second == casomiera){
            timer = false;
            minute = 0;
            second = 0;
            count = 0;
            kolkoClick = 0;
            document.querySelector("h1").style.display = "none";
        }
    }
}

/* treba este spravit aby si si mohol zadat casomieru napr. cez prompt alebo inak cez ine okno atd.*/