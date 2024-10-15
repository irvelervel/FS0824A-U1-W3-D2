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

h1.style.fontSize = '3rem'
h1.style.color = 'pink'
h1.style.marginLeft = '2rem'
