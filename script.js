const fishCount = document.getElementById("counter");
const countHistory = document.getElementById("previous-counts");
const totalHistory = document.getElementById("total");

let count = 0;
let total = 0;
fishCount.textContent = count;
totalHistory.textContent = total;

function increment() {
  count++;
  fishCount.textContent = count;
}

function save() {
  countHistory.textContent += `${count}-`;
  total += count;
  totalHistory.textContent = total;
  count = 0;
  fishCount.textContent = count;
}
