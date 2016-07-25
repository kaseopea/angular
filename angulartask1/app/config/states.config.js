//Config for ui router
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
        url: '/',
        templateUrl: 'app/partials/index.tpl.html'

    }).state('createcard', {
        url: '/create',
        templateUrl: 'app/partials/createCard.tpl.html',
        controller: 'createCardCtrl'
    });

}]);