window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() { // Funções que serão executadas rolando o scroll 
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) { // Estado da Aplicação nunca será o mesmo, vai passar por todas as seções. Essa Função sempre vai apresentar resultados diferentes 

  // linha alvo
  const targetLine = scrollY + innerHeight / 2 // const o valor não pode ser alterado 
  
  // console.log(targetLine)

  // Lógica de Programação:
  // quais dados vou precisar para seguir na sequencia lógica?
  // verificar se a seção passou da linha!

  // console.log(home.offsetTop) esse comando serve para indetificar o número exato da onde começa a seção home ou outra seção 

  // o topo da seção  
  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight // a altura da seção = altura de deslocamento 
  // console.log(sectionHeight)

  // o topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informações dos dados e da lógica
  // console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // console.log(sectionTop)
  // console.log(sectionHeight)

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight
  // console.log(sectionEndsAt)

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  
  // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) // colocando uma variável dentro de uma string. ${} posso colocar qq coisa do JS dentro das chaves.

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    // console.log('estou na seção HOME')
    
    menuElement.classList.add('active')
  }
  // console.log(sectionBoundaries)

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  // console.log(scrollY) serve p descobrir o valor do scrolly no console
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,  
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`)

/*function sayMyName() { essa função está criando uma variável name
  console.log(name)
}

sayMyName("Mayk")
sayMyName("Edson")*/
