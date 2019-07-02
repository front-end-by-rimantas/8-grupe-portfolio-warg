var arrayPosition = 0;
    arrayData = ['a', 'b', 'c', 'd', 'e'];

function Too () {
console.log('-----------');
var pirmas = arrayPosition,
    antras = arrayPosition + 1;

    if ( antras === arrayData.length ) {
        antras = 0;
    }

    console.log(arrayData[pirmas], arrayData[antras]);
    
    arrayPosition++;

    if ( arrayPosition === arrayData.length ) {
        arrayPosition = 0;
    }

}

function abb () {
    var pirmas = arrayPosition - 1,
        antras = arrayPosition;

        if ( pirmas === -1 ) {
            pirmas =  arrayData.length - 1;
        }
        console.log(arrayData[pirmas], arrayData[antras]);
        arrayPosition--;

        if ( arrayPosition === -1 ) {
            arrayPosition = arrayData.length - 1;
        }

}




// for (var i = 0; i < 12 ; i++ ) {
//     abb();
// }
