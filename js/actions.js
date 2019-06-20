"use strict";
// general
window.addEventListener("scroll", headerScrollDetector);

// HERO section
document.getElementById('icons').innerHTML = generateIcons( Icons );

// ABOUT ME section

// MY SERVICES section
document.getElementById('myServices').innerHTML = generateServices( servicesInfo );

// EDUCATION section
document.getElementById('myEducation').innerHTML = generateEducation( educationInfo );
// SKILLS section
document.getElementById('fill-bar').innerHTML = generateProgress( fillBarInfo );
// EXPERIENCE section
document.getElementById('myExperience').innerHTML = generateExperience( experienceInfo );
// STATISTICS section
document.getElementById('myStatistics').innerHTML = generateStatistics( statisticsInfo );
// SKILLS section

// EXPERIENCE section

// FREELANCE section

// MY PORTFOLIO section
document.getElementById('myWorks').innerHTML = generateMyWorks( myWorkInfo );
document.getElementById('myWorksList').innerHTML = generateMyWorksList( myWorkInfo );
// TESTIMONIALS section

// MY BLOGS section
document.getElementById('blog-list').innerHTML = generateBlog( blog );

// CONTACT ME section

// BOTTOM NAVIGATION section
document.getElementById('footer_icons').innerHTML = generateFooterIcons( footerIcons );
// FOOTER section
