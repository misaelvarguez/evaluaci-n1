const ListaTareas = {
  
    tareas: [],
  
    agregarTarea: function(tarea) {
      this.tareas.push(tarea);
    },
  
    mostrarLista: function() {
      const listaTareas = document.getElementById('listatareas');
      listaTareas.innerHTML = '';
  
      this.tareas.forEach((tarea) => {
        const tareaItem = document.createElement('li');
        tareaItem.textContent = tarea;
        listaTareas.appendChild(tareaItem);
      });
    }
  };
  
  function manejarEnvioFormulario(event) {
    event.preventDefault();
  
    const tareaInput = document.getElementById('tareaNombre');
    const nuevaTarea = tareaInput.value;
  
    ListaTareas.agregarTarea(nuevaTarea);
    ListaTareas.mostrarLista();
  
    tareaInput.value = '';
  }
  
  const taskForm = document.getElementById('tareaFormulario');
  taskForm.addEventListener('submit', manejarEnvioFormulario);
  