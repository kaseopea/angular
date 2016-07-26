//Config for ui router
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
        url: '/',
        templateUrl: 'app/partials/index.tpl.html',
        controller: 'indexCtrl',
        controllerAs: 'vm'
    })
        .state('createcard', {
        url: 'create',
        parent: 'index',
        templateUrl: 'app/partials/createCard.tpl.html',
        controller: 'createCardCtrl',
        controllerAs: 'vm'
    });
        //.state();

}]);