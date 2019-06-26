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
        // var atstumas,
        // skillTop = document.getElementById('skills').offsetTop,
        // style = document.getElementsByClassName('bar-fill'),
        // styleArray = window.getComputedStyle(style);
        // console.log(styleArray);
        // if (scroll>skillTop) {
        //     barStyle.push ({
        //         style: newStyle
        //     });

        // } else {
        //     atstumas=false;
        // }
        // console.log(atstumas);
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
// SKILLBARS

    // function fillBar (seconds) {
    //     var bar = document.querySelector(".bar-fill");
    //     var count = document.querySelectorAll(".bar-fill").length;
    //     let atPercent = 0;
    //     count = 
    //     var interval = setInterval(() => {
    //         bar.style.width = atPercent + '%';
    //         atPercent++;
    //         console.log("running at", atPercent);
    //         if (atPercent >= 100) {
    //             clearInterval(interval);
    //         }
    //     }, (seconds * 1000) / 100)
    //     var bars = document.getElementsByClassName ('bar-fill');
    //     for (i=0; i<bars.length; i++) {

    //     }
    // }
    // console.log(fillBar(1))

    // function fillBar() {
    //     const bar = document.querySelector(".bar-fill");

    //     const style = getComputedStyle(bar);
    //     console.log(style);
    //     width = width + bar.style.width;
        
    // // }
    // console.log(fillBar());

    function generateProgress( data ) {
        var HTML = '';
        for ( var i=0; i<data.length; i++ ) {
            if ( data[i].title === '' ||
                 data[i].value === '' ) {
                continue;
            }
            HTML += `<div class="progress-block">
            <div class="texts">
                <div class="title">${data[i].title}</div>
                <div class="value">${data[i].value}</div>
            </div>
            <div class="bar">
                <div class="bar-value" style="width: ${data[i].value};">
                    <div class="bar-fill"></div>
                </div>
            </div>
        </div>`
        }
        return HTML;
    }
    // console.log(generateProgress(fillBarInfo));

    // function skillBarAnimation () {
    //    var sections = [],
    //        scroll = scroll = window.scrollY + elementHeight('header'),
    //        bodySectionCount = document.querySelectorAll('container').length,
    //        skillTop = document.getElementById('skills').offsetTop,
    //        sectionID = '',

         
    // }

// BLOGS
function generateBlog ( data ) {
    var HTML = '';
    for (var i=0; i<data.length; i++) {
        HTML += 
        `<div class="blog">
            <div class="img" style="background-image: url(./img/blogs/${data[i].photo});"></div>
            <div class="blog-meta">
                <span class="color-text">${data[i].info[0]}</span>  <span class="usual-text" style="color: var(--text-color);">${data[i].info[1]}</span>
                <h3>${data[i].heading}</h3>
                <p>${data[i].description}</p>
                <div class='socials'>
                    <div class="social-layer"><i class="fa fa-${data[i].icon[0]}"></i></div>
                    <div class="social-layer"><i class="fa fa-${data[i].icon[1]}"></i></div>
                    <div class="social-layer"><i class="fa fa-${data[i].icon[2]}"></i></div>
                    <div class="social-layer"><i class="fa fa-${data[i].icon[3]}"></i></div>
                </div>
            </div>
            <div class='name-and-photo'>
                <div class="img-2" style="background-image: url(./img/blogs/${data[i].personal_info[0]});"></div> 
                <span class="usual-text" style="color: var(--text-color);">${data[i].personal_info[1]}</span><span class="color-text"> ${data[i].personal_info[2]}</span>
            </div>
        </div>`
    }
    return HTML
}

