const navSlide = () => {
    console.log("variable.js loaded");
    const burger = document.querySelector('.burger');
    console.log(burger);
    const nav = document.querySelector('.nav-links');
    console.log(nav);
    const navLinks = document.querySelectorAll('.nav-links li');
    console.log(navLinks);
    
    //Toggle Nav
    //nav.classList.toggle('nav-hide');

    //Animate Links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade ${index}s ease forwards`;
        //link.style.animation = `navLinkFade 2s ease forwards ${index / 7 + 0}s`;
        
    });
}


navSlide();

$('.nav-contact').on('click', () => {
  $('.contact-form').toggle();
});