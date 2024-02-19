let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", mainColor);

    document.querySelectorAll(".colors-list li").forEach((element) => {
        element.classList.remove("active");

        if (element.dataset.color === mainColor) {
            element.classList.add("active");
        }
    });
}

let backgroundOption = true;

let BackgroundInterval;

let BackgroundLocalItem = localStorage.getItem("background_option");

if (BackgroundLocalItem !== null) {
    if (BackgroundLocalItem === "true") {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    document.querySelectorAll(".random-Backgrounds span").forEach((element) => {
        element.classList.remove("active");
    });
    if (BackgroundLocalItem === "true") {
        document.querySelector(".random-Backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-Backgrounds .no").classList.add("active");
    }
}

let landingPage = document.querySelector(".landing-page");

let imgsArray = [
    "background.png",
    "background.png",
    "background.png",
    "background.png",
    "background.png",
    "background.png",

];

landingPage.style.backgroundImage = 'url("image/2.jpg")';

let randomNumber = Math.floor(Math.random() * imgsArray.length);

function randomizeImgs() {
    if (backgroundOption === true) {
        BackgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            landingPage.style.backgroundImage =
                'url("image/' + imgsArray[randomNumber] + '")';
        }, 3000);
    }
}
randomizeImgs();

document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open");
};

const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );

        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);
    });
});

const randomBackEl = document.querySelectorAll(".random-Backgrounds span");

randomBackEl.forEach((span) => {
    span.addEventListener("click", (e) => {
        handleActive(e);

        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(BackgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});

let ourSkills = document.querySelector(".skills");
let skillsAnimated = false;

window.onscroll = function () {
    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (
        windowScrollTop >
        skillsOffsetTop + skillsOuterHeight - windowHeight * 1.1
    ) {
        if (!skillsAnimated) {
            animateSkills();
            skillsAnimated = true;
        }
    } else {
        resetSkills();
        skillsAnimated = false;
    }
};

function animateSkills() {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach((skill) => {
        skill.style.width = skill.dataset.progress;
    });
}

function resetSkills() {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach((skill) => {
        skill.style.width = "0";
    });
}

let ouruserp = document.querySelectorAll(".userp img");

ouruserp.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);
    });
});

let ourhomep = document.querySelectorAll(".homep img");

ourhomep.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);
    });
});

let ouradminp = document.querySelectorAll(".adminp img");

ouradminp.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);
    });
});

let ourUML = document.querySelectorAll(".UML img");

ourUML.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);
    });
});

let ourgithub = document.querySelectorAll(".github img");

ourgithub.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);
    });
});
let ourclickup = document.querySelectorAll(".clickup img");

ourclickup.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);
    });
});
let ourfigma = document.querySelectorAll(".figma img");

ourfigma.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);
    });
});

document.addEventListener("click", function (e) {
    if (e.target.className == "close-button") {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
});

const allBullets = document.querySelectorAll(".hav-bullets .bullet");

const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {
    elements.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".hav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
    bulletsSpan.forEach((span) => {
        span.classList.remove("active");
    });

    if (bulletLocalItem === "block") {
        bulletsContainer.style.display = "block";
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletsSpan.forEach((span) => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "show") {
            bulletsContainer.style.display = "block";
            localStorage.setItem("bullets_option", "block");
        } else {
            bulletsContainer.style.display = "none";
            localStorage.setItem("bullets_option", "none");
        }

        handleActive(e);
    });
});

document.querySelector(".reset-options").onclick = function () {
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");

    window.location.reload();
};

let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
    e.stopPropagation();

    const isMenuActive = this.classList.contains("menu-active");
    const isLinksOpen = tlinks.classList.contains("open");

    if (isMenuActive || isLinksOpen) {
        this.classList.remove("menu-active");
        tlinks.classList.remove("open");
    } else {
        this.classList.add("menu-active");
        tlinks.classList.add("open");
    }
};

document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== tlinks) {
        if (tlinks.classList.contains("open")) {
            toggleBtn.classList.toggle("menu-active");
            tlinks.classList.toggle("open");
        }
    }
});

tlinks.onclick = function (e) {
    e.stopPropagation();
};

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;

    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
    document.getElementById("date-time").innerHTML = formattedToday;
};

clock();
