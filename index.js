let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let counterActivator = true

function increment() {
    count += 1
    countEl.textContent = count    
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)

    countEl.textContent = 0
    return count = 0
}

function clearSave() {
    saveEl.textContent = ""
}