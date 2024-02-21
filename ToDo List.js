    const submitButton = document.getElementById('submitButton');
    const newTaskInput = document.getElementById('newTask');
    
   
    submitButton.disabled = true;
    
    newTaskInput.addEventListener('input', () => {
      
      submitButton.disabled = newTaskInput.value.trim() === '';

    });
    
    document.getElementById('taskForm').addEventListener('submit', (event) => {
      event.preventDefault(); 
      
    const task = newTask.value.trim();
      
     const listItem = document.createElement('li');
      listItem.textContent = taskText;
      
      const tasklist = document.getElementById('taskist')
      taskList.appendChild(listItem);
      
       newTask.value = '';

       return false;
    });