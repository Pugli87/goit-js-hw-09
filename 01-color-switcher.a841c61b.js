!function(){var t,a=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");stop.disabled=!0;var o=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))},d=function(){start.disabled=!1,stop.disabled=!0,d(t)};a.addEventListener("click",(function(){start.disabled=!0,stop.disabled=!1,t=setInterval(o,1e3)})),e.addEventListener("click",d)}();
//# sourceMappingURL=01-color-switcher.a841c61b.js.map
