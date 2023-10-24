### ESERCIZIO: Carosello Mono Array

---

### **CONSEGNA:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.
**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

---

### Logica del programma

- Creo un array contenente le immagini dinamicamente tramite js
- Ciclo for per ogni elemento del array creo un elemento immagine
- Mostrare le immagini tramite una classe con display diverso da none
- Al click sulla freccia right: 
SE l'indice < (lunghezza-array - 1)  
  Togliere la classe da elemento corrente 
  Incrementiamo l'indice 
  Aggiungiamo la classe con display diverso da none (in questo caso .item.active)  al nuovo indice corrente
- Al click sulla freccia sinistra 
SE indice > 0 
  Togliere la classe da elemento corrente 
   Decremento l'indice 
   Aggiungiamo la classe con display diverso da none (in questo caso .item.active) al nuovo indice corrente

---


