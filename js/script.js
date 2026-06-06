const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

function updateLanguage(lang){

    const elements =
        document.querySelectorAll("[data-key]");

    elements.forEach(element => {

        const key =
            element.getAttribute("data-key");

        if(
            translations[lang] &&
            translations[lang][key]
        ){

            element.textContent =
                translations[lang][key];

        } 
    });

}

function changeLanguage(lang){

    localStorage.setItem(
        "language",
        lang
    );

    updateLanguage(lang);

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const savedLanguage =
            localStorage.getItem("language")
            || "es";

        updateLanguage(savedLanguage);

    }
);

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "active"
            );

        }
    );

});

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if(
                window.scrollY >=
                sectionTop - 150
            ){

                current =
                section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove(
                "active-link"
            );

            if(
                link.getAttribute("href")
                === "#" + current
            ){

                link.classList.add(
                    "active-link"
                );

            }

        });

    }
);

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

document
.querySelectorAll(
".card, .gallery-item, .section h2"
)
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(".hero");

        let scroll =
            window.pageYOffset;

        hero.style.backgroundPositionY =
            scroll * 0.4 + "px";

    }
);

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    );

});