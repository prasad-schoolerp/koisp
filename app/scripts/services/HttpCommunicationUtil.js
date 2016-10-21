/*******************************************************************************
 * Copyright (c) 2016. All rights reserved.
 ******************************************************************************/

appFlight.service('HttpCommunicationUtil', function($http) {
	/*
	 * Function to make http post call
	 * @param url, data, successCallBack, errorCallBack
	 * @return 
	 */

	var baseUrl = '/app-flight';

	this.doPost = function(url, data, successFun, errorFun) {
		
		$http({
            method: 'POST',
            url: baseUrl+url,
            data: data,
            crossDomain: true, 
            dataType: 'jsonp',
        }).success(function(data, status, headers, config) {
            successFun(data);
          }).error(function(data, status, headers, config){
            /*handle non 200 statuses*/
            errorFun(data);
          });
	};	

	/*
	 * Function to make http get call
	 * @param url, successCallBack, errorCallBack
	 * @return 
	 */

	this.doGet = function(url, successFun, errorFun) {
		$http.get(baseUrl+url)
			.success(function(data) {
				successFun(data);
			})
			.error(function(data) {
				errorFun(data);
			});
	};	

});