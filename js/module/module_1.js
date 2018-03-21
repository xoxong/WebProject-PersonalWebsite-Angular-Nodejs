var myapp=angular.module('myapp',['ui.router','ngAnimate']);
			myapp.controller('contor',function($scope,$http){

				//友情链接
				 $http.post("http://127.0.0.1:7019/water_youqing")
				.then(function (response) {$scope.yqnames = response.data;});
				
				//web技术
				$http.post("http://127.0.0.1:7019/water_webjs")
				.then(function (response) {$scope.jsnames = response.data;});
				
				//li
//				 $http.get("mibear.json")
//				.then(function (response) {$scope.linames = response.data.lis;});
				
				//第二页 water
				//菜单
				 $http.post("http://127.0.0.1:7019/water_menu")
				.then(function (response) {$scope.water_menu = response.data;});
				//图篇
				 $http.post("http://127.0.0.1:7019/water_img")
				.then(function (response) {$scope.water_img = response.data;});
				
				//交互动画 按钮
				angular.element(".zhanshi_moshi_box button").on('click',function(){
					$(this).css({'border':'1px solid #27AE60'});
					$(this).find("a").css({'background-color':'#27AE60','color':'white'});
					$(this).siblings().css({'border':'1px solid #ADADAD'});
					$(this).siblings().find("a").css({'background-color':'white','color':'black '});
				})
			});
			myapp.controller('mibear_btn1', function ($scope, $route) { $scope.$route = $route;})
			myapp.controller('mibear_btn2', function ($scope, $route) { $scope.$route = $route;})
			myapp.controller('mibear_btn3', function ($scope, $route) { $scope.$route = $route;})
            myapp.config(["$stateProvider", "$urlRouterProvider",function($stateProvider,$urlRouterProvider){
            	$urlRouterProvider.when('', '/mibear_btn2');
            	$stateProvider.state('mibear_btn1', {
			        url: '/mibear_btn1',
			        templateUrl: 'templtes/mibear_btn1.html'
		        //mainTab.tab1 即mainTab/tab1 二级嵌套
			    }).state('mibear_btn2', {
			        url: '/mibear_btn2',
			        templateUrl: 'templtes/mibear_btn2_old.html'
			        //mainTab.tab1 即mainTab/tab1 二级嵌套
			    }).state('mibear_btn3', {
			            url: '/mibear_btn3',
			            templateUrl: 'templtes/mibear_btn3.html'
			    });
            	
			
			}]);