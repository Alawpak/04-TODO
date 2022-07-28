import { Todo } from "./todo.class";

export class TodoList{

    constructor(  ){

        //this.todos = [];
        this.loadLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push( todo )  //agregar la tarea a la lista
        this.saveLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter( (todo) => todo.id != id);
        this.saveLocalStorage();
    }

    marcarCompletado(id){

        for(const todo of this.todos){        //todo nombre de cada barrida

            if(todo.id == id){
                
                todo.completado = !todo.completado;
                this.saveLocalStorage();
                break;
            }
        }
    }

    borrarCompletados(){
        this.todos = this.todos.filter( (todo) => todo.completado === false);
        this.saveLocalStorage();
    }

    /* el setItem almacena datos de la propia sesion y al cerrar, recupera esos datos pero pueden
    ser reemplazados, por lo que es necesario cargarlos cada vez con el load     */
    saveLocalStorage(){

        //es importante convertir la instancia a string con ayuda de un JSON

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    
    loadLocalStorage(){
        localStorage.getItem('todo') ? this.todos = JSON.parse(localStorage.getItem('todo'))
        : this.todos = [];
        // this.todos = : blabla ? [];

        this.todos = this.todos.map(Todo.fromJson);
        //this.todos = this.todos.map(obj => Todo.fromJson(obj));  
        //convertimos en instancias nuevamente ya que JSON.parse convierte solo a objeto
    }
}