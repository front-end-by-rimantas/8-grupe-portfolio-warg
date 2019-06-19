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

// STATISTICS section

// FREELANCE section

// MY PORTFOLIO section

// TESTIMONIALS section

// MY BLOGS section

// CONTACT ME section

// BOTTOM NAVIGATION section
document.getElementById('footer_icons').innerHTML = generateFooterIcons( footerIcons );
// FOOTER section
