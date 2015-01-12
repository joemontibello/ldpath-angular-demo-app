angular.module('app.exampleApp').controller("ExampleCtrl", [
  '$scope', '$http', function($scope, $http) {
    console.log('ExampleCtrl running');

    $scope.ldpath = { url: "", program: "", response: ""};
    $scope.response = { content: ""};

    $scope.$watchCollection('ldpath', function(newValue, oldValue) {
      $scope.evaluate(newValue);
    });

    $scope.evaluate = function(ldpath) {
      if (ldpath.url.length == 0 || ldpath.program.length == 0) {
        return;
      }

      $http.post("/evaluate", { url: ldpath.url, program: ldpath.program}).success(function(data,status) {
        $scope.response.content = JSON.stringify(data, null, 2);
      });
    };
  }
])