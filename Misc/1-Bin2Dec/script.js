document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inDigits");
  input.addEventListener("keyup", function (e) {
    let val = input.value;
    let elResult = document.getElementById("result");

    if (e.key === "1" || e.key === "0") {
      let result = 0;
      const tab = val.split("");

      for (i = 0; i < tab.length; i++) {
        const index = tab.length - i - 1;
        console.log(index);
        if (tab[i] === "1") result = result + Math.pow(2, index);
      }

      elResult.innerText = result;
    } else {
      val = val.substring(0, val.length - 1);
      input.value = val;
    }
  });
});
