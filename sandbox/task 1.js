
function separateFunction(event) {
    event.preventDefault();
    const input = document.querySelector(".form_label-input");
    const output = document.querySelector(".form_label-output");
      let word = input.value;
      let delay = 1000;
    for (let i=0; i < word.length; i += 1) {
        console.log(new Date() + " before setTimeout | i = " + i);
        setTimeout(() => {
            console.log(new Date() + " in setTimeout | i = " + i);
            output.textContent += word[i];
        }, delay);
        delay += 1000;
        console.log(new Date() + " after set setTimeout | i = " + i);
    }


}


document.querySelector(".form_label-button").addEventListener("click", separateFunction);


