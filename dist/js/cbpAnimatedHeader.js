var cbpAnimatedHeader=function(){function n(){window.addEventListener("scroll",function(n){a||(a=!0,setTimeout(e,250))},!1)}function e(){var n=o();n>=c?classie.add(t,"navbar-shrink"):classie.remove(t,"navbar-shrink"),a=!1}function o(){return window.pageYOffset||r.scrollTop}var r=document.documentElement,t=document.querySelector(".navbarHome"),a=!1,c=100;n()}();