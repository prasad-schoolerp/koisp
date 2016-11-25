app.controller('plansCtrl', function ($window,$scope, $rootScope, $routeParams, $location, $http, Data,ShareData) {

$scope.$on('$viewContentLoaded', function(event) {
//---model init
$scope.addCategory = "Add";
$scope.updateCategory = "Update";	
$scope.categorybutton = $scope.addCategory;
$scope.categoryName = "";
$scope.categoryDescription = "";	
 //---Popup open functionality
 $(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

//--Load initial table data
$scope.loadData();

});

$scope.clearCategory = function(){
	$scope.categoryDescription = "";
	$scope.categoryName = "";
	$scope.categorybutton = $scope.addCategory;
}
$scope.editCategory = function(id,index){
	$scope.categoryDescription = $scope.categoryData[index].description;
	$scope.categoryName = $scope.categoryData[index].name;
	$scope.updateCategoryId = id;
	$scope.categorybutton = $scope.updateCategory;
}
$scope.saveUpdateCategory = function(){
if($scope.categoryName!= "" && $scope.categoryDescription != "")
{
	if($scope.categorybutton == $scope.addCategory)
	{
	 Data.post('addCategory', {
		"name":$scope.categoryName,
		"description":$scope.categoryDescription
}).then(function (results) {
        Data.toast(results);
		$scope.categoryData = results.data;
    });
	}
	else if($scope.categorybutton == $scope.updateCategory)
	{
		Data.post('updateCategory', {
		"id":$scope.updateCategoryId,
		"name":$scope.categoryName,
		"description":$scope.categoryDescription
}).then(function (results) {
        Data.toast(results);
		$scope.categoryData = results.data;
    });
	}
}
else
{
	alert("Category name and description are mandatory to fill!");
}
}

$scope.deleteCategory = function(id,index){
 var temp= $window.confirm("You really want to delete "+$scope.categoryData[index].name+ " category?");
    if(temp==true)
    {
	 Data.post('delteCategory', {
		"id":id
	}).then(function (results) {
        Data.toast(results);
		$scope.categoryData = results.data;
    });
	}
}
	
$scope.loadData = function(){
    Data.get('getCategories').then(function (results) {
            Data.toast(results);
            $scope.categoryData = results.data;
			console.log($scope.tblData)
			});		
			
	 // Data.get('getPlans').then(function (results) {
            // Data.toast(results);
            // $scope.planData = results.data;
			// console.log($scope.tblData)
			// });
	}

$rootScope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }
});





