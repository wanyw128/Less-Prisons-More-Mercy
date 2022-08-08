/* .js files add interaction to your website */

var factList = [
  "60% Sixty percent of people in local jails have some form of mental disability.",
  "166 Between 1973 and 2019, 173 innocent death-row prisoners were exonerated and released.",
  "790% The federal prison population has increased by almost 790 percent since 1980."
];

var factBtn = document.getElementById("factBtn");
var fact = document.getElementById("fact");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

//return to top

topbutton = document.getElementById("topBtn");

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}