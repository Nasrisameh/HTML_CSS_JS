document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector("input[name='display']");
    const buttons = document.querySelectorAll(".button input");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else if (value === "AC") {
                display.value = "";
            } else if (value === "<=") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += value;
            }
        });
    });
});
