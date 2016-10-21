/*******************************************************************************
 * Copyright (c) 2016 All rights reserved.
 ******************************************************************************/

 appFlight.service('FlightService', function(HttpCommunicationUtil) {

 	/*
	 * to fetch flight list
	 */
	this.fetchFlightList = function(url, successFun, errorFun) {
        HttpCommunicationUtil.doGet(url, successFun, errorFun);
    }; 	
 });