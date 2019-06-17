"use strict";
// general
window.addEventListener("scroll", headerScrollDetector);

//HERO
document.getElementById('icons').innerHTML = generateIcons( Icons );

//BOTTOM
document.getElementById('footer_icons').innerHTML = generateFooterIcons( footerIcons );

//SERVICES
document.getElementById('myServices').innerHTML = generateServices( servicesInfo );