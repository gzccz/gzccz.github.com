(function (window, document) {
    'use strict'
    var app = angular.module('app', ['ngRoute', 'app.movieList']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:type', {
            controller: 'listController',
            templateUrl: 'movie/movie-list.html',
        }).when('/hot',{
            controller :'',
            templateUrl : 'movie/hot.html'
        })
            //.when('/search',{
            //    redirectTo:'/temp'
            //})
            .otherwise({
                redirectTo: '/in_theaters'

        })

    }]);



    app.constant('URLConfig', {
        appUrl: 'http://api.douban.com/v2/movie/',
        count: 10,
    })

    app.directive('selectLink', function () {
        var item = [];
        return function (scope, element, attr) {
            item.push(element);
            element.bind('click', function (e) {
                item.forEach(function (item) {
                    item.removeClass('active');
                })

                element.addClass('active');
            })
            console.log(arguments);
        }
    })

    app.directive('diHref', ['$location', '$route',
        function($location, $route) {
            return function(scope, element, attrs) {
                scope.$watch('diHref', function() {
                    if(attrs.diHref) {
                        element.attr('href', attrs.diHref);
                        element.bind('click', function(event) {
                            scope.$apply(function(){
                                if($location.path() == attrs.diHref) $route.reload();
                            });
                        });
                    }
                });
            }
        }]);

    app.directive('reloadTrue', function () {
        return {
            link: function (scope,element,attr) {
                element.bind('click', function () {
                    var curhref=$(this).attr("href");
                    console.log(curhref);
                    var start=window.location.href.indexOf("#");
                    var s=window.location.href.substring(start,window.location.href.length);
                    console.log(s);
                    if (s==curhref) {
                        window.location.reload();
                    }
                })
            }
        }
    })


})(window, document);
