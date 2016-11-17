app.factory("Data", ['$http', 'toaster',
    function ($http, toaster) { // This service connects to our REST API

        var serviceBase = '../php/api/v1/';
		var currentURL= "";
        var obj = {};
        obj.toast = function (data) {
            toaster.pop(data.status, "", data.message, 3000, 'trustedHtml');
        }
  
        obj.get = function (q) {
            if(q!="session")
            { 
                $(".se-pre-con").show();
             }

            return $http.get(serviceBase + q).then(function (results) {
                $(".se-pre-con").fadeOut("slow");
                return results.data;
            });
        };
        obj.post = function (q, object) {
            $(".se-pre-con").show();
            return $http.post(serviceBase + q, object).then(function (results) {
                $(".se-pre-con").fadeOut("slow");
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
		obj.showToast=function (msg) {
            toaster.pop("", "", msg, 3000, 'trustedHtml');
        }

        return obj;
}]);

app.factory('ShareData', function() {
     var savedData = null;
     function set(data) {
       savedData = data;
     }
     function get() {
      return savedData;
     }

     return {
      set: set,
      get: get
 }

});