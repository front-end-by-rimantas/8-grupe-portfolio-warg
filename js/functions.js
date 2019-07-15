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
    let video = event.target.getAttribute('data-youtube');
    document.querySelector('.pop-up .pop-up-inner').innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video}" 
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
function hideWindow ( event ) {
    youTubeBlock.style.display = 'none'; 
    document.querySelector('.pop-up .pop-up-inner').innerHTML = '';
}
function outsideClick ( event ) {
    if (event.target === youTubeBlock ) {
        youTubeBlock.style.display = 'none'; 
        document.querySelector('.pop-up .pop-up-inner').innerHTML = '';
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
            <div class="bar-value"  >
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
function generatePortfolioFilter( data ){
    var tags_list = [],
        HTML = '';
        
    HTML += `<div class="active">All</div>`;
    data.forEach( work => {
        if ( tags_list.indexOf ( work.project_title ) === -1){
            tags_list.push( work.project_title );
            HTML += `<div>${work.project_title}</div>`;
        }
    })
    return HTML;
}

function generateAllWorks( data ){
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].project_title === '' ||
            data[i].image === '' ) {
            continue;
        }
    HTML += `<div class="work" data-index="${i}">
                <img src="img/myWorks/${data[i].image}">
                <div class="texts">
                    <h3>Portfolio</h3>
                    <p>${data[i].project_title}</p>
                </div>
            </div>`
            if(i==2){
                break;
            }
    }
    generateArrows(data);        
    return HTML;           
}

function workingFiltering(e) {
    var tag = e.target.innerText.toLowerCase(),
        currentWorks = document.querySelectorAll('#portfolio > #myWorks > .works > .work'),
        images = document.querySelectorAll('#portfolio > #myWorks > .works > .work > img'),
        allFilters = document.querySelectorAll('#portfolio > #myWorks > .filter > div'),
        HTML = '',
        currentElements = [];
        
        for(var i=0; i<currentWorks.length; i++){
            currentElements.push(Number(currentWorks[i].getAttribute('data-index')));
        }
        for(var i=0; i<allFilters.length; i++){
            allFilters[i].classList.remove('active');
            if(allFilters[i].innerText.toLowerCase() == tag){
                allFilters[i].classList.add('active');
            }
        }    
        
        let shrink = setInterval(reduce, 10);
        var padding = 0,
            maxPadding = 50,
            opacity = 1,
            radius = 0;
        function reduce(){
            if(padding==maxPadding){ 
                clearInterval(shrink);
                nextHTMLelements(tag);
            }else{
                padding +=5;
                opacity -=0.02;
                for(var a = 0; a<currentElements.length; a++){
                    images[a].style.padding = padding + '%';
                    images[a].style.opacity = opacity;
                }
            }
        }        
    return HTML;
}

