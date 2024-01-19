// let get = document.getElementById("container")
// let h1 = document.createElement("h1")
// h1.textContent = "My name is golu pandey"
// let styleAdd = document.createElement("button")
// styleAdd.textContent = "Add"
// styleAdd.style.backgroundColor = "black"
// styleAdd.style.color = "white"
// styleAdd.style.fontWeight = "bold"
// styleAdd.style.fontSize = "20px"

// let styler = document.createElement("button")
// styler.textContent = "Remove"
// styler.style.backgroundColor = "black"
// styler.style.color = "white"
// styler.style.fontWeight = "bold"
// styler.style.fontSize = "20px"
// styler.style.marginLeft = " 10px"
// get.append(h1)
// get.append(styleAdd)
// get.append(styler)

// styleAdd.onclick = function(){
//     h1.style.color = "red"
//     h1.style.textDecoration = "underline"

// }
// styler.onclick = function(){
//     h1.style.color = "black"
//     h1.style.textDecoration = "none"

// }
let userinput = document.getElementById("userInput").value
let firstValue = document.getElementById("firstNumber")
let secondValue = document.getElementById("secondNumber")
let reandmfirst = Math.floor(Math.random() * 100)
let reandmsecond = Math.floor(Math.random() * 100)
let totalrandom = reandmfirst + reandmsecond
firstValue.textContent = reandmfirst
secondValue.textContent = reandmsecond

function isCorrectResult(){
    userinput = document.getElementById("userInput").value
    let firstredomValue = firstValue.textContent
    let secondrendomvalue = secondValue.textContent
    let gettotalrandomvalue = parseInt(firstredomValue) + parseInt(secondrendomvalue)
    if (parseInt(userinput) == gettotalrandomvalue){
        let gameresult1 = document.getElementById("gameResult")
        gameresult1.textContent = "Result Matched"
        gameresult1.style.color = "green"
        gameresult1.style.fontWeight = "bold"
    }else{
        let gameresult1 = document.getElementById("gameResult")
        gameresult1.textContent = "Try again. goodluck"
        gameresult1.style.color = "red"
        gameresult1.style.fontWeight = "bold"
    }


    
    
   


    
    
   
}
function restartRandomNumbers(){
    firstValue.textContent = Math.floor(Math.random()*100)
    secondValue.textContent = Math.floor(Math.random() * 100)
    let gameresult2 = document.getElementById("gameResult")
    gameresult2.style.display = "none"
  document.getElementById("userInput").value = "0"
   
    
   


}
