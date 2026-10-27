(function () {
    var year = document.querySelector("[data-current-year]");

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }

    document.querySelectorAll("[data-print]").forEach(function (button) {
        button.addEventListener("click", function () {
            window.print();
        });
    });
})();
