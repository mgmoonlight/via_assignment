'use strict';

/**
 * @ngdoc function
 * @name viaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the viaApp
 */
angular.module('viaApp')
  .controller('MainCtrl', function ($scope,$http) {

  	$scope.loading=true;
  	$scope.status='Loading drivers list...';
    $http.get('http://private-05627-frontendnewhire.apiary-mock.com/contact_list').then(function(res) {
    	$scope.loading=false;
    	$scope.drivers = res.data;
    }, function(error) {
    	$scope.loading=true;
    	$scope.status='Could not read data';
    });

    $scope.getImg = function (driver) {
    	if (driver.driverType === 'Citizen') {
    		return '/images/citizen.svg';
    	} 
    	else if (driver.driverType === 'Professional') {
    		return '/images/professional.svg';
    	}
    }

    $scope.revealMoreDetails = function ($event) {
    	var el=$($event.target).parent();
    	el.find('.img-container').css('height','100px');
    	el.find('.more-details').css('height', '45px');
    }

    $scope.hideMoreDetails = function ($event) {
    	var el=$($event.target).parent();
   		el.parent().find('.img-container').css('height','135px');
    	el.parent().find('.more-details').css('height', '0');
    }
  });
