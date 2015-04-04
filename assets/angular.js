var app = angular.module('toDo', []);

app.controller('mainController', function($scope) {

	$scope.todoList = [];

	$scope.addItem = function() {

		$scope.todoList.push($scope.todo);
		$scope.todo = '';
		console.log($scope.todoList);
	}

});