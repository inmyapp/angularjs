(function() {'use strict';                                
    var app = angular.module('application', []);//ชื่อโมดูล, โมดูลที่เกี่ยวข้อง(จะกล่าวถึงในภายหลัง)
    
    app.controller('storeController', function ($scope) {
        $scope.sushi = {
            name: 'Maguro',
            price: 200,
            description: 'Fat tuna',
            canPurchase: true
        };
    });
    
})(); // Best Practice For Javascript