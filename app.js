var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope)
{
    //setup the pending tasks
    $scope.todos = [];
    $scope.orderMethod = '';

    $scope.addTask = function()
    {
        //push items into list
        $scope.todos.push(
        {
            'task': $scope.task,
            'priority': $scope.color,
        });
        $scope.task = '';
    };
});