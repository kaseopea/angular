app.controller('createCardCtrl', ['$scope', 'CONST_VALIDATORS', function($scope, CONST_VALIDATORS) {
    //Sending some constants to view
    $scope.nameMaxWords = CONST_VALIDATORS.MAX_WORDS_IN_NAME;
    $scope.minAge = CONST_VALIDATORS.AGE_MINIMUM;
    $scope.maxAge = CONST_VALIDATORS.AGE_MAXIMUM;
}]);