(function (window,document) {
    'use strict'
    var app = angular.module('app',[
        'ngRoute',
    'app.movieList',
    'app.movieDetail']);
    app.config(['$routeProvider',function ($routeProvider) {

        $routeProvider.when('/subject/:movieId',{
            controller : 'detailController',
            templateUrl : 'movie/movie-detail.html'
        }).when('/:type',{
            controller : 'listController',
            templateUrl : 'movie/movie-list.html'
        }).otherwise({
            redirectTo : '/in_theaters'
        })
    }]);

    app.constant('URLConfig',{
        appUrl : 'https://api.douban.com/v2/movie/',
        count : 30
    })

    // app.controller('listController',function () {
    //
    // }).controller('detailController',function () {
    //
    // })

    app.directive('selectLink',function () {
        var item = [];
        return function (scope,element,attr) {
            item.push(element);
            element.bind('click',function (e) {
                item.forEach(function (item) {
                    item.removeClass('active');
                })

                element.addClass('active');
            })
            console.log(arguments);
        }
    })

})(window,document);
