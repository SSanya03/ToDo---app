//Check of JS is running
console.log("JS is running");
// Select elements
let input = document.getElementByld("taskinput");
let button = document.getElementByld("addBtn");
let list = document.getElementByld("taskList");

// Add event when button is clicked
button.addEventListener("click", function() {
  let task = input.value;
  if (task ==="") {
    alert("Enter a task!");
    return;
  }
  let li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
  input.value = "";
})
        
