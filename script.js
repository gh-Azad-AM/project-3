const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle("show-links");
});

navLink.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault;
        navLinks.classList.remove("show-links");
        

        // const id = e.target.getAttribute("href").slice(1);
        // const element = document.getElementById(id);

        // let position = element.offsetTop - 62;

        // window.scrollTo({
        //     left: 0,
        //     top: position,
        //     behavior: "smooth"
        // });
    });
});