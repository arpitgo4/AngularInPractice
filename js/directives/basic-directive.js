'use strict';

app.directive('myCustomer', function(){
  return{
    scope: {
      customerInfo: '=info'
    },
    template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}}'
  };
});
