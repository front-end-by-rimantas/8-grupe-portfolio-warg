"use strict";
// general
function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}
// H E A D E R section
function generateNavigation (data){
    var klase = '',
        HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].name === '' ||
             data[i].link === '' ) {
            continue;
        }
        if (i < 1){
            klase = 'active';
        } else {
            klase = '';
        }
        HTML += `<a href="${data[i].link}" class="${klase}">${data[i].name}</a>`;
    }
    return HTML;
}
function hamburgerOpen(){
    document.querySelectorAll('#hamburger > .bar').forEach(stick => {
        stick.classList.add("change");
    })
    var main = document.getElementById('hamburger').className;
    
    if (main == ''){
        document.getElementById('hamburger').classList.add("close")
        document.querySelector('#home > .row > .curtainMeniu').style.width = "120%";
        document.querySelector('#home > .row > .curtainMeniu').style.height = "180%";
        document.querySelector('#home > .row > .curtainMeniu >.curtainMeniuContent').innerHTML = generateNavigation( navigationLinks );
        document.querySelectorAll('#home > .row > .curtainMeniu >.curtainMeniuContent > a').forEach( link =>{
            link.addEventListener('click', hamburgerClose);
        });
    }else{
        document.getElementById('hamburger').classList.remove("close")
        document.querySelector('#home > .row > .curtainMeniu').style.width = "0";
        document.querySelector('#home > .row > .curtainMeniu').style.height = "0";
        document.querySelector('#home > .row > .curtainMeniu >.curtainMeniuContent').innerHTML = "";
        document.querySelectorAll('#hamburger > .bar').forEach(stick => {
            stick.classList.remove("change");
        })
    }
    
}
function hamburgerClose(){
    document.getElementById('hamburger').classList.remove("close")
    document.querySelector('#home > .row > .curtainMeniu').style.width = "0";
    document.querySelector('#home > .row > .curtainMeniu').style.height = "0";
    document.querySelector('#home > .row > .curtainMeniu >.curtainMeniuContent').innerHTML = "";
    document.querySelectorAll('#hamburger > .bar').forEach(stick => {
        stick.classList.remove("change");
    })
}
function headerScrollDetector(){
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),
        links = document.querySelectorAll('header nav > a'),
        headerLinkCount = links.length,
        top = document.getElementById('about').offsetTop,
        sectionID = '',
        activeSectionIndex = 0,
        clname = '';

        if( scroll >= (elementHeight('header') + 5) ){
            document.getElementById('home').classList.add('home');
        }else{
            document.getElementById('home').classList.remove('home');
        }
        // searching for section index user is looking at
        for ( var i=0; i<headerLinkCount; i++ ) {
            sectionID = links[i].getAttribute('href');
            if ( sectionID === '#' ) {
                sections.push(0);
                continue;
            }
            top = document.querySelector(sectionID).offsetTop;
            sections.push(top);
            if ( top <= scroll ) {
                activeSectionIndex = i;
            } else {
                break;
            }
        }
            // remove class "active" from all links
        for ( var i=0; i<links.length; i++ ) {
            clname = ' ' + links[i].className + ' ';
            clname = clname.replace(" active ", " ");
            links[i].className = clname;
        }
        // add class "active" to particular link
        links[activeSectionIndex].className += ' active';
}
// H E R O section
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

// A B O U T   M E section

var youTubeBlock = document.getElementById("playWindow");
function showWindow ( event ) {
    youTubeBlock.style.display = 'inline-block';    
}
function hideWindow ( event ) {
    youTubeBlock.style.display = 'none'; 
}
function outsideClick ( event ) {
    if (event.target === youTubeBlock ) {
        youTubeBlock.style.display = 'none'; 
    }
}


