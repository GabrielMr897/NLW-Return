window.addEventListener('scroll', scrollFuncs)

scrollFuncs()
function scrollFuncs() {
  scrollPage()
  toTop()
  activatingNavMenu(home)
  activatingNavMenu(services)
  activatingNavMenu(about)
}

function scrollPage() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}
function toTop() {
  if (scrollY > 650) {
    goingBackToTop.classList.add('show')
  } else {
    goingBackToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menuExpanded')
}

function closeMenu() {
  document.body.classList.remove('menuExpanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home img, #home .infos, #services, #services header, #services .card, #about header, #about .content, #contact header, #contact content, footer'
)

function activatingNavMenu(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const theTopSectionHasPassedTargetLine = targetLine >= sectionTop
  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const theEndSectionHasPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção

  const sectionBoundaries =
    theTopSectionHasPassedTargetLine && !theEndSectionHasPassedTargetLine

  const secId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${secId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
