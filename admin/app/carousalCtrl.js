app.controller('carousalCtrl', function ($scope,$window, $rootScope, $routeParams, $location, $http, Data,ShareData) {


    $scope.$on('$viewContentLoaded', function(event) {
$(document).ready(function (e) {
    $("#uploadForm").on('submit',(function(e) {
        e.preventDefault();
        $.ajax({
            url: "upload.php?fileName=img"+"-"+Date.now() +"." + $("#file").val().split('.').pop(),
            type: "POST",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            success: function(res)
            {
                if(res=="success")
                {
					//implement sevice of inserting image name into carousal db
                           // Data.get('upadteImgName').then(function (results) {
							// Data.toast(results);
						// });
                            alert(res);
                }
                else
                {       alert(res);
                }
            },
            error: function(res) 
            {
                alert(res);
            }           
       });
       }));
});

   });
   
   //image upload


});