
app.controller('dashboardController', ['$scope', function($scope){

  let users = [{name: 'Arpit'}, {name: 'Akash'}, {name: 'Ankur'}, {name: 'Ujjwal'}];

  $scope.deleteUser = (user) => {
    for(let index in users){
      if(user === users[index])
        users.splice(index, 1);
    }
  };

  $scope.addUser = (name) => {
    if(name == '' || name == undefined) return;
    users.push({name: name});
    $scope.user.name = '';
  };

  $scope.init = function(){
    $scope.userList = users;
  };

  $scope.init();

}]);
