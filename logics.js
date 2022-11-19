console.log("Be happier than now :) :) :)")

let todoTitle = document.getElementById("title");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let todoList = document.getElementById("todo-list");
let btn = document.querySelector(".clear");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    output.innerHTML += `
    <div id="todo-list">
        <span id="todo_title">
            ${todoTitle.value}
        </span>
        <span id="btn-container">
            <span class="clear btn">x</span>
        </span>
    </div>`
    
})

output.addEventListener("click", e => {
    let classList = e.target.classList.contains("clear")

    if(classList){
        if(confirm(`Do you wanna delete :: ${e.target.parentNode.parentNode.innerText.toUpperCase()} ::`)){
            // e.target.parentNode.remove();
            e.target.parentNode.parentNode.remove()
        }
    }
})