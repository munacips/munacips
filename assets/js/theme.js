(function () {
    var toggle = document.querySelector("[data-theme-toggle]");
    var icon = document.querySelector("[data-theme-icon]");

    function setTheme(theme) {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem("theme", theme);
        } catch (error) {
            /* Storage can be unavailable when the site is opened from a file. */
        }
        if (icon) {
            icon.textContent = theme === "dark" ? "Light" : "Dark";
        }
        if (toggle) {
            toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        }
    }

    if (!toggle) {
        return;
    }

    setTheme(document.documentElement.dataset.theme || "light");

    toggle.addEventListener("click", function () {
        var current = document.documentElement.dataset.theme || "light";
        setTheme(current === "dark" ? "light" : "dark");
    });
})();
