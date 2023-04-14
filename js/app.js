// бургер
const navMenu   = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


// удаление бургера
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click', linkAction))


// фиксированный фон шапки
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


// прокрутка активных разделов в шапке
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } 
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// email 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    if (contactUser.value === '') {
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter your email'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } 
    else {
        emailjs.sendForm(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })
            
        contactUser.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)


// анимации 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img, .blog__item`, {delay: 300, origin: 'bottom'})
sr.reveal(`.blog__item, .choose__item`, {interval: 100})
sr.reveal(`.choose__item, .about__data`, {origin: 'left'})
sr.reveal(`.choose__content, .about__img`, {origin: 'right'})