// CONTACT FORM 
function generateForm ( data ) {
    var HTML = '<form>',
        field,
        attrHTML = '',
        attrInfo,
        classNames = '';


        for (var i=0; i<data.fields.length; i++) {
            field = data.fields[i];
            attrHTML = '';
            classNames = '';
            console.log(field);
         
            for ( var a=0; a<field.attr.length; a++ ) {
                attrInfo = field.attr[a];
                attrHTML += ` ${attrInfo.name}="${attrInfo.value}"`;
                // console.log(attrInfo) 
                console.log(attrInfo);
            }
        
            classNames = field.className.join(' ');

            if ( field.type === 'input' ) {
                HTML += `<div class="${classNames}">
                            <input ${attrHTML} required>
                            <span>${data.fields[i].description}</span>
                        </div>`;
            
            }

            if ( field.type === 'textarea' ) {
                HTML += `<div class="${classNames}">
                            <textarea ${attrHTML} required></textarea>
                            <span>${data.fields[i].description}</span>
                        </div>`;
            }
        }

        HTML += '<div class="actions">';
        for ( var i=0; i<data.actions.length; i++ ) {
            HTML += `<div class="col-12">
                        <button id="btn-submit" type="submit" class="form-btn button dark">${data.actions[i].text}</button>
                    </div>`;
        }
    

        HTML += '<form>'
    return HTML
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
//SERVICES
function generateServices( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].name === '' ||
             data[i].description === '' ) {
            continue;
        }
        HTML += '<div class="service"><i class="fa fa-'+data[i].icon+'"></i><h3>'+data[i].name+'</h3><p>'+data[i].description+'</p></div>'
    }
    return HTML;
}
//STATISTICS
function generateStatistics( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].score === '' ||
             data[i].name === '' ) {
            continue;
        }
        HTML += '<div class="statistics"><i class="fa fa-'+data[i].icon+'"></i><p class="number">'+data[i].score+'</p><p class="name">'+data[i].name+'</p></div>'
    }
    return HTML;
}
// EDUCATION section
function generateEducation( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].month === '' ||
             data[i].day === '' ||
             data[i].year === '' ||
             data[i].degree === '' ||
             data[i].place === '' ||
             data[i].outline === '' ) {
            continue;
        }
        if( (i+1) % 2 != 0){
            HTML += `<div class="lefty">
                            <div class="data">
                                <div class="month">${data[i].month}</div>
                                <div class="year">${data[i].day}</div>
                            </div>
                            <div class="text">
                                <h4 class="degree">${data[i].degree}</h4>
                                <div class="school">
                                    <p>${data[i].year}</p>
                                    <span></span>
                                    <p>${data[i].place}.</p>
                                </div>
                                <p class="outline">${data[i].outline}</p>
                            </div>
                        </div>
                    </div>`
        }
        if( (i+1) % 2 == 0){
            HTML += `   <div class="righty">
                            <div class="data">
                                <div class="month">${data[i].month}</div>
                                <div class="year">${data[i].day}</div>
                            </div>
                            <div class="text">
                                <h4 class="degree">${data[i].degree}</h4>
                                <div class="school">
                                    <p>${data[i].year}</p>
                                    <span></span>
                                    <p>${data[i].place}.</p>
                                </div>
                                <p class="outline">${data[i].outline}</p>
                            </div>
                        </div>
                    </div>`
        }
    }
    return HTML;
}
// EXPERIENCE section
function generateExperience( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].month === '' ||
             data[i].day === '' ||
             data[i].year === '' ||
             data[i].degree === '' ||
             data[i].place === '' ||
             data[i].outline === '' ) {
            continue;
        }
        if( (i+1) % 2 != 0){
            HTML += `<div class="lefty">
                            <div class="data">
                                <div class="month">${data[i].month}</div>
                                <div class="year">${data[i].day}</div>
                            </div>
                            <div class="text">
                                <h4 class="degree">${data[i].degree}</h4>
                                <div class="school">
                                    <p>${data[i].year}</p>
                                    <span></span>
                                    <p>${data[i].place}.</p>
                                </div>
                                <p class="outline">${data[i].outline}</p>
                            </div>
                        </div>
                    </div>`
        }
        if( (i+1) % 2 == 0){
            HTML += `   <div class="righty">
                            <div class="data">
                                <div class="month">${data[i].month}</div>
                                <div class="year">${data[i].day}</div>
                            </div>
                            <div class="text">
                                <h4 class="degree">${data[i].degree}</h4>
                                <div class="school">
                                    <p>${data[i].year}</p>
                                    <span></span>
                                    <p>${data[i].place}.</p>
                                </div>
                                <p class="outline">${data[i].outline}</p>
                            </div>
                        </div>
                    </div>`
        }
    }
    return HTML;
}
//PORTFOLIO
    //generuojamos unikalios darbų klasės
