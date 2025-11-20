let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText = "-";
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      default:

        let txt = display.innerText;
        let last = txt[txt.length - 1];
        let input = e.target.innerText;
        let ops = "+-*/";

        if (input === ".") {
          // ищем точку с конца, пока не встретится оператор
          let i = txt.length - 1;
          while (i >= 0 && !ops.includes(txt[i])) {
            if (txt[i] === ".") return; // просто выходим, ничего не меняем
            i--;
          }
        } 
        // предотвращаем ввод двух операторов подряд
        if (ops.includes(input) && ops.includes(last)) {
          display.innerText = txt.slice(0, txt.length - 1) + input;
          return;
        }

        if (display.innerText === "0" && input !== ".") {
          display.innerText = input;
        } else {
          display.innerText += input;
        }
    }
  });
});
