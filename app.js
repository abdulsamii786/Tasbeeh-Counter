let count1 = 0;
let count2 = 0;
let count3 = 0;

function increment() {
  let text = document.getElementById("text1");
  count1++;
  text.innerText = count1;
}

function reset() {
  let text = document.getElementById("text1");

  count1 = 0;
  text.innerText = count1;
}
function increment2() {
  let text2 = document.getElementById("text2");

  count2++;
  text2.innerText = count2;
}

function reset2() {
  let text2 = document.getElementById("text2");

  count2 = 0;
  text2.innerText = count2;
}
function increment3() {
  let text3 = document.getElementById("text3");
  count3++;
  text3.innerText = count3;
}
function reset3() {
  let text3 = document.getElementById("text3");

  count3 = 0;
  text3.innerText = count3;
}
