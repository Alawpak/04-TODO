
import { Todo, TodoList } from "../classes";
import { todoList } from "../index";

//references to html
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const footer        = document.querySelector('.footer');
const ulFilters     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const CrearTodoHtml = (todo) => {

    //ternario to see if completado is false = "", if is true = "completed"
    const htmlTodo = `
    <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
            <label> ${todo.tarea} </label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');  //creamos div y agregamos
    div.innerHTML = htmlTodo;

    //no se agrega el div pq es mala practica
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}



//eventos
txtInput.addEventListener('keyup', (event) =>{

    if(event.keyCode === 13 && txtInput.value.trim() != ""){
        const nuevoTodo = new Todo(txtInput.value.trim());

        todoList.nuevoTodo(nuevoTodo);

        CrearTodoHtml(nuevoTodo)

        txtInput.value = "";
    }

});

//event.target.localName obtiene el nombre del elemento unicamente

divTodoList.addEventListener('click', (event)=>{

    const nameElement   = event.target.localName;                         //input - label - boton
    const todoElement   = event.target.parentElement.parentElement;       //padre del padre
    const todoId        = todoElement.getAttribute('data-id');            //obtener atributo

    if(nameElement.includes('input')){  //only if clickeamos on input
        
        todoList.marcarCompletado(todoId);     
        
        todoElement.classList.toggle('completed');          /*obtenemos los atributos 
                                y toggle si hay atributo, lo elimina y si no, lo agrega*/
        console.log(todoList)                     
    }
    else if(nameElement.includes('button')){
        todoList.eliminarTodo(todoId);
        todoElement.parentElement.removeChild(todoElement);
        console.log(todoList)
    }
})

footer.addEventListener('click', (event)=>{

    const nameElement   = event.target.localName;    
    
    if(nameElement.includes('button')){
        
       
        for(let i = divTodoList.children.length - 1; i >= 0; i --){
            const element = divTodoList.children[i];  //barre todos los li
                                                            
            if(element.classList.contains('completed')){
                divTodoList.removeChild(element);
                todoList.borrarCompletados();
            }
        }
    }
})

ulFilters.addEventListener('click', (event) => {

    const filtro = event.target.text; //almacenamos a lo que le dimos click (comp, pend, all)
    
    if(!filtro){ return };   //si no hay nada, que no haga las demás lineas

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));   //eliminamos seleccion
    event.target.classList.add('selected');    //agregamos la clase solo al que se selecciono

    for(const element of divTodoList.children){
        
        element.classList.remove('hidden');     
        const completado = element.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado) element.classList.add('hidden');
            break;

            case 'Completados':
                if(!completado) element.classList.add('hidden');
            break;
        }
    }// agregamos hidden solo a los elementos que cumplen la condición
})