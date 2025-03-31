function addTask() {
    let takeInput = document.getElementById("task");
    let taskText = takeInput.value.trim();
    if (taskText === "")
        return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class = 'delete' onclick = 'removeTask(this)'>  X </button>`
    document.getElementById("taskList").appendChild(li);

    takeInput.value = "";

}

function removeTask(button) {
    button.parentElement.remove();
}