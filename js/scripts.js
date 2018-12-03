function onSubmit() {
    const li = document.createElement('li');
    const item = document.getElementById("myTodo").value;
    const todoItem = document.createTextNode(item);
    li.appendChild(todoItem);

    // const toDo = document.getElementById('#todoList');
    // const done = document.getElementById('#doneList');

    if (item === '') {
        alert("What do you need to do?");
    } else {
        document.getElementById('todoList').appendChild(li);
        console.log(todoItem);
    };
}
