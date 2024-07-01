const tasksList = document.querySelector('.tasksList');

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

window.addEventListener('load', () => {
    for (let i = 0; i < tasks.length; i++) {
        showTask(tasks[i]);
    }
});

function showTask(task) {
    let newTask = document.createElement('li');
    let label = document.createElement('label');
    label.classList.add('prio' + task.priority);
    let input = document.createElement('input');
    input.type = 'checkbox';
    label.append(input, task.title);
    newTask.appendChild(label);
    tasksList.appendChild(newTask);
}