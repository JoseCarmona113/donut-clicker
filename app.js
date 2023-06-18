let autoclick = 0;
let autocost = 10;
let clicks = 0;
const donutcountelement = document.getElementById("display-donut-count");
const autocostelement = document.getElementById("display-auto-cost");
const autocount = document.getElementById("display-auto-count");

donutcountelement.innerHTML = " " + clicks;
autocostelement.innerHTML = "" + autocost;
autocount.innerHTML = "" + autoclick;

setInterval(auto, 1000);

function add() {
  clicks++;
  donutcountelement.innerHTML = " " + clicks;
}

function buyclicker() {
  if (clicks >= autocost) {
    clicks = clicks - autocost;
    autoclick = autoclick + 1;
    autocost = Math.round(autocost * 1.1);
    donutcountelement.innerHTML = " " + clicks;
    autocostelement.innerHTML = "" + autocost;
    autocount.innerHTML = "" + autoclick;
  }
}

function auto() {
  if (autoclick > 0) {
    clicks = clicks + autoclick;
    donutcountelement.innerHTML = "" + clicks;
  }
}
