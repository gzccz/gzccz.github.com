/**
 * Created by wenyuan on 2016/12/29.
 */

(function () {

    var module = angular.module('app.movieDetail',[]);
    module.controller('detailController',['$scope','$rootScope','URLConfig','$http','$routeParams',
        function ($scope,$rootScope,URLConfig,$http,$routeParams) {

        var url = URLConfig.appUrl;

        var movieId = $routeParams.movieId;

        var fullUrl = url + 'subject/' + movieId;

        $http.jsonp(fullUrl + '?callback=movieDetailCallback');

        window.movieDetailCallback = function (jsonData) {
            console.log(jsonData);
            $scope.movie = jsonData;

        }

        $rootScope.navTitle = '电影详情';
    }])

})()