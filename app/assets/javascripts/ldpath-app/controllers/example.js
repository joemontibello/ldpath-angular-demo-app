angular.module('app.exampleApp').controller("ExampleCtrl", [
  '$scope', '$http', function($scope, $http) {
    console.log('ExampleCtrl running');

    $scope.ldpath = { url: "", program: ""};
    $scope.response = { content: ""};

    $scope.$watchCollection('ldpath', function(newValue, oldValue) {
      $scope.evaluate(newValue);
    });

    $scope.evaluate = function(ldpath) {
      console.log("Evaluate " + ldpath.url + " :" + ldpath.program);
      if (ldpath.url.length == 0) {
        return;
      }

      $http.post("/evaluate", { url: ldpath.url, program: ldpath.program}).success(function(data,status) {
        $scope.response.content = data;
      });
    };
  }
])