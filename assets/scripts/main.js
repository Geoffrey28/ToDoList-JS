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
    let nbrDeletion = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasksList.childNodes[i].querySelector('input').checked) {
            console.log(tasks[i]);
            tasks.splice(i, 1);
            console.log(tasks[i]);
            nbrDeletion++;
        }
    }
    showNotification(nbrDeletion);
    showTasks(tasks);
});


// FUNCTIONS
function showTasks(tasks) {
    sortTasks();
    tasksList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let newTask = document.createElement('li');
        let label = document.createElement('label');
        label.classList.add('prio' + tasks[i].priority);
        let input = document.createElement('input');
        input.type = 'checkbox';
        label.append(input, tasks[i].title);
        newTask.appendChild(label);
        tasksList.appendChild(newTask);
    }
}

function sortTasks() {
    tasks.sort((a, b) => a.priority - b.priority);
}

function showNotification(nbrDeletion) {
    notif.textContent = nbrDeletion + ' tâches supprimées avec succès';
}