// WELCOME TO JAVASCRIPT INTRODUCTION COURSE
//                        Cas 03 - Funkcije

// Pisanje funkcija u JS se malo razlikuje od pisanje funkcija u C# i donosi neke nove koncepte
// Sintaksa deklaracije funkcije se sastoji od klucne reci function, imena i listom parametara.
// Primer jednostavne funckije koja sabira dva broja

function domaci(args) {
  
}
var defun = new Arr[120]; // instanciramo niz
defun = [1,24,1,4,124]; // probni elementi 
if (defun.length!=0){ // ako niz nije prazan pravimo objekat
  function const obj = {
    (defun slice (elements from-index to-index) 
    (cond
      ((= from-index to-index) nil) //metoda jedan
      (t (cons (nth from-index elements) (slice elements (+ from-index 1) to-index)))),

          (defun splice (elements from-index to-index)
      (append (slice elements 0 from-index) (slice elements to-index (length elements)))) // metoda 2
      (defun move (elements from-index to-index)

      (let ((spliced (splice elements from-index (+ from-index 1)))) // metoda 3
        (append (slice spliced 0 to-index) (list (nth from-index elements)) (slice spliced to-index (length spliced)))))
    ,
  }
}
else {
  function objekat(defun find-ordered-index (elements predicate index &optional (key index)) // metoda 4
  (cond 
    ((or (= index 0) (= key 0)) 0) // pronalazimo indeks za iteraciju
    ((funcall predicate (nth (- key 1) elements) (nth index elements)) (find-ordered-index elements predicate index (- key 1))) 
    (t key)))
 
(defun insertion-sort (elements predicate &optional (index 0))
  (cond
    ((= index (length elements)) elements)
    (t (insertion-sort (move elements index (find-ordered-index elements predicate index)) predicate (+ index 1)))))
    return defun // vracamo niz na kraju
}



