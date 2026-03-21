getColorScheme("000000", "monochrome")

const form = document.getElementById("user-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Form submitted")
    let colorInput = document.getElementById("color-input").value
    colorInput = colorInput.slice(1)
    const modeInput = document.getElementById("mode-input").value
    getColorScheme(colorInput, modeInput)
})

function getColorScheme(colorInput, modeInput)  {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput})&mode=${modeInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.colors)
        render(data)
    })
    .catch(error => console.error("Fetch failed:", error));
}

function render(data) {
    let html = ""
    data.colors.forEach(color => {
        html += `
        <div class="color-display">
            <img class="color"/ src="${color.image.bare}" alt="Color Image">
            <div class="color-code">
                ${color.hex.value}
            </div>
        </div>`
    })
    document.getElementById("color-scheme").innerHTML = html;
    console.log("Rendering Successful")
}
