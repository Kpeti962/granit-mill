function sendMail() {

    const wrongAlert = document.querySelector(".wrongAlert");
    const successAlert = document.querySelector(".successAlert");
    const params = {
        subject: document.getElementById("options").value,
        name: document.getElementById("name").value,
        tel: document.getElementById("tel").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value

    };

    let datasheet = document.getElementById("checkbox").checked;

    if (datasheet && params.name !== "" && params.subject !== "" && params.tel !== "" && params.email !== "" && params.message !== "") {
        emailjs.send("service_vochazd", "template_q5cwc7b", params)
            .then(() => {
                successAlert.classList.remove("hidden");
                setTimeout(() => {
                    successAlert.classList.add("hidden");
                }, 3000);
            });

        document.getElementById("options").value = "";
        document.getElementById("name").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("email").value = "";
        document.getElementById("company").value = "";
        document.getElementById("message").value = "";
        document.getElementById("checkbox").checked = false;
    } else if (!datasheet || params.name == "" || params.subject == "" || params.tel == "" || params.email == "" || params.message == "") {
        wrongAlert.classList.remove("hidden")

        setTimeout(() => {
            wrongAlert.classList.add("hidden")
        }, 3000);
    }

}


function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(pair => {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

window.onload = function () {
    const params = getQueryParams();
    if (params.selected) {
        const select = document.getElementById("options");
        select.value = params.selected;
    }
};

