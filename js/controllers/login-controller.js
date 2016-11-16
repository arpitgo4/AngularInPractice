
app.controller('loginController', ['$scope', '$location', function($scope, $location){

  $scope.login = function(){
    if($scope.username == 'arpit' && $scope.password == '123'){
      $scope.message = 'Access Granted';
      $location.path('/dashboard');
    }
    else $scope.message = 'Access Denied';
  };

  $scope.init = function(){
    console.log('Login Controller Loaded!');
  };

}]);
