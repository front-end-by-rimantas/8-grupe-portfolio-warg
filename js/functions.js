"use strict";
// general
function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}
//parseFloat -                          ištraukia skaitinę aukščio vertę;
//window.getComputedStyle( X ).height - ištraukia tekstinę stiliaus elemento (X) aukščio reikšmę;
//document.querySelector( path ) -      nuoroda į konkretų HTML elementą

function headerScrollDetector() {
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),                      //duoda scroll aukštį esamu momentu.
        headerLinkCount = document.querySelectorAll('header nav > a').length,   //suskaičiuoja konkretaus HTML elemento brolių kiekį
        top = document.getElementById('testimonials').offsetTop,                //duoda HTML elemento conteinerio viršaus aukštį.
        sectionID ='',                                                          //ciklas sukaups visus ID
        sekcijuSarasas = [],                                                    //ciklas sukaups visus sekcijų pavadinimus su #
        sekcijosPavadinimas = [],                                               //ciklas sukaups visus sekcijų pavadinimus be #
        sectionNameNow = '';                                                    //sekcijos vardas kuri yra ekrano viršuje vardas
        

    for ( var i=0; i<headerLinkCount; i++ ) {                                             //ciklą riboja konkretaus HTML elemento brolių kiekis
        sectionID = document.querySelectorAll('header nav > a')[i].getAttribute('href');  //ciklas iš konkrečių HTML brolių ims po vieną ir ištrauks nurodyto atributo vertę
        if ( sectionID === '#' ) {                  //jeigu vertė tik #
            sectionID = sectionID.substring(1);     //atima iš sekcijos ID #
            sekcijosPavadinimas.push(sectionID);    //surenka sekcijų pavadinimus į vieną sąrašą;
            sections.push(0);                       //saraše "sections" pirmu nariu įrašys - 0 
            continue;                                // ir tikrins toliau.
        }
        top = document.querySelector(sectionID).offsetTop;  //gavęs atsakymą iš ifo, pasakys jo aukščio vertę, 
        sections.push(top);                                 // ir įstums į sąrašą.
        sekcijuSarasas.push(sectionID);                     //duoda visų sekcijų sąrašą su # (ar reikalingas ???)
        
        sectionID = sectionID.substring(1);                 //atima iš sekcijos ID #
        sekcijosPavadinimas.push(sectionID);                //surenka sekcijų pavadinimus į vieną sąrašą;
        var sectionNameNowH = '#'+sectionID;                //prie išgryninto sekcijos vardo vėl prideda #, kad pagal selektorių būtų galima susirasti einamos sekcijos aukštį
        var height = parseFloat(window.getComputedStyle( document.querySelector(sectionNameNowH) ).height);  //suskaičiuoja einamos sekcijos aukštį
            
        if((scroll>=sections[i]) && scroll < sections[i]+height ){  //jeigu skrolas yra tarp tikrinamos sekcijos ir tarp sekančios tikrinamos sekcijos 
                sectionNameNow = sectionID;                         // tada dabartinės sekcijos pavadinimas yra tos sek
                var hrefValue = 'a[href="#'+sectionID+'"]';         // sugeneruoja esamos sekcijos nuorodą
                var element = document.querySelector(hrefValue);    // elementui, kuris turi tokį selektorių "a[href="#XXX"]" 
                element.classList.add('active');}                   // bus pridėta papildoma klasė - "active"
        
        if((scroll<=sections[i]) || scroll > sections[i]+height ){  //jeigu skrolas yra visur kitur bet ne esamoje sekcijoje
            sectionNameNow = sectionID;                             // tada dabartinės sekcijos pavadinimas yra tos sek
            var hrefValue = 'a[href="#'+sectionID+'"]';             // sugeneruoja esamos sekcijos nuorodą
            var element = document.querySelector(hrefValue);        // elementui, kuris turi tokį selektorių "a[href="#XXX"]" 
            element.classList.remove('active');                     // bus pridėta papildoma klasė - "active"
            }else{                                                  //kitu atveju
                continue;                                           //sukti ciklą toliau
            }

        if(scroll>100){                                         //Jei skrolas daugiau už 100
            var stickyHead = document.querySelector("header");  //tai pirmas selektorius su pavadinimu "header"
            stickyHead.classList.add('home');                   //gaus klasę "home"
        }
        if(scroll<100){                                         //Jei skrolas mažiau už 100
            var stickyHead = document.querySelector("header");  //tai pirmas selektorius su pavadinimu "header"
            stickyHead.classList.remove('home');                //praras klasę "home" 
        }
    }
    // console.log( sections );
    // console.log( scroll+'dabartinis aukštis' );
    // console.log( top );
    // console.log (sekcijuSarasas);
    // console.log(sectionID = sectionID.substring(1))
    // console.log( sekcijosPavadinimas );
    // console.log( 'sectionNameNow '+ sectionNameNow );
    // console.log( hrefValue );
    // console.log( element );
    // console.log( height )
}









//HERO
function generateIcons( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].link === '' ) {
            continue;
        }
        HTML += '<div><a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a></div>';
    }

    return HTML;
}
//BOTTOM
function generateFooterIcons( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].link === '' ) {
            continue;
        }
        HTML += '<div><a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a></div>';
    }

    return HTML;
}