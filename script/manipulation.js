// una volta recuperato un riferimento ad un elemento tramite i metodi più comuni
// che abbiamo analizzato in traversing.js, ecco una serie di possibilità che vi
// si rendono disponibili:

// recupero il riferimento all'unico <h1> della pagina:
const h1 = document.getElementById('main-title')
// const h1 = document.getElementsByTagName('h1')[0] // [0] perchè devo selezionare l'elemento (l'unico) della HTMLCollection che getElementsByTagName mi torna!

// innerText è una proprietà di ogni elemento recuperato che vi espone il suo contenuto
// TESTUALE (in lettura, ma disponibile anche alla sovrascrittura)
console.log(h1.innerText)

h1.innerText = 'Oggi si manipola il DOM!'

// innerHTML espone il contenuto in HTML sotto forma di stringa, e permette sempre
// la lettura/scrittura
const lorenzo = document.getElementById('lorenzo')
console.log(lorenzo.innerHTML)

lorenzo.innerHTML =
  '<span class="special-text">TESTO</span><span>CAMBIATO</span>'

// è possibile utilizzare la proprietà "style" per assegnare degli stili "al volo"
// andranno a compilare il valore dell'attributo "style" dell'elemento

h1.style.fontSize = '3rem'
h1.style.color = 'pink'
h1.style.marginLeft = '2rem'

// classList manipola invece le classi CSS

// primo paragrafo
const firstP = document.getElementsByClassName('content')[0]
firstP.classList.add('bigger') // aggiunge al primo <p> la classe "bigger"

// selezioniamo tutti gli elemento della <ol>
const allLis = document.querySelectorAll('ol li')
// aggiungiamo una classe a tutti gli li
// allLis è un array! (NodeList)
for (let i = 0; i < allLis.length; i++) {
  // allLis[i] è un singolo <li> della lista non ordinata!
  allLis[i].classList.add('colored')
}

// selezioniamo tutti i link nella navbar
// <a>
const allTheNavLinks = document.querySelectorAll('nav a') // 4 ancore
// applichiamo una classe CSS per togliere la sottolineatura
// voglio applicare la classe no-underline a TUTTI le a
// devo ciclarle!
for (let i = 0; i < allTheNavLinks.length; i++) {
  // allTheNavLinks[i] è la singola ancora!
  allTheNavLinks[i].classList.add('no-underline')
  // vado a sostituire il percorso dell'href a www.epicode.com
  if (allTheNavLinks[i].innerText === 'Home') {
    // nel primo link
    allTheNavLinks[i].setAttribute('href', 'https://www.epicode.com')
  } else {
    // in tutti gli altri
    allTheNavLinks[i].setAttribute('href', 'https://www.google.com')
  }

  allTheNavLinks[i].setAttribute('target', '_blank')
}

// // cambiamo il percorso del terzo link
// allTheNavLinks[2].setAttribute('href', 'https://www.google.it')

// ora CREIAMO un nuovo elemento
const newP = document.createElement('p') // <p></p>
// il p esiste! ma ancora non è finito nella pagina, esiste "in memoria"

// riempiamo con il testo
newP.innerText = "All'inizio non esistevo!" // <p>All'inizio non esistevo!</p>

// mettiamoci una classe CSS
newP.classList.add('special-p') // <p class="special-p">All'inizio non esistevo!</p>

// lo voglio inserire alla fine del secondo <article>!
// vado a prendere il riferimento del secondo <article>
const secondArticle = document.getElementsByClassName('content')[1]

// final step: appendo newP dentro secondArticle (alla fine del padre)
secondArticle.appendChild(newP)
