console.log('FASE DI ATTRAVERSAMENTO DEL DOM')

// DOM
// Document Object Model: si tratta di un modello di rappresentazione degli elementi
// della pagina in JS

// DOM TRAVERSING
// con le tecniche di attraversamento del DOM (e successivamente di manipolazione)
// siamo in grado, grazie a JS, di ALTERARE il contenuto e l'aspetto degli elementi
// della pagina DOPO il suo caricamento.

// è possibile cambiare i connotati degli elementi, eliminarli, sostituirli o
// crearne di nuovi!

console.log(document) // document è l'origine del DOM, il capostipite di tutto l'albero

// Andiamo ora a vedere quali sono le tecniche PRINCIPALI di SELEZIONE degli elementi
// 1) grazie agli "id"
const footer = document.getElementById('footer-menu')
console.log('footer?', footer)

const title = document.getElementById('main-title')
console.log('h1', title)

const wrong = document.getElementById('non-esiste')
console.log('wrong', wrong) // torna null

// 2) grazie alle "class"
const twoArticles = document.getElementsByClassName('content')
console.log('twoArticles', twoArticles)

const noElements = document.getElementsByClassName('non-esiste')
console.log('noElements', noElements)

// getElementsByClassName è un metodo che ritorna una HTMLCollection di elementi
// questi elementi sono dei riferimenti ai tag HTML che comprendevano quella classe
// una HTMLCollection è una "specie di array", gli elementi sono dotati di indici
// ma non è possibile utilizzare i metodi avanzati degli array come forEach()
// noElements.forEach((currentElement) => {
//   console.log(currentElement)
// })

for (let i = 0; i < twoArticles.length; i++) {
  // questo funziona!
  console.log(twoArticles[i])
}

// 3) grazie al tag
const allTheListItems = document.getElementsByTagName('li')
console.log('allTheListItems', allTheListItems)

// 4) grazie ad un selettore CSS
// questi due metodi vengono comodi quando è necessario andare a recuperare elementi
// un po' "scomodi", difficili da raggiungere
const thirLiInOl = document.querySelector('ol li:nth-of-type(3)')
console.log('thirLiInOl', thirLiInOl)

// cerchiamo di non sparare i cannoni sugli orsi polari...
// se avete un id, una classe o sapete il nome del tag usate i metodi citati sopra!
// se avete un selettore complesso, benissimo! utilizzate querySelector o querySelectorAll
const daNonFare = document.querySelector('#main-title')

// variante querySelectorAll:
const firstLiInEveryUl = document.querySelectorAll('ul li:first-of-type')
console.log('firstLiInEveryUl', firstLiInEveryUl)

// le NodeList sono anche loro strutture ciclabili, dotate di indice
// in particolare a differenza delle HTMLCollection, le NodeList hanno il metodo
// .forEach()

// finito il traversing, si passa alla MANIPULATION(.js)
