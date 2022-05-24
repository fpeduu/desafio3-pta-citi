const button = document.getElementById("button")
const text = document.getElementById("text")
const body = document.body

const modes = ["black", "white", "gray"]
let currentMode = modes[0]

button.addEventListener("click", () => {
    if (currentMode == modes[0]) {
        currentMode = modes[1]
        body.style.backgroundColor = "#F2F2F2"
        text.innerText = "Background: #F2F2F2"
    } else if (currentMode == modes[1]) {
        currentMode = modes[2]
        body.style.backgroundColor = "#C7C7C7"
        text.innerText = "Background: #C7C7C7"
    } else {
        currentMode = modes[0]
        body.style.backgroundColor = "#292929"
        text.innerText = "Background: #292929"
    }
})