/* Cambia entre agregar o quitar la clase "responsive" al mnuPrin cuando el usuario de click en el icono */
function menuResponsive() { //menuResponsive
    var x = document.getElementById("menuPrincipal"); //Asignar el elemento #menuPrincipal a x
    if (x.className === "mnuPrin") { //Si la clase se llama mnuPrin, se agrega la clase responsive.
        x.className += " responsive";
    } else {
        x.className = "mnuPrin";
    }
}

//Todo hecho con Angular.
angular.module("TodoList", []).controller("localController", function ($scope, $filter) { //Uso de $scope (angular), $filter para removerItem.
    $scope.newTodo = ''; //Creacion del Todo.
    $scope.todo = [];
    if (localStorage.getItem("todo")) { //Guardar contenido del todo en el localStorage.
        var localTodoToJson = JSON.parse(localStorage.getItem("todo"));
        $scope.todo = localTodoToJson;
    }

    $scope.addTodo = function () { //Agregar tarea al todo.
        $scope.todo.push({ name: $scope.newTodo }); //Push de la tarea.
        var localTodo = JSON.stringify(angular.copy($scope.todo)); //Convertir tarea en string.
        localStorage.setItem("todo", localTodo); //Asignar nuevamente el todo al localStorage.
        $scope.newTodo = ''; //Dejar en blanco input.
        //$("#tarea").focus();
    }

    $scope.removeAllTodo = function () { //Borrar todas las tareas del Todo.
        $scope.todo = []; //Vuelve a asignar un array vacio al todo.
        localStorage.setItem("todo", ''); //Vuelve a guardar el Todo en el localStorage.
    }

    $scope.removeItemTodo = function (index) { //Borrar solo la tarea que se quiere borrar.
        $scope.todo.splice(index, 1); //Funciona con el $filter, borra la tarea del index deseado.
        var localTodo = JSON.stringify(angular.copy($scope.todo)); //Convertir tarea en string y guardar en localStorage.
        localStorage.setItem("todo", localTodo); //Asignar nuevamente el Todo al localStorage.
    }

});

//jQuery para Animaciones.
$(document).ready(function(){
    var $encabezado = $("#encabezado"); //Tomar el elemento con id #encabezado.
    $encabezado.hide().fadeIn(2000); //Esconder el encabezado cuando cargue la pagina y mostrar el encabezado con fadeIn en 2 segundos.

    var $mnuNav = $("#menu");
    $mnuNav.hide().slideDown(1000); //Mostrar el menu en 1 segundo.

});

