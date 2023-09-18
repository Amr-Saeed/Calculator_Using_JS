const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const equal = document.querySelector(".equal");
const perc = document.querySelector(".percent");
//function

function calculation(btnVlaue) {
  if (btnVlaue === "=") {
    try {
      input.value = eval(input.value);
    } catch (err) {
      alert("Error");
    }
  } else if (btnVlaue === "AC") {
    input.value = "";
  } else if (btnVlaue === "DEL") {
    input.value = input.value.toString().slice(0, -1);
  } else {
    input.value += btnVlaue;
  }
  input.value = input.value;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    calculation(e.target.dataset.value);
  });
});

perc.addEventListener("click", function (e) {
  input.value = eval(input.value.toString().replace(/%/g, "/100"));
});
