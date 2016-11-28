'use strict';

app.directive('draggable', function(){

  var link = function($scope, $element, $attrs){
    var height = toNumber($element.css('height')),
        width = toNumber($element.css('width'));

    $element.on('mousedown', function($event){
      console.log('Element height:',height, 'width: ', width);

      $element.css('position', 'absolute');
      $element.on('mousemove', function($event){
        $element.css('left', compute($element, 'left', $event.pageX) - (width / 2));
        $element.css('top', compute($element, 'top', $event.pageY) - (height / 2));
      });
    }).on('mouseup', function(){
      $element.off('mousemove');
    });
  };

  function centerOnCursor(element){

  }

  function compute(element, direction, newValue){
    var oldValue = toNumber(element.css(direction));
    return oldValue + (newValue - oldValue);
  }

  function toNumber(styleValue){
    return parseInt(styleValue.split('px')[0]);
  }

  return {
    restrict: 'A',
    link: link
  }
});
