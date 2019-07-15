// P O R T F O L I O

for(var a = 0; a<currentElements.length; a++){
            console.log(currentElements[a]);
            console.log(images[a]);
            
        }
        console.log('------------------------');





// OLD GOOD PORTFOLIO

function generateMyWorks( data ){
    var tags = [],
        display_class,
        klass1 = '',
        klass2 = '',
        half = Math.ceil(data.length / 2),
        third = Math.ceil(data.length / 3),
        nr = 0,
        HTML = `<div class="filter">
                    <div class="active">All</div>
                    `;
    //išrenkami tik uniklalūs tag'ai:
    data.forEach( work => {
        if ( tags.indexOf( work.project_title ) === -1) {
            tags.push ( work.project_title );
            HTML += `<div>${work.project_title}</div>
            `
        }
    })
    //atvaizduojami visi porfolio elementai:
    HTML += `</div>
            <div class="list">
            `;

    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].project_title === '' ||
            data[i].image === '' ) {
            continue;
        }

        if(i==0){
            display_class = 'S M L N';
        }
        else if(i==1){
            display_class = 'M L N';
        }
        else if(i==2){
            display_class = 'L N';
        }else{
            display_class = 'N';
        }

        HTML += `<div class="work ${display_class}" id="id${i+1}" style="order:${i+1}">
                    <div class="img" style="background-image: url(img/myWorks/${data[i].image})"></div>
                    <div class="texts">
                        <h3>Portfolio</h3><p>${data[i].project_title}</p>
                    </div>
                </div>
                `
    }
    HTML += `</div>
            <div class="arrows">
                <i class="more fa fa-angle-double-left"></i>`;
                
    //generuojamos rodyklės ir skaičiukai:            
    for ( var i=0; i<data.length; i++) {
        nr ++;
        if ( (data[i].project_title === '') || 
            (data[i].image === '' )) {
            continue;
        }
        if ((i+1) <= half){
            klass1 = ' nr2';
        }else{
            klass1 = '';
        }
        if ((i+1) <= third){
            klass2 = ' nr3';
        }else{
            klass2 = '';
        }
        HTML += `<div class="more${klass1} nr1${klass2}">${nr}</div>`
    }
HTML += `<i class="more fa fa-angle-double-right"></i>
    </div>`
    // console.log(HTML)
    return HTML;
}

// R O D Y K L Ė S   K E I Č I A   P A V E I K S L Ė L I U S
var curent_index = 0;

function next_work(n){
    if( n===1 || n===-1 ){
        show_work(curent_index += n);
    }else{
        show_work(curent_index = n);
    }
}
function show_work(next_work){
    var x,
        i;

    x = document.querySelectorAll(".work");
    console.log(curent_index);
    // console.log(next_work);

    if (next_work > (x.length-1)) {
        curent_index = 0;
    }
    if (next_work < 0) {
        curent_index = (x.length-1);
    }
    for (i = 0; i < x.length; i++){
        x[i].classList.add('N');
        x[i].style.order = "0";
        x[i].classList.remove('S');
        x[i].classList.remove('M');
        x[i].classList.remove('L');
    }

    if (curent_index === 0){
        //order
        x[x.length-1].style.order = "1";
        x[0].style.order = "2";
        x[1].style.order = "3";

        //add class
        x[x.length-1].classList.add('S');
        x[x.length-1].classList.add('M');
        x[x.length-1].classList.add('L');

        x[0].classList.add('M');
        x[0].classList.add('L');

        x[1].classList.add('L');
    }

    if ((curent_index < (x.length-1)) && (curent_index > 0)) {
        //order
        x[curent_index - 1].style.order = "1";
        x[curent_index].style.order = "2";
        x[curent_index + 1].style.order = "3";

        //add class
        x[curent_index - 1].classList.add('S');
        x[curent_index - 1].classList.add('M');
        x[curent_index - 1].classList.add('L');

        x[curent_index].classList.add('M');
        x[curent_index].classList.add('L');

        x[curent_index + 1].classList.add('L');
    }

    if (curent_index === (x.length-1)) {
        //order
        x[x.length-2].style.order = "1";
        x[x.length-1].style.order = "2";
        x[0].style.order = "3";

        //add class
        x[x.length-2].classList.add('S');
        x[x.length-2].classList.add('M');
        x[x.length-2].classList.add('L');

        x[x.length-1].classList.add('M');
        x[x.length-1].classList.add('L');

        x[0].classList.add('L');
    } 
}

// F I L T R A V I M A S
function filterPortfolio( e ) {
var tag = e.target.innerText.toLowerCase(),
i,
x = document.querySelectorAll('#portfolio > #myWorks > .list > .work');

if (tag === "all") {
    for(i=0; i<x.length; i++){
        x[i].classList.add('N');
        x[i].style.order = "0";
        x[i].classList.remove('S');
        x[i].classList.remove('M');
        x[i].classList.remove('L');
        //add class
        x[0].classList.add('S');
        x[0].classList.add('M');
        x[0].classList.add('L');
        x[0].style.order = "1";

        x[1].classList.add('M');
        x[1].classList.add('L');
        x[1].style.order = "2";

        x[2].classList.add('L');
        x[2].style.order = "3";
    }
    return;
}

//paslepti visus darbus
for(i=0; i<x.length; i++){
    x[i].classList.add('N');
    x[i].style.order = "0";
    x[i].classList.remove('S');
    x[i].classList.remove('M');
    x[i].classList.remove('L');
}

parodyti tik tuos, kurie turi pasirinktą tag'ą
var tag_true = [];
for(i=0; i<x.length; i++){
    if( tag === x[i].querySelector('p').innerText.toLowerCase() ){
        tag_true.push(x[i]) //surenkam teisingų tagų sąrašą
    }
}
for(i=0; i<tag_true.length; i++){ //teisingų tagų sąrašą papildom klasem
    if(i===0){
        tag_true[i].classList.add('S');
        tag_true[i].classList.add('M');
        tag_true[i].classList.add('L');
        tag_true[i].style.order = "1";
    }
    else if(i===1){
        tag_true[i].classList.add('M');
        tag_true[i].classList.add('L');
        tag_true[i].style.order = "1";
    }
    else if(i===2){
        tag_true[i].classList.add('L');
        tag_true[i].style.order = "1";
    }
}
return; 
}




// generate arrows

HTML_arrows = '';
document.querySelector('#myWorks > .works').innerHTML = HTML_works;
var nr=0;
HTML_arrows += `<i class="more fa fa-angle-double-left"></i>`
for(var i=0; i<nextElements.length; i++){
        nr++;
    HTML_arrows += `<div class="more">${nr}</div>`
}
HTML_arrows += `<i class="more fa fa-angle-double-right"></i>`

document.querySelector('#myWorks > .arrows').innerHTML = HTML_arrows;