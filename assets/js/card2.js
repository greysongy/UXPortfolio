const card = document.querySelector('#brownCard');
const card2 = document.querySelector('#consultingCard');
const card3 = document.querySelector("#vcCard");
const card4 = document.querySelector("#iibaCard");
const card5 = document.querySelector("#calCard");

function clickRotate() {
  card.classList.toggle('rotated');
}
card.addEventListener('click', clickRotate);
card2.addEventListener('click', clickRotateTwo);
card3.addEventListener("click", clickRotateThree);
card4.addEventListener("click", clickRotateFour);
card5.addEventListener("click", clickRotateFive);

function clickRotateTwo() {
  card2.classList.toggle('rotated');
}

function clickRotateThree() {
  card3.classList.toggle('rotated');
}

function clickRotateFour() {
  card4.classList.toggle('rotated');
}

function clickRotateFive() {
  card5.classList.toggle('rotated');
}