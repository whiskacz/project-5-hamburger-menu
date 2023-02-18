const ham = document.querySelector(".ham")
const xBar = document.querySelector(".x")
const ulList = document.querySelector("ul")

const funkcja = () => {
    ulList.style.transform = "translateX(350px)"
    ham.classList.toggle("hide")
    xBar.classList.toggle("hide")
    xBar.style.transform = "translateX(30vw)"
}
const funkcja2 = () => {
    ulList.style.transform = "translateX(-350px)"
    ham.classList.toggle("hide")
    xBar.classList.toggle("hide")
}


ham.addEventListener("click", funkcja)
xBar.addEventListener("click", funkcja2)