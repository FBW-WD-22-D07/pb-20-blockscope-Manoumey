# Auf dem Block
* Arbeite in `index.js`

#### 1. Updater
* Erstelle eine neue Variable namens `determiner`.
* Gib `determiner` einen Wert zwischen -100 und 100 (probiere ein wenig herum, indem du den Wert änderst)
* Erstelle eine zweite Variable namens `x`.
* Weise `x` je nach dem Wert von `determiner` einen Wert zu.
    - Wenn `determiner` kleiner als 0 ist, sollte der Wert von `x` die Zeichenkette "Less than 0" sein.
    - Wenn `determiner` größer oder gleich 0 ist, sollte der Wert von `x` die Zeichenkette "Greater or equal to 0" sein.

#### 2. Neue Variablen
* Erstelle eine neue Variable namens `updater`.
* Abhängig vom Wert von `determiner`
    * Wenn `determiner` größer oder gleich 0 ist
        * setze den Wert von `updater` auf "Greater or equal to 0""
        * Erstelle eine weitere Variable namens `message` in deiner if-Anweisung
        * weise die Zeichenkette "Positive Integer" der Variable `message` zu
        * gib `message` folgendermaßen aus: "message: [Wert der Nachricht]".
    * Wenn `determiner` kleiner als 0 ist, weise `updater` die Zeichenkette "Less than 0" zu.
* Gib den Wert von `updater` folgendermaßen aus: "updater: [Wert des Updaters]".

* **Frage**: Was würde passieren, wenn wir versuchen würden, "message" außerhalb der if-Anweisung zu auszugeben? Kommentiere deine Antwort in der js-Datei.

#### 3. Ternäre Anweisung vs. If-Anweisung
* Wann verwendest du eine ternäre vs. eine if-Anweisung? Gib ein Beispiel.
