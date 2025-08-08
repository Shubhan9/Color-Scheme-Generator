let schemeSelect = document.querySelector("#scheme");
let colorPicker = document.querySelector("#colorPicker");
let generate = document.querySelector("#generate");

generate.addEventListener("click", () => {
    let scheme = schemeSelect.value;
    let hex = colorPicker.value.replace("#", ""); 

    fetch(`https://www.thecolorapi.com/scheme?mode=${scheme}&hex=${hex}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let result = document.querySelector("#result");
            result.innerHTML = "";

            data.colors.forEach(color => {
                let colorContainer = document.createElement("div");
                colorContainer.classList.add("color-container");

                let colorDiv = document.createElement("div");
                colorDiv.classList.add("color-swatch");
                colorDiv.style.backgroundColor = color.hex.value;

                let label = document.createElement("label");
                label.textContent = color.hex.value;

                colorDiv.addEventListener("click", () => {
                    navigator.clipboard.writeText(color.hex.value)
                        .then(() => {
                            alert(`Copied ${color.hex.value} to clipboard!`);
                        })
                })
                colorContainer.appendChild(colorDiv);
                colorContainer.appendChild(label);
                result.appendChild(colorContainer);
            });
        });
});
