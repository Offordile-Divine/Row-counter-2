// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0
function increment() {
    // console.log("clicked")
    //count = count + 1
    count += 1
    countEl.textContent = count
    // console.log(count)
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count)
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
let countStr = count + " - "
// 3. Render the variable in the saveEl using innerText
saveEl.textContent += countStr
countEl.textContent = 0
count = 0
}
// NB: Make sure to not delete the existing content of the paragraph



