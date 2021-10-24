let [miliseconds, seconds, minutes, hours];
let timerRef = document.querySelector('.timerDisplay');
let int;

document.getElementById('.startTimer').addEventListener('click', ()=>{
    int = setInterval(displayTimer, 10);
});

function displayTimer(){
    miliseconds+=10;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;
} 