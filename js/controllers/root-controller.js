
app.run(['$rootScope', function($rootScope){

  $rootScope.$on('routeChangeStart', function(e, curr, prev){
    console.log('Route Change Started!');
  });

  $rootScope.$on('routeChangeSuccess', function(e, curr, prev){
    console.log('Route Changed Success!');
  });

}]);