// M Y   S E R V I C E S section

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
// E D U C A T I O N   &   E X P E R I E N C E section
function education_experience_Info( data ) {
    var HTML = '',
    clas = '';
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
            clas = 'lefty';
        }else{
            clas = 'righty';
        }
        HTML += `<div class="side ${clas}">
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
    return HTML;
}
//A N I M A T I O N   for   E D U C A T I O N   &   E X P E R I E N C E

function educationAnimation (){
    var i,
    h = window.innerHeight - (elementHeight( '#education > #myEducation > div' ) / 2),
    scroll = window.scrollY + h,

    bubble_el_education = document.querySelectorAll('#education > #myEducation > div'),
    bubble_el_education_offsetTop,
    bubble_education = document.querySelectorAll('#education > #myEducation > div > .text');

    for(i = 0; i < bubble_education.length; i++ ){
        bubble_el_education_offsetTop = document.getElementById('myExperience').offsetTop + document.getElementById('education').offsetTop + bubble_el_education[i].offsetTop;
        if (scroll >= bubble_el_education_offsetTop){
            bubble_education[i].classList.add('animation');
        }
    }

    var bubble_el_experience = document.querySelectorAll('#experience > #myExperience > div'),
    bubble_el_experience_offsetTop,
    bubble_experience = document.querySelectorAll('#experience > #myExperience > div > .text');

    for(i = 0; i < bubble_experience.length; i++ ){
        bubble_el_experience_offsetTop = document.getElementById('myExperience').offsetTop + document.getElementById('experience').offsetTop + bubble_el_experience[i].offsetTop;
        if (scroll >= bubble_el_experience_offsetTop){
            bubble_experience[i].classList.add('animation');
        }
    }
    return;
}

// S K I L L S section
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

function fillBarAnimation (){
    var h = window.innerHeight - (elementHeight('#skills')/2),
    scroll = window.scrollY + h,
    bars = document.querySelectorAll('.progress-block > .bar > .bar-value > .bar-fill'),
    barTop = document.getElementById('skills').offsetTop;

    bars.forEach( bar =>{
        // bar.classList.remove('barAnimation');
        if (scroll >= barTop){
            bar.classList.add('barAnimation');
        }
    })
    return;
}

// S T A T I S T I C S section
function generateStatistics( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].score === '' ||
             data[i].name === '' ) {
            continue;
        }
        HTML += `<div class="statistics">
                    <i class="fa fa-${data[i].icon}"></i>
                    <p class="number" id="${data[i].icon}" data-index="${data[i].icon}"></p>
                    <p class="name">${data[i].name}</p>
                </div>`
    }
    return HTML;
}

        //effect of numbers counting
var zero = 0; //akimirka kada skaičiai dar nepradejo suktis
function numbers(id, end){
    var obj = document.getElementById(id),
        scroll = window.scrollY + (window.innerHeight - (0.9 * elementHeight( '#activities' ))),
        statistics = document.getElementById('activities').offsetTop,
        start = 0,
        current = start,
        animationTimeSeconds = 2,
        stepCount = 100,
        increment = end > start ? (end / stepCount) : (-end / stepCount),
        timer;
    
    if(obj.textContent == zero){
        if (scroll >= statistics){
            timer = setInterval(() => {
                current += increment;
                obj.textContent = Math.floor(current);

                if (current >= end) {
                    obj.textContent = end;
                    clearInterval(timer);
                }
            }, animationTimeSeconds * 1000 / stepCount );  
        }
    }
    return;
  }

// M Y   P O R T F O L I O section
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

//parodyti tik tuos, kurie turi pasirinktą tag'ą
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
// T E S T I M O N I A L S section
function generateTestimonials ( data ) {
    var HTML = '',
    setClass;

    for ( var i=0; i<data.length; i++ ) {

        if ( i === 0 || i === 1 ) {
            setClass = 'active';
        } else {
            setClass = '';
        }

        HTML +=
    `<div class="lefty ${setClass}" data-index="${i}">
        <div class="left-inner-first clone">
            <p>${data[i].description}</p>
            <div class="square"></div>
        </div>
        <div class="left-inner-second">
            <figure class="circle">
                <img src="./img/testimonial/${data[i].icon}" alt="spam">
            </figure>
            <div class="just-info">
                <h4>${data[i].info[0]}</h4>
                <span>${data[i].info[1]}</span>
            </div>
        </div>
    </div>`
    }
        HTML +=
    `<div class="listing-buttons">
        <div class="listing-btn-block">
            <i class="fa fa-angle-left"></i>
        </div>
        <div class="listing-btn-block">
            <i class="fa fa-angle-right"></i>
        </div>
    </div>`

    return HTML
}
function showNextTestimonial ( event ) {
    var direction = 0,
        current_index = parseInt( document.querySelector('.lefty.active').getAttribute('data-index') ),
        next_index = 0;
        
        if ( event.target.className.indexOf('fa-angle-right') >= 0 ) {
            direction = 1;
        }
        
        next_index = current_index + direction;
        
        if ( next_index === testimonialsInfo.length ) {
            next_index = 0;
        }

        document.querySelectorAll('.lefty.active').forEach( (lefty) => {
            lefty.classList.remove('active');
        } );

        document.querySelector('.lefty[data-index="'+next_index+'"]').classList.add('active');

        if ( next_index + 1 === testimonialsInfo.length) {                               
            document.querySelector('.lefty[data-index="0"]').classList.add('active');
        } else {
            document.querySelector('.lefty[data-index="'+(next_index + 1)+'"]').classList.add('active');
        }
        console.log(testimonialsInfo[next_index], testimonialsInfo[next_index + 1]);
        
    }
// var firstActiveTest = 0; 
// function showNextTestimonial ( event ) {
//     var direction = 0,
//         pirmas = firstActiveTest,
//         antras = firstActiveTest + 1,
//         current_index = parseInt( document.querySelector('.lefty.active').getAttribute('data-index') ),
//         next_index = 0; // next index taikomas tik vienam testimonial, todel nepersoka klase.

//         next_index = current_index + direction;

//         if ( event.target.className.indexOf('fa-angle-right') >= 0 ) {
//             direction = 1;
//         }
//         firstActiveTest++


//         if ( antras === testimonialsInfo.length ) {
//             antras = 0;
//         }
//         console.log(testimonialsInfo[pirmas], testimonialsInfo[antras]);


//         if ( firstActiveTest === testimonialsInfo.length ) {
//             firstActiveTest = 0;
//         }

//         document.querySelectorAll('.lefty.active').forEach( (lefty) => {
//             lefty.classList.remove('active');
//         } );
//         document.querySelector('.lefty[data-index="'+next_index+'"]').classList.add('active');
        
//         if ( next_index + 1 === testimonialsInfo.length) {                               
//             document.querySelector('.lefty[data-index="0"]').classList.add('active');
//         } else {
//             document.querySelector('.lefty[data-index="'+(next_index + 1)+'"]').classList.add('active');
//         }

// }


    function showPreviousTestimonial ( event ) {
        var direction = 0,
        current_index = parseInt( document.querySelector('.lefty.active').getAttribute('data-index') ),
        next_index = 0;
    
        if ( event.target.className.indexOf('fa-angle-left') >= 0 ) {
            direction = -1;
        }
    
        next_index = current_index + direction;
    
        if ( current_index === 0 && direction === -1 ) {
            next_index = testimonialsInfo.length - 1;
        }
    
        document.querySelectorAll('.lefty.active').forEach( (lefty) => {
            lefty.classList.remove('active');
        } );
    
        document.querySelector('.lefty[data-index="'+next_index+'"]').classList.add('active');  
    
        if ( next_index === -1 ) {                               
            next_index = testimonialsInfo.length - 1;
        } else {
            document.querySelector('.lefty[data-index="'+(next_index + 1)+'"]').classList.add('active');
        }
    
    }
    
    
    // function showTestimonial ( event ) {
    //     var direction = 0,
    //         current_index = parseInt( document.querySelector('.lefty.active').getAttribute('data-index') ),
    //         next_index = 0,
    
    
    //     if ( event.target.className.indexOf('fa-angle-left') >= 0 ) {
    //         direction = -1;
    //     }
    //     if ( event.target.className.indexOf('fa-angle-right') >= 0 ) {
    //         direction = 1;
    //     }
    //     console.log(direction);
    //     console.log(current_index);
    
    //     next_index = current_index + direction;
    
    
    //     if ( current_index === 0 && direction === -1 ) {
    //         next_index = testimonialsInfo.length - 1;
    //     }
    
    //     if ( current_index === (testimonialsInfo.length - 1) && direction === 1 ) {
    //         next_index = 0;
    //     }
    
    //     document.querySelector('.lefty.active').classList.remove('active');
    //     document.querySelector('.lefty[data-index="'+next_index+'"]').classList.add('active');  
    //     document.querySelector('.lefty[data-index="'+(secondLefty)+'"]').classList.add('active');
    
    //     return
    // }
// M Y   B L O G S section
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
// C O N T A C T   M E  section
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
            // console.log(field);
         
            for ( var a=0; a<field.attr.length; a++ ) {
                attrInfo = field.attr[a];
                attrHTML += ` ${attrInfo.name}="${attrInfo.value}"`;
                // console.log(attrInfo) 
                // console.log(attrInfo);
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

// B O T T O M   N A V I G A T I O N section
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
// F O O T E R  section
function laikas(){
    var HTML = '',
        currentYear = new Date().getFullYear();
    HTML += `Warg &copy 2017 - ${currentYear}. ALL RIGHT RESERVED`
    return HTML
}

// SIDEBAR

function showSidebar () {
    document.getElementById('color-bar').classList.toggle('active');
}
    const color = '--main-color';
    function changeColor ( e ) {
        document.documentElement.style.setProperty(color, '#FB4538');
    }
    function changeColor1 ( e ) {
        document.documentElement.style.setProperty(color, '#52A7DB');
    }
    function changeColor2 ( e ) {
        document.documentElement.style.setProperty(color, '#009688');
    }
    function changeColor3 ( e ) {
        document.documentElement.style.setProperty(color, '#437116');
    }

    const backgroundColor = '--background-color'; 
    function changeBackgroundLight ( e ) {
        let back = document.querySelectorAll('.clone').forEach( back => { // iškėlus 'back' kintamajį už funkcijos ribų jis nebesuranda visų .clone
            back.style.background = '#fff';
        } );
        document.documentElement.style.setProperty(backgroundColor, '#F6F6F6');
        document.querySelectorAll('h1, h2, h3, h4, .label-value, .row>.filter>div, .row>.arrows>i, .row>.arrows>div').forEach( all => {
            all.style.color = 'var(--blackText-color)';
        });
    }
    function changeBackgroundDark ( e ) {
        let back = document.querySelectorAll('.clone').forEach( back => {
            back.style.background = '#121212';
        } );
        document.documentElement.style.setProperty(backgroundColor, '#191919');
        document.querySelectorAll('h1, h2, h3, h4, .label-value, .row>.filter>div, .row>.arrows>i, .row>.arrows>div').forEach( all => {
            all.style.color = 'var(--text-color)';
        });
}
