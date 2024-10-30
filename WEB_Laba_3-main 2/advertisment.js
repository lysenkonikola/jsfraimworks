document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close_adv_btn")[0];
    const timerDisplay = document.getElementById("advertismentTimer");

    let timer = 5;
    let timerId;

    function updateTimer() {
        timer--;
        timerDisplay.textContent = `Реклама зникне через: ${timer} секунд`;

        if (timer <= 0) {
            clearInterval(timerId);
            span.style.display = "block";
        }
    }

    setTimeout(() => {
        modal.style.display = "block";
        timerDisplay.textContent = `Реклама зникне через: ${timer} секунд`;
        timerId = setInterval(updateTimer, 1000);
    }, 10000);

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
