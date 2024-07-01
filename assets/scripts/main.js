// SELECTORS
const tasksList = document.querySelector('.tasksList');
const form = document.querySelector('.tasksForm');
const taskTitle = document.querySelector('#taskname');
const taskPrio = document.querySelector('#priority');
const deleteBtn = document.querySelector('.deleteTasks');
const notif = document.querySelector('.notif');

// MEMORY
const tasks = [
    {
        title: "Apprendre mon cours de JavaScript",
        priority: 1
    },
    {
        title: "Créer mon compte Github",
        priority: 2
    },
    {
        title: "Répondre à mes emails",
        priority: 3
    }
];

// EVENTS
window.addEventListener('load', () => {
    showTasks(tasks);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = {
        title: taskTitle.value,
        priority: taskPrio.value
    }
    tasks.push(task);
    showTasks(tasks);
    form.reset();
});

deleteBtn.addEventListener('click', () => {
    deleteTasks();
    showTasks(tasks);
});


// FUNCTIONS
function showTasks(tasks) {
    sortTasks();
    tasksList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let newTask = document.createElement('li');
        newTask.classList.add('list-group-item');
        let label = document.createElement('label');
        label.classList.add('prio' + tasks[i].priority, 'form-check');
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.classList.add('form-check-input');
        label.append(input, tasks[i].title);
        newTask.appendChild(label);
        tasksList.appendChild(newTask);
    }
}

function deleteTasks() {
    let nbrDeletion = 0;
    let removeIndex;
    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasksList.childNodes[i].querySelector('input').checked) {
            tasks.splice(i, 1);
            nbrDeletion++;
        }
    }
    showNotification(nbrDeletion);
}

function sortTasks() {
    tasks.sort((a, b) => a.priority - b.priority);
}

function showNotification(nbrDeletion) {
    notif.textContent = nbrDeletion + ' tâches supprimées avec succès';
}