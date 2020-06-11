var dark_mode_no_transition;

function dark() {
    if (document.getElementById("dark_button").textContent=="🌙") {
        document.getElementById("dark_button").textContent = "☀️";
        localStorage.setItem("dark_mode", "on");
    }
    else {
        document.getElementById("dark_button").textContent = "🌙";
        localStorage.setItem("dark_mode", "off");
    }
    document.getElementById("dark_button").classList.toggle("btn_dark");
    if (dark_mode_no_transition=="1" || dark_mode_no_transition=="2" ) {
        document.body.classList.toggle("dark-mode-no-transition");
        if(dark_mode_no_transition=="2") {
            dark_mode_no_transition="3";
        }
        else {
            dark_mode_no_transition = "2";
        }
    }
    else {
        document.body.classList.toggle("dark-mode");
    }
    for (var i = 0; i < document.getElementsByClassName("link").length; i++) {
        document.getElementsByClassName("link")[i].classList.toggle("dark-link");
    }
    for (var i = 0; i < document.getElementsByClassName("cli").length; i++) {
        document.getElementsByClassName("cli")[i].classList.toggle("dark-cli");
    }
}

function dark_time() {
    if (new Date().getHours() > 17 || new Date().getHours() < 6) {
        dark_mode_no_transition="1";
        dark();
    }
}

function dark_save() {
    
    if(!localStorage.getItem("dark_first")) {
        localStorage.setItem("dark_first", "1");
    }
    if(localStorage.getItem("dark_mode")=="on") {
        dark_mode_no_transition="1";
        dark();
    }
    if(localStorage.getItem("dark_first")=="1") {
        dark_time();
    }
    localStorage.setItem("dark_first", "2");
}
