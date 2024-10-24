/**Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente
due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch'essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un 
form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione 
da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente
 diversa oppure simile, ma in ogni caso cercate di farla vostra.
 */

//*Input
const fullnameInput = document.getElementById("input-fullname");
const pathKmInput = document.getElementById("input-path-km");
const ageGroupInput = document.getElementById("input-age-group");

//*Button
const generateTicketButton = document.getElementById("generate-ticket");
const clearFormButton = document.getElementById("clear-form");

//*Output Field
const fullnameField = document.getElementById("output-fullname");
const rateField = document.getElementById("output-rate");
const carriageField = document.getElementById("output-carriage");
const codeCpField = document.getElementById("output-code-cp");
const priceField = document.getElementById("output-price");

//*Form
const personalInfoForm = document.getElementById("personal-info-form");

//*Ticket
const ticketEl = document.getElementById("ticket");

personalInfoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //*Recupero i dati dall'input

  const fullname = fullnameInput.value;
  const pathKm = pathKmInput.value;
  const ageGroup = ageGroupInput.value;

  //*Recupero i dati dal Field
  let carriage = carriageField.value;
  let codeCp = codeCpField.value;

  //*Variabili che sersono per calcolare il numero random della carrozza e del codice Cp

  carriage = Math.floor(Math.random() * 100) + 1;
  codeCp = Math.floor(Math.random() * 10000) + 1;

  //*Variabili che sersono per calcolare il prezzo

  const kmRate = 0.21;
  const fullPrice = kmRate * pathKm;

  //*Calcolo dei vari sconti
  let discountPerc = 0;
  let rateText = "Biglietto standart";

  if (ageGroup === "under18") {
    discountPerc = 20;
    rateText = "Biglietto under 18";
  } else if (ageGroup === "over65") {
    discountPerc = 40;
    rateText = "Biglietto over 65";
  }

  let discountEur = (fullPrice * discountPerc) / 100;
  let finalPrice = fullPrice - discountEur;
  const finalPriceText = `&euro; ${finalPrice.toFixed(2)}`;

  //*Dati del biglietto
  fullnameField.innerHTML = fullname;
  rateField.innerHTML = rateText;
  priceField.innerHTML = finalPriceText;
  carriageField.innerHTML = carriage;
  codeCpField.innerHTML = codeCp;

  //*Il biglietto appare quando faccio "genera"

  ticketEl.classList.remove("d-none");
});
