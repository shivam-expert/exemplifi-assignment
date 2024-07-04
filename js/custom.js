let navLink = document.querySelectorAll(".dropdown");
let megaMenu = document.querySelectorAll(".mega-menu");
let mega_mobile = document.querySelectorAll(".mega-menu");

const width = window.innerWidth;

if (width > 1024) {

    let currentOpenIndex = -1;

    navLink.forEach((navlink, index) => {
        navlink.addEventListener("mouseover", () => {

            if (currentOpenIndex !== -1 && currentOpenIndex !== index) {

                megaMenu[currentOpenIndex].classList.remove("dropshow");
            }


            navLink[index].setAttribute('aria-expanded', 'true');
            megaMenu[index].classList.add("dropshow");
            currentOpenIndex = index;
        }, false);

        navlink.addEventListener("mouseleave", () => {
            setTimeout(() => {
                if (!megaMenu[index].matches(':hover')) {

                    megaMenu[index].classList.remove("dropshow");
                    currentOpenIndex = -1;
                }
            }, 100);
        });
    });

    megaMenu.forEach((mega, index) => {
        mega.addEventListener("mouseleave", () => {

            megaMenu[index].classList.remove("dropshow");

            currentOpenIndex = -1;
        });

        mega.addEventListener("mouseover", () => {


            megaMenu[index].classList.add("dropshow");
        });
    });

}
else {


    // Track currently open mega menu
    navLink.forEach((link, index) => {
        link.addEventListener("click", () => {
            navLink[index].classList.toggle("show");
        })
    })
}