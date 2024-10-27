// ------------------ Dynamic Page Appearance ------------------ //

// Change Background Color
document.getElementById('bg-color').addEventListener('change', function () {
    document.body.style.backgroundColor = this.value;
});

// Increase Font Size
document.getElementById('increase-font-size').addEventListener('click', function () {
    const currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 2) + 'px';
});

// Decrease Font Size
document.getElementById('decrease-font-size').addEventListener('click', function () {
    const currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize - 2) + 'px';
});

// Toggle Dark Mode
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Change Font Style
document.getElementById('change-font-style').addEventListener('click', function () {
    if (document.body.classList.contains('sans-serif')) {
        document.body.classList.remove('sans-serif');
        document.body.classList.add('serif');
    } else {
        document.body.classList.remove('serif');
        document.body.classList.add('sans-serif');
    }
});

// ------------------ To-Do List with CRUD Functionality ------------------ //

// Add Task Function
document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

    // Enable double-click to edit task
    li.addEventListener('dblclick', function () {
        editTask(this);
    });

    // Enable click to mark task as completed
    li.addEventListener('click', function () {
        toggleCompleted(this);
    });

    // Append the task to the task list
    document.getElementById('task-list').appendChild(li);

    // Clear the input field after adding task
    taskInput.value = '';
}

// Delete Task Function
function deleteTask(element) {
    const li = element.parentElement;
    li.remove();
}

// Edit Task Function
function editTask(element) {
    const taskTextElement = element.querySelector('.task-text');
    const currentText = taskTextElement.textContent;

    const newText = prompt('Edit Task', currentText);
    if (newText !== null && newText.trim() !== '') {
        taskTextElement.textContent = newText.trim();
    }
}

// Mark Task as Completed Function
function toggleCompleted(element) {
    element.classList.toggle('completed');
}