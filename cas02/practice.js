// -------------------------------   VEZBANJE   ---------------------------------------------------------
// Nova terminologija: snippet code - isecak koda, u ovom slucaju ce biti deo skripte zbog kratkih resenja.
// Napisati javascript snippet code koji :
// 1. Ispisuje prosledjeni niz brojeva jedan ispod drugog.
// 2. Od prosledjenjog niza brojeva ispisuje samo parne 
// 3. Racuna sumu prosledjenog niza
// 4. Ispisuje koliko ima brojeva vecih od prvog elementa niza

//1. 
function printArray(arr){
    for(el in arr)
    console.log(arr[el])
}
//2.
function evenArray(arr){
    arr = arr.filter((element) => {
        if(element%2==0){
            return true
        }
        return false
    })
    console.log(arr)
} 
//3.
function sumArray(arr){
    var sum = 0;
    arr.forEach((element) => { // moze umesto forEach da se koristi i map
        sum+=element;
    });
    return sum;
}
function biggerThanFirst(arr){
    var bigger = 0
    var first = arr[0];
    arr.slice(1).map(el => { // nisam morao da sliceujem al nema veze verovatno  bi kod brzi bio bez slice metode ali reko sto da ne zakomplikujem bez potrebe kad mi se ukazala prilika #cleancode
        if(el > first){
            bigger++;
        }
    })
    return bigger
}

printArray([2,4,"yo"]);
evenArray([1,2,3,4,5,6]);
console.log(sumArray([1,2,3,4,5,6]));
console.log(biggerThanFirst([4,1,2,7,8,5]));
