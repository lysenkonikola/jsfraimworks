document.addEventListener("DOMContentLoaded", function() {
    const nonModalWindow = document.getElementById("nonModalWindow");
    const agreeButton = document.getElementById("agreeWindowbtn");
    const declineButton = document.getElementById("declineWindowBtn");

    setTimeout(() => {
        nonModalWindow.style.display = "block";
    }, 5000);

    agreeButton.addEventListener("click", () => {
        nonModalWindow.style.display = "none";
        sessionStorage.setItem("agreed", "true");
    });

    declineButton.addEventListener("click", () => {
        nonModalWindow.style.display = "none";
    });
});
