// definisco le variabili con le quali poi andrò a manipolare il codice HTML
const ex1Out = document.getElementById("ex1Out");
const genderOut = document.getElementById("genderOut");
const hide = document.getElementById("hide");

// definisco le variabili dei bottoni che attivano le attività
const ex1Btn = document.getElementById("ex1Btn");
const resetBtn = document.getElementById("reset");

// reset
const reset = () => {
  for (let index = 1; index <= 1; index++) {
    document.getElementById(`ex${index}Out`).innerHTML = "";
    genderOut.innerHTML = "";
    genderOut.className = "";
    hide.className = "hide";
  }
};

// esercizio
const ex1 = () => {
  // resetto tutto prima di una nuova immissione
  reset();
  // ottengo i dati tramite prompt, tranformando gender tutto in minuscolo
  let name = prompt("Inserisci il tuo nome");
  let gender = prompt("Inserisci il tuo genere").toLowerCase();

  if (name.length !== 0 || gender.length !== 0) {
    switch (gender) {
      case "maschio":
      case "uomo":
        genderOut.className = ex1Out.classList + " blue";
        break;

      case "donna":
      case "femmina":
        genderOut.className = ex1Out.classList + " pink";
        break;

      case "transgender":
      case "transessuale":
        genderOut.className = ex1Out.classList + " purple";
        break;

      case "non binario":
      case "genderqueer":
      case "genderfluid":
        genderOut.className = ex1Out.classList + " green";
        break;

      case "agender":
        genderOut.className = ex1Out.classList + " dark_grey";
        break;

      default:
        break;
    }
    ex1Out.innerHTML = "Ciao ";
    genderOut.innerHTML = name;
  } else {
    ex1Out.innerHTML = "Inserire solo lettere e quanto richiesto";
  }
  hide.classList.toggle("hide");
};

// definisco i trigger
ex1Btn.addEventListener("click", ex1);

// definisco il reset
resetBtn.addEventListener("click", reset);
