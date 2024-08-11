function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();


    if (hours < 10) {

        hours = `0${hours}`
        console.log(hours)
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (secondes < 10) {
        secondes = `0${secondes}`
    }

    document.getElementById("clock").textContent = `${hours}:${minutes}:${secondes}`
}

window.onload = function() {

    setInterval(showTime, 500)
};