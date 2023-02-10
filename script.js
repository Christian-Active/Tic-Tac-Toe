var boxes = document.querySelectorAll(".tile")
var heading = document.querySelector(".heading")
var restart = document.querySelector("#reset")
var playerX = "X"
var playerO = "O"
var currentPlayer = playerX
var store = []

boxes.forEach((box, i) => {
    box.addEventListener("click", boxClicked)
})
function boxClicked(e){
    var id = e.target.id
    if(!store[id]){
        store[id] = currentPlayer 
        e.target.innerHTML = currentPlayer
    }
    if(store[id].clicked = true){
            boxes[id].removeEventListener("click", boxClicked)
    }
    if(playerWon()){
       heading.innerHTML = "Player " + currentPlayer + " has won"
       boxes.forEach((box) => {
        box.removeEventListener("click", boxClicked)
       })

    }
    if(playerDraw()){
        return
    }
    currentPlayer = (currentPlayer === "X"? playerO: playerX)
}
function playerWon(){
    if(store[0] === currentPlayer){
        if(store[1] === currentPlayer && store[2] === currentPlayer){
        return true}
    }
    if(store[0] === currentPlayer){
        if(store[3] === currentPlayer && store[6] === currentPlayer){
        return true}
    }
    if(store[0] === currentPlayer){
        if(store[4] === currentPlayer && store[8] === currentPlayer){
        return true}
    }
    if(store[4] === currentPlayer){
        if(store[3] === currentPlayer && store[5] === currentPlayer){
        return true}
    }
    if(store[4] === currentPlayer){
        if(store[1] === currentPlayer && store[7] === currentPlayer){
        return true}
    }
    if(store[4] === currentPlayer){
        if(store[2] === currentPlayer && store[6] === currentPlayer){
        return true}
    } 
    if(store[8] === currentPlayer){
        if(store[7] === currentPlayer && store[6] === currentPlayer){
        return true}
    } 
    if(store[8] === currentPlayer){
        if(store[5] === currentPlayer && store[2] === currentPlayer){
        return true}
    }
      
}
function playerDraw(){
    let draw = 0
    store.forEach((storage, i) => {
        if(storage[i] !== null){
            draw++
        }
        if(draw === 9){
            heading.innerHTML = "IT IS A TIE!!"
            setTimeout(start, 3000);
        }
    })
}
restart.addEventListener("click", start)
function start(){
    store = []
    boxes.forEach((box) =>
   box.innerHTML = "")
    heading.innerHTML = "Play"
    boxes.forEach((box, i) => {
        box.addEventListener("click", boxClicked)
    })
}


