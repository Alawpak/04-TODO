(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.d({},{L:()=>v});var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var o,n,r;return o=e,r=[{key:"fromJson",value:function(t){var o=t.tarea,n=t.id,r=t.completado,a=t.creado,i=new e(o);return i.id=n,i.completado=r,i.creado=a,i}}],(n=null)&&t(o.prototype,n),r&&t(o,r),Object.defineProperty(o,"prototype",{writable:!1}),e}();function n(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var a=document.querySelector(".todo-list"),i=document.querySelector(".new-todo"),l=document.querySelector(".footer"),c=document.querySelector(".filters"),s=document.querySelectorAll(".filtro"),u=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n            <label> ").concat(e.tarea,' </label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),o=document.createElement("div");return o.innerHTML=t,a.append(o.firstElementChild),o.firstElementChild};function d(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.addEventListener("keyup",(function(e){if(13===e.keyCode&&""!=i.value.trim()){var t=new o(i.value.trim());v.nuevoTodo(t),u(t),i.value=""}})),a.addEventListener("click",(function(e){var t=e.target.localName,o=e.target.parentElement.parentElement,n=o.getAttribute("data-id");t.includes("input")?(v.marcarCompletado(n),o.classList.toggle("completed"),console.log(v)):t.includes("button")&&(v.eliminarTodo(n),o.parentElement.removeChild(o),console.log(v))})),l.addEventListener("click",(function(e){if(e.target.localName.includes("button"))for(var t=a.children.length-1;t>=0;t--){var o=a.children[t];o.classList.contains("completed")&&(a.removeChild(o),v.borrarCompletados())}})),c.addEventListener("click",(function(e){var t=e.target.text;if(t){s.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var o,r=n(a.children);try{for(r.s();!(o=r.n()).done;){var i=o.value;i.classList.remove("hidden");var l=i.classList.contains("completed");switch(t){case"Pendientes":l&&i.classList.add("hidden");break;case"Completados":l||i.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var v=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var t,n,r;return t=e,(n=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.saveLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,o=d(this.todos);try{for(o.s();!(t=o.n()).done;){var n=t.value;if(n.id==e){n.completado=!n.completado,this.saveLocalStorage();break}}}catch(e){o.e(e)}finally{o.f()}}},{key:"borrarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!1===e.completado})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):this.todos=[],this.todos=this.todos.map(o.fromJson)}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}());v.todos.forEach(u),console.log("todos",v.todos)})();