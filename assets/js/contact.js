(function () {
    var form = document.querySelector("[data-contact-form]");

    if (!form) {
        return;
    }

    var status = document.querySelector("[data-form-status]");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        var data = new FormData(form);
        var name = String(data.get("name") || "").trim();
        var email = String(data.get("email") || "").trim();
        var message = String(data.get("message") || "").trim();

        var subject = encodeURIComponent("Portfolio enquiry from " + name);
        var body = encodeURIComponent(message + "\n\n—\n" + name + "\n" + email);

        if (status) {
            status.textContent = "Opening your email app…";
        }

        window.location.href = "mailto:munacips@gmail.com?subject=" + subject + "&body=" + body;
    });
})();
