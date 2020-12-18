const navMobile = document.querySelector('.nav__mobile')
const navBtn = document.querySelector('.hamburger__menu')
const navClose = document.querySelector('.x__icon')
const fadeLeft = document.querySelectorAll('.fade__left')
const fadeRight = document.querySelectorAll('.fade__right')



const showMenu = () =>{
    console.log(navMobile)
    navMobile.classList.toggle('menu__appear')
}

navBtn.addEventListener('click', showMenu);
navClose.addEventListener('click', showMenu);

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px"
}

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add('fade__apear')
            appearOnScroll.unobserve(entry.target)
        }
    });
}, appearOptions);

fadeLeft.forEach(fader =>{
    appearOnScroll.observe(fader)
})

fadeRight.forEach(fader =>{
    appearOnScroll.observe(fader)
})



