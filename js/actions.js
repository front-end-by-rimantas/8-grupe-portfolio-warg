"use strict";
// general
window.addEventListener("scroll", headerScrollDetector);

// HERO section
document.getElementById('icons').innerHTML = generateIcons( Icons );

// ABOUT ME section

// MY SERVICES section
document.getElementById('myServices').innerHTML = generateServices( servicesInfo );

// EDUCATION section
document.getElementById('myEducation').innerHTML = education_experience_Info( educationInfo );
window.addEventListener("scroll", educationAnimation);
// SKILLS section
document.getElementById('fill-bar').innerHTML = generateProgress( fillBarInfo );
// EXPERIENCE section
document.getElementById('myExperience').innerHTML = education_experience_Info( experienceInfo );
// window.addEventListener("scroll", experienceAnimation);
// STATISTICS section
document.getElementById('myStatistics').innerHTML = generateStatistics( statisticsInfo );

// FREELANCE section

// MY PORTFOLIO section
document.getElementById('myWorks').innerHTML = generateMyWorks( myWorkInfo );

document.querySelectorAll('#portfolio > #myWorks > .filter > div').forEach( filter => {
    filter.addEventListener('click', filterPortfolio);
});

var portfolioLeftArrow = document.querySelector('#portfolio > #myWorks > .arrows > .fa-angle-double-left'),
    portfolioRightArrow = document.querySelector('#portfolio > #myWorks > .arrows > .fa-angle-double-right'),
    portfolioNumber = document.querySelectorAll('#portfolio > #myWorks > .arrows > div');

portfolioLeftArrow.addEventListener( 'click', function(){
    next_work(-1)
});
portfolioNumber.forEach( (number,index) => {
    number.addEventListener('click',function(){
        next_work(index+1)
    });
});
portfolioRightArrow.addEventListener( 'click', function(){
    next_work(1)
});

// document.getElementById('myScrollbar').innerHTML = generateMyScrollbarClasses( myWorkInfo );


// TESTIMONIALS section

document.getElementById('testimonials_list').innerHTML = generateTestimonials( testimonialsInfo );

// MY BLOGS section
document.getElementById('blog-list').innerHTML = generateBlog( blog );

// CONTACT ME section
document.getElementById('form').innerHTML = generateForm( contactForm );

// BOTTOM NAVIGATION section
document.getElementById('footer_icons').innerHTML = generateFooterIcons( footerIcons );
// FOOTER section
