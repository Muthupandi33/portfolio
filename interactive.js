let darkModebtn = document.getElementById("darkModebtn");
const dark = document.body;
darkModebtn.addEventListener("click", e => {
    const darkModeBar = document.getElementsByClassName("barWhite");
    const darkModeContent = document.getElementsByClassName("darkMode");
    let darkModeContentArray = [...darkModeContent];
    let darkModeBarArray = [...darkModeBar];
    let darkText=document.querySelectorAll(".navigation-block>li>a");
    console.log(darkText);
    let darkTextArray=[...darkText];
    darkTextArray.forEach(r=>{
        r.classList.toggle("darkText");
    })
    darkModeContentArray.forEach(changeBlack=>{
        changeBlack.classList.toggle("darkModeContent");
    })
    dark.classList.toggle("darkModeDisabled");
    
    darkModeBarArray.forEach(value => {
        value.classList.toggle("bars");

    })
    if (darkModebtn.innerText == "🌙") {
        darkModebtn.innerText = "☀️";
        darkModebtn.classList.toggle("changeSun");
    } else {
        darkModebtn.innerText = "🌙";
        darkModebtn.classList.toggle("changeSun");
    }

})

let bar=document.getElementById("bars");

bar.addEventListener("click", values=>{
    let viewOption = document.getElementsByClassName("viewOption");
    bar.classList.toggle("barTurn");
    let viewOptionArray=[...viewOption];
    console.log(viewOptionArray);
    viewOptionArray.forEach(value=>{
        value.classList.toggle("showOption");
       
    })
})