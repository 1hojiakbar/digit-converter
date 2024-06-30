// JS

const decBtn = document.getElementById("dec-btn");
const numDec = document.getElementById("num-dec");
const numSystem = document.getElementById("num-system");
const toSystem = document.getElementById("to-System");
const runSystem = document.getElementById("btn-system-run");
const runDecBtn = document.getElementById("btn-dec-run");
const runResaultBtn = document.getElementById("run-resault");
const runResaultBtn2 = document.getElementById("run-resault-btn2");
const load = document.getElementById("load");

const runFunction = () => {
  if (numDec.value && decBtn.value) {
    let decNum = Number(decBtn.value);
    let nums = Number(numDec.value);
    runResaultBtn.innerHTML = nums.toString(decNum);
    if (runResaultBtn.innerHTML == "NaN")
      runResaultBtn2.innerHTML = "Not a Number";
  } else {
    runResaultBtn.innerHTML = "0";
  }
};

runDecBtn.addEventListener("click", runFunction);

const runDecrimal = () => {
  if (numSystem && toSystem) {
    let numSys = String(numSystem.value);
    let toSys = Number(toSystem.value);
    runResaultBtn2.innerHTML = Number.parseInt(numSys, toSys);
    if (runResaultBtn2.innerHTML == "NaN") runResaultBtn2.innerHTML = "0";
  } else {
    runResaultBtn2.innerHTML = "Not a Number";
  }
};

runSystem.addEventListener("click", runDecrimal);
