
var containerIndex = 1;
var prevScrollPosition = window.scrollY;


// Prima, installa la libreria scroll-snap con npm
// npm install scroll-snap
container = document.querySelector('.container');

// Seleziona il contenitore e gli elementi
const containerElement = document.querySelector('.container')


// Aggiungi gli elementi al contenitore
let lastScrollTop = container.scrollTop;





// Aggiungi l'evento di scroll
document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var containerOffset = container.offsetTop;
  var containerHeight = container.clientHeight;
  var windowHeight = window.innerHeight;
  var scrollDirection = scrollPosition > prevScrollPosition ? 'down' : 'up';
  prevScrollPosition = scrollPosition;

  // Controllo del colore della navbar
  if (containerIndex % 2 === 0) {
    document.documentElement.style.setProperty('--navbar-text-color', "#000000");
  } else {
    document.documentElement.style.setProperty('--navbar-text-color', "#ffffff");
  }

  // Verifica se scrollPosition è un multiplo di mille
  if (scrollPosition >= containerHeight * containerIndex && scrollPosition <= containerHeight*(containerHeight*0.2) * containerIndex) {
    containerIndex++;
    console.log(containerIndex);
  }

  // Controllo dello scroll verso l'alto
  if (scrollDirection === 'up') {
    if (scrollPosition < containerHeight * (containerIndex - 1)) {
      containerIndex--;
      console.log(containerIndex);
    }
  }
});







document.addEventListener('DOMContentLoaded', function () {


  // Funzione per controllare se il cookie di caricamento è presente
  function checkLoaderCookie() {
      // Controlla se il cookie di caricamento è presente
      if (!document.cookie.includes('loaderShown=true')) {
          // Se il cookie di caricamento non è presente, esegui il caricamento

          Loader();
      }
  }

  // Funzione per impostare il cookie di caricamento
  function setLoaderCookie() {
      // Imposta il cookie di caricamento con una durata di 365 giorni
      document.cookie = 'loaderShown=true; max-age=' + 365 * 24 * 60 * 60 + '; path=/';
  }

  // Definisci l'animazione GSAP al di fuori della funzione Loader()
  var tl = gsap.timeline({ paused: true });
  tl.to(['.st0', '.Tire'], {
      rotation: -360,
      repeat: -1,
      duration: 1,
      ease: "linear",
      transformOrigin: "50% 50%",
  }).to('.car-full', {
      xPercent: -3000,
      duration: 3,
  });

  // Funzione di caricamento
  function Loader() {
    var loader = document.querySelector('.loader');

// Cambia il valore di display
    loader.style.display = 'flex';
      var body = document.querySelector('body');
      body.classList.add('block-y');

      // Esegui l'animazione GSAP
      tl.play();
    setTimeout(function() {
      gsap.to('.loader', {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: function () {
              // Rimuovi la classe 'block-y' dal body quando l'animazione del loader è completata
              body.classList.remove('block-y');
              console.log('animazione finita');
              // Imposta il cookie di caricamento quando il caricamento è completo
              setLoaderCookie();
          }
      });
  },2000);

  // Controlla se il cookie di caricamento è presente
  checkLoaderCookie();
};
});





// Inizializza Flickity quando il documento è pronto
document.addEventListener('DOMContentLoaded', function () {
  // Seleziona il tuo carosello e inizializza Flickity
  var flkty = new Flickity('.car-carousel', {
    // Opzioni di configurazione di Flickity
    cellAlign: 'center', // Allinea le celle a sinistra
    pageDots: false,
    contain: true, // Abilita la modalità "contain" per adattare le immagini al contenitore
    wrapAround: true, // Abilita lo scorrimento infinito
    autoPlay: 5000, // Imposta l'autoplay su 5000 millisecondi (5 secondi)
    prevNextButtons: false, //
    adaptiveHeight: true
  });



  const tl = gsap.timeline();

  // Impostazione iniziale dell'opacità delle celle e dell'opacità della cella selezionata
  tl.set('.car-uno' && '.carousel-cell', { opacity: 0 });
  tl.set('.car-uno' && '.is-selected', { opacity: 1 });

  // Animazioni per il primo paragrafo (rosso) 
  tl.to('.car-uno' && '.carousel-cell:nth-child(1) p', { backgroundColor: "#009124", color: "#ffffff", duration: 0.5 });

  // Variabile per tenere traccia dello stato dello scorrimento
  var progresso = 0;
  var indicePrecedente = flkty.selectedIndex;

  flkty.on('change', function (progress, index) {
    // Incrementa il progresso ad ogni scorrimento

    tl.to('.car-uno' && '.is-selected', { opacity: 1 });
    progresso++;
    console.log(progresso);
    // Verifica se lo scorrimento è completo attraverso tutte le slide
    if (progresso === 3) {
      // Animazione per cambiare il colore di sfondo di tutti i paragrafi a bianco e il colore del testo a nero
      tl.to('.car-uno' && '.carousel-cell p', { backgroundColor: "#ffffff", color: "#000000", duration: 1 });
    }
  });

  // Animazioni per il secondo paragrafo (verde)
  tl.to('.car-uno' && '.carousel-cell:nth-child(2) p', { backgroundColor: "#ffffff", color: "#000000", duration: 0.5 });

  // Animazioni per il terzo paragrafo (blu)
  tl.to('.car-uno' && '.carousel-cell:nth-child(3) p', { backgroundColor: "#ff0000", color: "#ffffff", duration: 0.5 });

  // Riproduzione della timeline
  tl.play();






});





//009124



// Aggiungi un gestore di eventi per il clic sull'icona del menu
document.querySelector('.menu-toggle').addEventListener('click', function () {
  // Aggiungi o rimuovi la classe 'menu-active' per mostrare o nascondere il menu a comparsa
  document.querySelector('.navbar').classList.toggle('menu-active');
});


document.querySelector('.navbar-nav').addEventListener('click', function () {

  document.querySelector('.navbar').classList.toggle('menu-active');
})



//carosello 

