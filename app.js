const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status")

let draggableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart)
    todo.addEventListener("dragend", dragEnd)
})

function dragStart() {
    draggableTodo = this;
    console.log("dragstart");
}

function dragEnd() {
    draggableTodo = null;
    console.log("dragend");
}

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver)
    status.addEventListener("dragenter", dragEnter)
    status.addEventListener("dragleave", dragLeave)
    status.addEventListener("drop", dragDrop)
})

function dragOver(e) {
    e.preventDefault();
    //console.log("dragover");
}

function dragEnter() {
    this.style.border = "1px dash #ccc"
    console.log("dragenter");
}

function dragLeave() {
    this.style.border = "none"
    console.log("dragleave");
}

function dragDrop() {
    this.style.border = "none"
    this.appendChild(draggableTodo)
    console.log("drag-drop");
}