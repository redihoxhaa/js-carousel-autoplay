# CAROUSEL

#### CONSEGNA DELL'ESERCIZIO

```
Copiamo il carosello precedentemente creato in una nuova cartella.

Milestone 1
Aggiungere la funzionalità di autoplay. Dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS:
Aggiungere bottoni di start / stop.
```
---
#### SVOLGIMENTO

L'approccio a questo esercizio è semplicemente automatizzare quello che facciamo con un click sulla freccia destra dello slide. Quindi andiamo a dichiarare le condizioni di funzionamento del next dentro una funzione. Con setInterval andiamo a temporizzare l'esecuzione di questa funzione nell'eventListener del next. Creaimo poi due bottoni, uno di start e uno di stop. A questo punto ci conviene salvare la funzione di intervallo dentro una funzione. Nello stop andremo a mettere il clearInterval(nome della variabile che abbiamo scelto che esegue la funzione). Nel play andremo ad inserire la funzione presente nel next.