function generateMyWorksList( data ) {
    var areas = [],
        HTML='';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].project_title === '' ||
             data[i].image === '' ) {
            continue;
        }
        areas.push(data[i].project_title);
    }

    const values = (value,index,self) => {
        return self.indexOf(value)===index;
    }
    const titles = areas;
    const unique = titles.filter(values);

    for ( var a=0; a<unique.length; a++ ){
        HTML+= `<div class="filter" id="${unique[a]}">${unique[a]}</div>`
    }
    return HTML;
}
    //generuojami darbų paveikslėliai bei pavardinimai
function generateMyWorks( data ) {
    var HTML = '',
        display;
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].project_title === '' ||
             data[i].image === '' ) {
            continue;
        }
        if (i<=2){
            display = "flex";
        }else{
            display = "none";
        }
        HTML += `<div class="work ${display}" id="id${i+1}" style="display:${display}; order${i+1}">
                    <div class="img" style="background-image: url(img/myWorks/${data[i].image})"></div>
                    <div class="texts">
                        <h3>Portfolio</h3><p>${data[i].project_title}</p>
                    </div>
                </div>`
    }
    return HTML;
}
    //generuojamas darbų scrollbaras jei labai daug paveiksleliu - daugiau skaiciuku.
    function generateMyScrollbar( data ) {
        var HTML = '',
            klass1 = '',
            klass2 = '',
            half = Math.ceil(data.length / 2),
            third = Math.ceil(data.length / 3),
            nr = 0;
        HTML += `<div class="arrows">
                    <i class="more fa fa-angle-double-left"></i>`
                
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
     return HTML;
    }
    
    var curent_index = 0;

    function next_work(n){
        show_work(curent_index += n);
    }
    function show_work(next_work){
        var x,
            i;

        x = document.querySelectorAll(".work");
        console.log(curent_index);

        if (next_work > (x.length-1)) {
            curent_index = 0;
        }
        if (next_work < 0) {
            curent_index = (x.length-1);
        }
        for (i = 0; i < x.length; i++){
            x[i].style.display = "none";
            x[i].style.order = "0";
        }

        if (curent_index === 0 ){
            x[curent_index + (x.length-1)].style.display = "inline-block";
            x[curent_index - 0 ].style.display = "inline-block";
            x[curent_index + 1].style.display = "inline-block";

            x[curent_index + (x.length-1)].style.order = "1";
            x[curent_index - 0 ].style.order = "2";
            x[curent_index + 1].style.order = "3";
        }
        if ((curent_index < (x.length-1)) && (curent_index > 0)) {
            x[curent_index - 1].style.display = "inline-block";
            x[curent_index - 0].style.display = "inline-block";
            x[curent_index + 1].style.display = "inline-block";

            x[curent_index - 1].style.order = "1";
            x[curent_index - 0].style.order = "2";
            x[curent_index + 1].style.order = "3";
        }
        if (curent_index === (x.length-1)) {
            x[curent_index - 1].style.display = "inline-block";
            x[curent_index - 0].style.display = "inline-block";
            x[curent_index - (x.length-1)].style.display = "inline-block";

            x[curent_index - 1].style.order = "1";
            x[curent_index - 0].style.order = "2";
            x[curent_index - (x.length-1)].style.order = "3";
        }
    }

// F I L T R A V I M A S
// function filtration(data, ){
//     var i,
//         x = document.querySelectorAll('.work');
//         for (i = 0; i < x.length; i++){
//             x[i].style.display = "none";
//         }

//     return; 
// }