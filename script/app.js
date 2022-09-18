(function(){
'use strict';

    angular.module("myFirstApp",[])
    .controller('myFirstController',function($scope){
        $scope.name1
        $scope.name2
        $scope.sum = function(num1,num2){
            if(num1 == null && num2 == null){
                return 0
            }else if(num1 != null && num2 == null){
                return num1
            }else if(num2 != null && num1 == null){
                return num2
            }
            return  Number(num1)+Number(num2)
        }
    });



})();