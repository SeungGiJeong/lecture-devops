"use strict";function asyncGeneratorStep(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function _asyncToGenerator(i){return function(){var e=this,o=arguments;return new Promise(function(t,n){var r=i.apply(e,o);function a(e){asyncGeneratorStep(r,t,n,a,s,"next",e)}function s(e){asyncGeneratorStep(r,t,n,a,s,"throw",e)}a(void 0)})}}window.onload=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return{method:"GET"},t=getCookie("tictacsession"),n=JSON.parse(window.atob(t.split(".")[1])),e.next=5,fetch("http://localhost:3000/statistics/data?user=".concat(n.username));case 5:return r=e.sent,e.next=8,r.json();case 8:a=e.sent,new CanvasJS.Chart("chartContainer",{animationEnabled:!0,title:{text:"Your statistics"},data:[{type:"pie",startAngle:240,yValueFormatString:'##0.00"%"',indexLabel:"{label} {y}",dataPoints:a.chartData}]}).render(),document.getElementById("games").innerHTML=a.numbers.games,document.getElementById("wins").innerHTML=a.numbers.wins,document.getElementById("ties").innerHTML=a.numbers.ties,document.getElementById("loses").innerHTML=a.numbers.loses;case 15:case"end":return e.stop()}},e)}));