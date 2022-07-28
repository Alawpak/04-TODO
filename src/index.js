import { CrearTodoHtml, saludar } from './js/componentes';
import './styles.css';

//import {} from './classes/index.js'; // o predeterminadamente de la siguiente manera:
import {Todo, TodoList} from './classes'; //agarra index.js por defecto

export const todoList = new TodoList();

todoList.todos.forEach(CrearTodoHtml);       //al ser unico argumento se puede hacer eso
//todoList.todos.forEach( todo => CrearTodoHtml(todo));

console.log('todos', todoList.todos);