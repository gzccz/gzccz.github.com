/**
 * Created by wenyuan on 2016/12/29.
 */

(function (window,document) {

    var module = angular.module('app.movieList',[]);

//  主模块 子模块
    module.controller('listController',['$scope','$rootScope','URLConfig','$http','$routeParams',
        function ($scope,$rootScope,UrlConfig,$http,$routeParams) {

        var url = UrlConfig.appUrl;
        var count = UrlConfig.count;

        var type = $routeParams.type || 'in_theaters';

        var fullUrl = url + type;
        console.log(fullUrl);

        // $http({
        // //    请求头 请求参数
        //     url : fullUrl,
        //     method : 'GET',
        //     ...
        // })

            $scope.loading = true;
            
        //参数当中必须带有一个callBack函数
        var trueUrl = fullUrl + '?count=' + count + '&start=' + 0 + '&callback=movieListCallback';
        $http.jsonp(trueUrl).error(function () {
           // console.log('error',arguments); 
        }).success(function () {
            console.log('success',arguments);
        });
            
        // function movieListCallback() {
        //
        // }

        window.movieListCallback = function (jsonData) {
            console.log(jsonData);
            
            $scope.title = jsonData.title;
            $scope.total = jsonData.total;
            $scope.movies = jsonData.subjects;
            
            $scope.loading = false;
        }
          
            $rootScope.navTitle = '电影列表';
            
    }])
})(window,document);