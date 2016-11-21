app.controller('carousalCtrl', function ($scope,$window, $rootScope, $routeParams, $location, $http, Data,ShareData) {

	$scope.max = 3;
    $scope.$on('$viewContentLoaded', function(event) {
	$scope.tblData = {};
	$scope.loadData();
	
	$(document).ready(function (e) {
		$("#uploadForm").on('submit',(function(e) {
		$(".se-pre-con").show();
		$scope.path = "img"+"-"+Date.now() +"." + $("#file").val().split('.').pop();
        e.preventDefault();
        $.ajax({
            url: "upload.php?fileName="+$scope.path,
            type: "POST",
            data:  new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            success: function(res)
            {
                if(res=="success")
                {
			Data.post('insertImgName', {"path":$scope.path,"isDeleted":0,"isActive":0}).then(function (results) {
				Data.toast(results);
				$scope.tblData = results.data;
			});
			
                           // alert(res);
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
   
$scope.loadData = function(){
    Data.get('getCarousalData').then(function (results) {
            Data.toast(results);
            $scope.tblData = results.data;
			console.log($scope.tblData)
			});
			
	}
$scope.activeChanged = function(id,index){
	var indexToRemove = index;
	var numberToRemove = 1;
	if($('#'+id).val() == 0)
	{
		$scope.tblData[index].priority = 100;
		var temp = $scope.tblData[index];
		$scope.tblData.splice(indexToRemove, numberToRemove);
		$scope.tblData.push(temp);
	}
	else
	{
		$scope.tblData[index].priority = 1;
		var temp = $scope.tblData[index];
		$scope.tblData.splice(indexToRemove, numberToRemove);
		$scope.tblData.unshift(temp);
	}
	console.log($scope.tblData)
}
$scope.moveUp = function(index){
	if(index!= 0) 
	{
	$scope.temp = $scope.tblData[index];
	$scope.tblData[index] = $scope.tblData[index-1];
	// if(index>3)
	// {
		// $scope.temp.priority = 100
	// }
	// else
	// {
		// $scope.temp.priority = index
	// }
	$scope.tblData[index-1] = $scope.temp;
	}
		console.log($scope.tblData)
}

$scope.moveDown = function(index)
{
	if((index+1) != $scope.tblData.length) 
	{
	$scope.temp = $scope.tblData[index];
	$scope.tblData[index] = $scope.tblData[index+1];
	// if(index>3)
	// {
		// $scope.temp.priority = 100
	// }
	// else
	// {
		// $scope.temp.priority = index
	// }
	$scope.tblData[index+1] = $scope.temp;
	}
	console.log($scope.tblData)
}

$scope.delete = function(id,index)
{
	 var temp= $window.confirm("You really want to delete "+$scope.tblData[index].path+ " image?");
    if(temp==true)
    {
      Data.post('delteCarousalImage', {
        'id': id
    }).then(function (results) {
        Data.toast(results);
		$scope.tblData = results.data;
    });
	}
}

$scope.saveTableData = function(){
	var count = 0;
	for(var index=0;index<$scope.tblData.length;index++)
	{
		if(index < $scope.max && $scope.tblData[index].isActive == "1"){
			$scope.tblData[index].priority = index+1;
		}
		else
		{
			$scope.tblData[index].priority = 100;
		}
		if($scope.tblData[index].isActive == "1")
		{
			count++;
		}
	}
	if(count > $scope.max)
	{
		alert("Maximum "+$scope.max+" images can be active for carousal!")
		return;
	}
	
	Data.post('saveTblData', {"tblInfo":$scope.tblData}).then(function (results) {
        Data.toast(results);
		$scope.tblData = results.data;
    });
}
});
