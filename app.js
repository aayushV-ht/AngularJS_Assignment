var app=angular.module('userWidgetApp', [])
  app.controller('UserWidgetController', function ($scope) {
    // Sample user data
    $scope.user = {
      photo: 'user.jpeg',
      firstName: 'Aayush',
      lastName: 'Viswase',
      email: 'aayush@example.com',
      status: 'Active'
    };

    // Function to toggle user status
    $scope.toggleStatus = function () {
      $scope.user.status = ($scope.user.status === 'active') ? 'inactive' : 'active';
    };
  })
  app.directive('userWidget', function () {
    return {
      restrict: 'E',
      templateUrl: 'user-widget.html',
      scope: {
        user: '='
    },
      controller: function ($scope) {
        $scope.onClick = function () {
        };
      }
    };
  });
