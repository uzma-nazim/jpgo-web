let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let home = document.getElementById("home")
let about = document.getElementById("about")
let blog = document.getElementById("blog")
let mint = document.getElementById("mint")
let seondContent = document.getElementById("seondContent")
let content3 = document.getElementById("content3")
let btn4 = document.getElementById("btn4")
let content1 =document.getElementById("content1")
let footerChange = document.getElementById("footerChange")
let fourcontent = document.getElementById("fourcontent")
let footer1 = document.getElementById("footer1")
 let changegb = document.getElementById("changegb")  

btn1.addEventListener("click", () => {
    btn1.src = "./images/borderdot.png"
    btn2.src = "./images/dot.png"
    btn3.src = "./images/dot.png"
    btn4.src = "./images/dot.png"

    seondContent.style.left = "1700px"
    content3.style.left = "1700px"
    content1 .style.display ="flex"
    fourcontent.style.display = "none"
    footer1.style.visibility="visible"

    changegb.style.backgroundColor = "#ececec"
    content1.style.backgroundColor = "#ececec"
    home.classList.add("underline")
    about.classList.remove("underline")
    blog.classList.remove("underline")
    mint.classList.remove("underline")


    // seondContent.style.top = "20px"

})

btn2.addEventListener("click", () => {
    btn1.src = "./images/dot.png"
    btn2.src = "./images/borderdot.png"
    btn3.src = "./images/dot.png"
    btn4.src = "./images/dot.png"

    seondContent.style.left = "0px"
    content3.style.left = "1700px"
    fourcontent.style.display = "none"
    content1 .style.display ="none"
    seondContent.style.backgroundColor = "#ffff"

    footer1.style.visibility="visible"
    changegb.style.backgroundColor = "#ffffff"
    content1.style.backgroundColor = "#ffffff"


    about.classList.add("underline")
    home.classList.remove("underline")
    blog.classList.remove("underline")
    mint.classList.remove("underline")
    console.log(home);
})


btn3.addEventListener("click", () => {
    btn3.src = "./images/borderdot.png"
    btn1.src = "./images/dot.png"
    btn2.src = "./images/dot.png"
    btn4.src = "./images/dot.png"

    seondContent.style.left = "1700px"
    content3.style.left = "0px"
    fourcontent.style.display = "none"
    content1 .style.display ="none"

    footer1.style.visibility="visible"
    changegb.style.backgroundColor = "#eaf2d8"
    content1.style.backgroundColor = "#eaf2d8"

    blog.classList.add("underline")
    home.classList.remove("underline")
    about.classList.remove("underline")
    mint.classList.remove("underline")

})
btn4.addEventListener("click", () => {
    btn4.src = "./images/borderdot.png"
    btn3.src = "./images/dot.png"
    btn2.src = "./images/dot.png"
    btn1.src = "./images/dot.png"

    seondContent.style.left = "1700px"
    content3.style.left = "1700px"
    content1 .style.display ="none"
    fourcontent.style.display = "flex"

    footer1.style.visibility="hidden"
    changegb.style.backgroundColor = "#575959"


    mint.classList.add("underline")
    home.classList.remove("underline")
    about.classList.remove("underline")
    blog.classList.remove("underline")
    
})



