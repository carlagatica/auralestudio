// When the user scrolls down 50px from the top of the document, resize the header's font size
//agregado ahora

var xxs = window.matchMedia("(min-width: 1px) and (max-width: 576px)");
var xs = window.matchMedia("(min-width: 577px) and (max-width: 768px)");
var s = window.matchMedia("(min-width: 769px) and (max-width: 992px)");
var m = window.matchMedia("(min-width: 993px) and (max-width: 1200px)");
var l = window.matchMedia("(min-width: 1201px) and (max-width: 1400px)");
var xl = window.matchMedia("(min-width: 1401px)");

//hasta aca


//agregado

if (xs.matches){
  window.onscroll = function() {scrollFunction()};
  document.getElementById("logo").style.width = "0.5rem";
  document.getElementById("header").style.fontSize = "0.6rem";
  document.getElementById("header").style.padding = "0.5rem 0.1rem";
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("header").style.fontSize = "0.4rem";
      document.getElementById("header").style.margin = "0";
      document.getElementById("header").style.padding = "0.1rem";
      document.getElementById("logo").style.width = "1rem";
    } else {
      document.getElementById("header").style.fontSize = "0.6rem";
      document.getElementById("header").style.padding = "0.5rem 0.1rem";
      document.getElementById("logo").style.width = "0.5rem";
    }
  }
}
if (s.matches){
  window.onscroll = function() {scrollFunction()};
  document.getElementById("logo").style.width = "1.5rem";
  document.getElementById("header").style.fontSize = "0.6rem";
  document.getElementById("header").style.padding = "0.5rem 0.1rem";
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("header").style.fontSize = "0.4rem";
      document.getElementById("header").style.margin = "0";
      document.getElementById("header").style.padding = "0.1rem";
      document.getElementById("logo").style.width = "1.25rem";
    } else {
      document.getElementById("header").style.fontSize = "0.7rem";
      document.getElementById("header").style.padding = "0.7rem 0.1rem";
      document.getElementById("logo").style.width = "1.5rem";
    }
  }
}
if (m.matches){
  window.onscroll = function() {scrollFunction()};
  document.getElementById("logo").style.width = "1.7rem";
  document.getElementById("header").style.fontSize = "1.2rem";
  document.getElementById("header").style.padding = "0.5rem 0.1rem";
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("header").style.fontSize = "0.9rem";
      document.getElementById("header").style.margin = "0";
      document.getElementById("header").style.padding = "0.1rem";
      document.getElementById("logo").style.width = "1.5rem";
    } else {
      document.getElementById("header").style.fontSize = "1.2rem";
      document.getElementById("header").style.padding = "0.9rem 0.1rem";
      document.getElementById("logo").style.width = "1.7rem";
    }
  }
}
if (l.matches){
  window.onscroll = function() {scrollFunction()};
  document.getElementById("logo").style.width = "3rem";
  document.getElementById("header").style.fontSize = "1.2rem";
  document.getElementById("header").style.padding = "0.5rem 0.1rem";
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("header").style.fontSize = "1.1rem";
      document.getElementById("header").style.margin = "0";
      document.getElementById("header").style.padding = "0.2rem";
      document.getElementById("logo").style.width = "1.9rem";
    } else {
      document.getElementById("header").style.fontSize = "1.3rem";
      document.getElementById("header").style.padding = "0.9rem 0.2rem";
      document.getElementById("logo").style.width = "3rem";
    }
  }
}
if (xl.matches){
  window.onscroll = function() {scrollFunction()};
  document.getElementById("logo").style.width = "3rem";
  document.getElementById("header").style.fontSize = "1.2rem";
  document.getElementById("header").style.padding = "1rem 0.2rem";
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("header").style.fontSize = "0.8rem";
      document.getElementById("header").style.margin = "0";
      document.getElementById("header").style.padding = "0.2rem";
      document.getElementById("logo").style.width = "2rem";
    } else {
      document.getElementById("header").style.fontSize = "1.2rem";
      document.getElementById("header").style.padding = "1rem 0.2rem";
      document.getElementById("logo").style.width = "3rem";
    }
  }
}
//document.getElementById("logo").style.width = "3rem";
//document.getElementById("header").style.fontSize = "1.2rem";
//document.getElementById("header").style.padding = "1rem 0.2rem";

//function scrollFunction() {
//  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//    document.getElementById("header").style.fontSize = "0.8rem";
//    document.getElementById("header").style.margin = "0";
//    document.getElementById("header").style.padding = "0.2rem";
//    document.getElementById("logo").style.width = "2rem";
//  } else {
//    document.getElementById("header").style.fontSize = "1.2rem";
//    document.getElementById("header").style.padding = "1rem 0.2rem";
//    document.getElementById("logo").style.width = "3rem";
//  }
//}