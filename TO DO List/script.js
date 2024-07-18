document.addEventListener('DOMContentLoaded', function() {
            const todoForm = document.getElementById('todoForm');
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');

            // Function to add a new task
            function addTask(taskText) {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';

                const taskSpan = document.createElement('span');
                taskSpan.textContent = taskText;
                taskSpan.addEventListener('click', function() {
                    listItem.classList.toggle('completed');
                });

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-button';
                deleteButton.innerHTML = '&times;';
                deleteButton.addEventListener('click', function() {
                    taskList.removeChild(listItem);
                });

                listItem.appendChild(taskSpan);
                listItem.appendChild(deleteButton);

                taskList.appendChild(listItem);
            }

            // Handle form submission
            todoForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const taskText = taskInput.value.trim();
                if (taskText !== '') {
                    addTask(taskText);
                    taskInput.value = '';
                }
            });
        });