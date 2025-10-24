const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count")
const incrementBtn  =document.getElementById("increment-btn")
const decrementBtn  =document.getElementById("decrement-btn")
const saveBtn  =document.getElementById("save-btn")
let count = 0

incrementBtn.addEventListener("click", function(){
    count += 1
    countEl.textContent = count
})

decrementBtn.addEventListener("click", function(){
    count -= 1
    countEl.textContent = count
})

saveBtn.addEventListener("click", function(){
    let entries = count + " - "
    saveEl.textContent += entries
    countEl.textContent = 0
    count = 0
})