function nextHTMLelements(tag){
    var nextElements = [],
        HTML = '';
    for(var i=0; i<myWorkInfo.length; i++){
        if (myWorkInfo[i].project_title === tag){
            nextElements.push(i);
        }
        if(tag ==='all'){
            nextElements.push(i);
        }
    }
    if (nextElements > 3 ){
        nextElements = 3
    }
    for(var i=0; i<nextElements.length; i++){
        HTML += `<div class="work" data-index="${nextElements[i]}">
                    <img src="img/myWorks/${myWorkInfo[nextElements[i]].image}">
                    <div class="texts">
                        <h3>Portfolio</h3>
                        <p>${myWorkInfo[nextElements[i]].project_title}</p>
                    </div>
                </div>`
        if(i==2){
        break;
        }
    }
    document.querySelector('#myWorks > .works').innerHTML = HTML;
    generateArrows(nextElements);
    
    let enlarge = setInterval(increaseNextWorks, 1);
    var padding2 = 50,
        minPadding2 = 0,
        opacity2 = 0,
        images2 = document.querySelectorAll('#myWorks > .works > .work > img'),
        ilgis = nextElements.length;

        if (ilgis > 3){
            ilgis = 3;
        }
        function increaseNextWorks(){
            if(padding2 === minPadding2){
                clearInterval(enlarge);
            }else{
                padding2 -=2;
                opacity2 +=0.04;
                for(var b = 0; b < ilgis; b++){
                    images2[b].style.padding = padding2 + '%';
                    images2[b].style.opacity = opacity2;
                }
            }
        }
    return;
}
function generateArrows(componentsAtMoment){
    var HTML_arrows = '',
        nr=0,
        steps = Math.ceil(componentsAtMoment.length/3),
        active = '';

    HTML_arrows += `<div class="arrows">
                        <i class="more fa fa-angle-double-left"></i>`;
    for(var i=0; i<steps; i++){
        nr++;
        if(i==0){
            active = 'active';
        }else{
            active = 'inactive';
        }
        HTML_arrows += `<div class="more number ${active}">${nr}</div>`
    }
    HTML_arrows += `<i class="more fa fa-angle-double-right"></i>
                </div>`

    document.querySelector('#myWorks > .arrows_box').innerHTML = HTML_arrows;
    var portfolioLeftArrow = document.querySelector('#portfolio > #myWorks > .arrows_box > .arrows > .fa-angle-double-left'),
    portfolioRightArrow = document.querySelector('#portfolio > #myWorks > .arrows_box > .arrows > .fa-angle-double-right');
        portfolioLeftArrow.addEventListener( 'click', function(){
            arrowMove(-1)
        });
        portfolioRightArrow.addEventListener( 'click', function(){
            arrowMove(1)
        });
}
function arrowMove (direction){
    var currentWorks = document.querySelectorAll('#myWorks > .works > .work'),
        currentElements = [],
        thisElementTag = document.querySelector('#portfolio > #myWorks > .filter > .active').innerText.toLowerCase(),
        allTags = [], //AllElementsWithThisTag
        newElements = [];
        
    //ką matau prieš paspaudimą
    for(var i=0; i<currentWorks.length; i++){ 
        currentElements.push(Number(currentWorks[i].getAttribute('data-index')));
    }
    //kiek tokių darbų yra iš viso
    for( var i=0; i<myWorkInfo.length; i++){
        if (myWorkInfo[i].project_title == thisElementTag){
            allTags.push(i)
        }
        if (thisElementTag == 'all'){
            allTags.push(i)
        }
    }
    // paspaudus matysiu sekančius indeksus:

    // rodyklės rodo po vieną
        // var next = 0,
        //     HTML_works = '',
        //     place;
    // for (var i=0; i<currentElements.length; i++){ 
    //         place = allTags.indexOf(currentElements[i]);
    //         if(place == 0 && direction == -1){
    //             next = allTags[allTags.length-1];
    //             console.log(`place == 0 && direction == -1 next = ${next}`);
    //         }
    //         else if(place == allTags.length-1 && direction == 1){
    //             next = allTags[0];
    //             console.log(`place == allTags.length-1 && direction == 1 next = ${next}`);
    //         }else{
    //             next = allTags[place+direction];
    //             console.log(`next = ${next}`);
    //         }
    //         newElements.push(next);     
    // }
    // console.log(allTags[allTags.length-1]);
    // console.log(currentWorks.length);
    
    // rodyklės rodo po 3
    var x = allTags.indexOf(currentElements[0])/3,
        HTML_works = '',
        workPerWindow = 3,
        firstIndex = allTags.indexOf(currentElements[0]),
        lastOfAll = Math.floor((allTags.length-1)/3) * workPerWindow,
        next,
        numbers = document.querySelectorAll('#portfolio > #myWorks > .arrows_box > .arrows > .number'),
        a = 1,
        y = allTags.indexOf(currentElements[0])/3 + a + direction;
        console.log(lastOfAll);
        
        for (var i=0; i<3; i++){
            if(firstIndex==0 && direction == -1){
                x = Math.floor((allTags.length-1)/3) + 1;
            }
            if(firstIndex==lastOfAll && direction == 1){
                x = -1;
            }
            next = allTags[( workPerWindow * (x+direction) ) + i];
            if (typeof next === "undefined"){
                continue;
            }
            newElements.push(allTags[( workPerWindow * (x+direction) ) + i]);
        }
        for(var i=0; i<numbers.length; i++){
            numbers[i].classList.remove('active');
            if(firstIndex==lastOfAll && direction == 1){
                y = 1;
            }
            if(firstIndex==0 && direction == -1){
                y = numbers.length;
            }
            if(numbers[i].innerText == y){
                numbers[i].classList.add('active');
                console.log(numbers[i].classList);
            }
        }

    for(var i=0; i<newElements.length; i++){
        HTML_works +=   `<div class="work" data-index="${newElements[i]}">
                            <img src="img/myWorks/${myWorkInfo[newElements[i]].image}">
                            <div class="texts">
                                <h3>Portfolio</h3>
                                <p>${myWorkInfo[newElements[i]].project_title}</p>
                            </div>
                            </div>`
            if(i==2){
                break;
            }
    }
    document.querySelector('#myWorks > .works').innerHTML = HTML_works;
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

var firstActiveTest = 0; 
function showNextTestimonial ( event ) {
    var direction = 0,
        pirmas = firstActiveTest,
        antras = firstActiveTest + 1;


        if ( event.target.className.indexOf('fa-angle-right') >= 0 ) {
            direction = 1;
        }
        firstActiveTest++


        if ( antras === testimonialsInfo.length ) {
            antras = 0;
        }
        console.log(pirmas, antras);


        if ( firstActiveTest === testimonialsInfo.length ) {
            firstActiveTest = 0;
        }
        document.querySelectorAll('.lefty.active').forEach( (lefty) => {
            lefty.classList.remove('active');
            lefty.classList.remove('active-1');
            lefty.classList.remove('active-2');
        } );
        document.querySelector(`.lefty[data-index="${pirmas}"]`).classList.add('active');
        document.querySelector(`.lefty[data-index="${pirmas}"]`).classList.add('active-1');
        document.querySelector(`.lefty[data-index="${antras}"]`).classList.add('active');
        document.querySelector(`.lefty[data-index="${antras}"]`).classList.add('active-2');

}

function showPreviousTestimonial ( event ) {
    var direction = 0,
        pirmas = firstActiveTest - 1,
        antras = firstActiveTest;

        if ( event.target.className.indexOf('fa-angle-left') >= 0 ) {
            direction = -1;
        }
        firstActiveTest--

        if ( pirmas === -1 ) {
            pirmas = testimonialsInfo.length - 1;
        }
        console.log(pirmas, antras);

        if ( firstActiveTest === -1 ) {
            firstActiveTest = testimonialsInfo.length - 1;
        }
        document.querySelectorAll('.lefty.active').forEach( (lefty) => {
            lefty.classList.remove('active');
            lefty.classList.remove('active-1');
            lefty.classList.remove('active-2');
        } );
        document.querySelector(`.lefty[data-index="${pirmas}"]`).classList.add('active');
        document.querySelector(`.lefty[data-index="${pirmas}"]`).classList.add('active-1');
        document.querySelector(`.lefty[data-index="${antras}"]`).classList.add('active');
        document.querySelector(`.lefty[data-index="${antras}"]`).classList.add('active-2');


}

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
                    <i class="fa fa-${data[i].icon[0].name}" href="${data[i].icon[0].adress}"></i>
                    <a class="fa fa-${data[i].icon[1].name} up" href="${data[i].icon[1].adress}"></a>
                    <a class="fa fa-${data[i].icon[2].name} corner" href="${data[i].icon[2].adress}"></a>
                    <a class="fa fa-${data[i].icon[3].name} right" href="${data[i].icon[3].adress}"></a>
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
        classNames = '',
        ID = '';


        for (var i=0; i<data.fields.length; i++) {
            field = data.fields[i];
            attrHTML = '';
            classNames = '';


            if(data.fields[i].attr[0].value == 'text'){
                ID = 'name';
            }
            else if(data.fields[i].attr[0].value == 'email'){
                ID = 'email';
            }
            else{
                ID = 'message';
            }
         
            for ( var a=0; a<field.attr.length; a++ ) {
                attrInfo = field.attr[a];
                attrHTML += ` ${attrInfo.name}="${attrInfo.value}"`;
                
            }
        
            classNames = field.className.join(' ');

            if ( field.type === 'input' ) {
                HTML += `<div class="${classNames}">
                            <input ${attrHTML} id=${ID}>
                            <span class="${ID}"></span>
                        </div>`;/*${data.fields[i].description}*/
            
            }
            if ( field.type === 'textarea' ) {
                HTML += `<div class="${classNames}">
                            <textarea ${attrHTML} id=${ID}></textarea>
                            <span class="${ID}"></span>
                        </div>`; /*${data.fields[i].description}*/
            }
        }
        HTML += '<div class="actions">';
        for ( var i=0; i<data.actions.length; i++ ) {
            HTML += `<div class="col-12">
                        <div id="btn-submit" type="submit" class="form-btn button dark" onclick="formError()">${data.actions[i].text}</div>
                    </div>`;
        }
        HTML += '<form>'
    return HTML
}


function formError (){
    var nameValue = document.getElementById('name').value,
        emailValue = document.getElementById('email').value,
        messageValue = document.getElementById('message').value,
        name_ats = true,
        email_ats = true,
        message_ats = true,
        name_error = document.querySelector('#contact > #form > form > .col-6 > .name'),
        email_error = document.querySelector('#contact > #form > form > .col-6 > .email'),
        message_error = document.querySelector('#contact > #form > form > .col-12 > .message');

        
        // N A M E validation
        name_ats = validateName(nameValue);
            if ( name_ats == true){
                name_error.innerHTML = '';
            } else {
                name_error.innerHTML = name_ats;
            }

        // E M A I L validation 
        email_ats = validateEmail(emailValue);
            if ( email_ats == true){
                email_error.innerHTML = '';
            } else {
                email_error.innerHTML = email_ats;
            }
        // M E S S A G E validation
        message_ats = validateMessage(messageValue);
            if (message_ats == true){
                message_error.innerHTML = '';
            } else {
                message_error.innerHTML = message_ats;
            }
    return;
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
        let back = document.querySelectorAll('.clone').forEach( back => {
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
