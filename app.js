let name = prompt("İsminiz:");
let p1 = document.querySelector("#first");
let p2 = document.querySelector("#second");
p1.textContent = `Merhaba, ${name}! Hoş Geldin!`

function showClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();

    switch(day){
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    }
    hour = hour < 10 ? "0" + hour: hour;
    minute = minute < 10 ? "0" + minute : minute;
    second =  second < 10 ? "0" + second : second;
    p2.textContent = `${hour} : ${minute} : ${second} ${day}`;
    setTimeout(showClock,1000);
}
