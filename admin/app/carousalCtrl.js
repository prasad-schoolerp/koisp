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
			var a = "img"+"-"+Date.now() +"." + $("#file").val().split('.').pop();
										Data.post('insertImgName', {
        										"path":a,"isDeleted":0,"isActive":0

    }).then(function (results) {
        Data.toast(results);
        $scope.loadList();
    });
			
					
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
