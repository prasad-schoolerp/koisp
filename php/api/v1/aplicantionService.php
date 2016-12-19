<?php 
//load carousal data from the carousal table where isDeleted is false
$app->get('/getCarousalData', function() {
  $db = new DbHandler();
  $result = $db->getMultipleRecord("select * from  carousal where isDeleted = 0 order by priority");
  if ($result != NULL) {
    $response["status"] = "success";
    $response["message"] = "Data fetched successfully";
    $response["data"]=$result;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to fetch data";
    echoResponse(201, $response);
  } 
});

$app->post('/insertImgName', function() use ($app) {
  $db = new DbHandler();
  $data = json_decode($app->request->getBody());
  $column_names = array("path", "isDeleted", "isActive");

  $result = $db->insertIntoTable($data, $column_names, "carousal");
   if ($result != NULL) {
	$result1 = $db->getMultipleRecord("select * from  carousal where isDeleted = 0 order by priority");
    $response["status"] = "success";
    $response["message"] = "Data added and fetched successfully";
	if($result != NULL) 
	{   
		$response["data"]=$result1;
	}
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to update data";
    echoResponse(201, $response);
  } 
});

//Save table data
$app->post('/saveTblData', function() use ($app) {
  $db = new DbHandler();
  $data = json_decode($app->request->getBody());
  $column_names = array("priority", "isActive");
  $count = 0;
   foreach ($data->tblInfo as $item) {
   $result = $db->UpdateTable($item, $column_names, "carousal", " where id = ".$item->id);
   if ($result != NULL) {
	   
	   $count++;
   }
   }
  if($count == count($data->tblInfo))
  {
	$result = $db->getMultipleRecord("select * from  carousal where isDeleted = 0 order by priority");	
	$response["status"] = "success";
    $response["message"] = "Data saved successfully";  
	$response["data"]=$result;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to save some data".count($data)."  ".$count;
	echoResponse(201, $response);
  } 
});


//Mark a carousal image as deleted in the database
$app->post('/delteCarousalImage', function() use ($app) {
 $response = array();
 $data = json_decode($app->request->getBody());
 $db = new DbHandler();
$result = $db->executeQuery("UPDATE carousal SET isDeleted=1, priority = 100, isActive=0 WHERE id=".$data->id); 
  if ($result != NULL) {
	$result1 = $db->getMultipleRecord("select * from  carousal where isDeleted = 0 order by priority");
    $response["status"] = "success";
    $response["message"] = "Data deteted successfully";
    if($result != NULL) 
	{
		$response["data"]=$result1;
	}
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to delete data";
    echoResponse(201, $response);
  } 
});

/*
 * Get All Categories.
 */

//load carousal data from the carousal table where isDeleted is false
$app->get('/getCategories', function() {
  $db = new DbHandler();
  $result = $db->getMultipleRecord("select * from category");
  if ($result != NULL) {
    $response["status"] = "success";
    $response["message"] = "Data fetched successfully";
    $response["data"]=$result;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to fetch data";
    echoResponse(201, $response);
  } 
});

/*
 * Create Category.
 */

$app->post('/addCategory', function() use ($app) {
  $db = new DbHandler();
  $data = json_decode($app->request->getBody());
  $column_names = array("name", "description");

  $result = $db->insertIntoTable($data, $column_names, "category");
   if ($result != NULL) {
	$result = $db->getMultipleRecord("select * from category");
    $response["status"] = "success";
    $response["message"] = "Category added successfully";
    $response["data"]=$result;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to add cateogry";
    echoResponse(201, $response);
  } 
});


/*
 * Delete Category.
 */
 $app->post('/deleteCategory', function() use ($app) {
 $response = array();
 $data = json_decode($app->request->getBody());
 $db = new DbHandler();
$result = $db->executeQuery("Delete from category where category_id=".$data->category_id); 
  if ($result != NULL) {
	$result1 = $db->getMultipleRecord("select * from category");
    $response["status"] = "success";
    $response["message"] = "Data deteted successfully";
	$response["data"]=$result1;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to delete data";
    echoResponse(201, $response);
  } 
});

/*
 * Update Category.
 */
$app->post('/updateCategory', function() use ($app) {
 $response = array();
 $data = json_decode($app->request->getBody());
 $db = new DbHandler();
 $column_names = array("name", "description");
$result = $db->UpdateTable( $data,$column_names,"category","where category_id=".$data->category_id); 
  if ($result != NULL) {
	$result1 = $db->getMultipleRecord("select * from category");
    $response["status"] = "success";
    $response["message"] = "Data updated successfully";
	$response["data"]=$result1;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to update data";
    echoResponse(201, $response);
  } 
});


/*
 * Get All Plans.
 */

//load carousal data from the carousal table where isDeleted is false
$app->get('/getPlan', function() {
  $db = new DbHandler();
  $result = $db->getMultipleRecord("select * from plan");
  if ($result != NULL) {
    $response["status"] = "success";
    $response["message"] = "Data fetched successfully";
    $response["data"]=$result;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to fetch data";
    echoResponse(201, $response);
  } 
});

/*
 * Create Plan.
 */

$app->post('/addPlan', function() use ($app) {
  $db = new DbHandler();
  $data = json_decode($app->request->getBody());
  $column_names = array("category_id", "subcategory", "duration", "price");

  $result = $db->insertIntoTable($data, $column_names, "plan");
   if ($result != NULL) {
	$result = $db->getMultipleRecord("select * from plan");
    $response["status"] = "success";
    $response["message"] = "Plan added successfully";
    $response["data"]=$result;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to add subcateogry";
    echoResponse(201, $response);
  } 
});


/*
 * Delete Plan.
 */
 $app->post('/deletePlan', function() use ($app) {
 $response = array();
 $data = json_decode($app->request->getBody());
 $db = new DbHandler();
$result = $db->executeQuery("Delete from plan where plan_id=".$data->plan_id); 
  if ($result != NULL) {
	$result1 = $db->getMultipleRecord("select * from plan");
    $response["status"] = "success";
    $response["message"] = "Data deteted successfully";
	$response["data"]=$result1;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to delete data";
    echoResponse(201, $response);
  } 
});

/*
 * Update Plan.
 */
$app->post('/updatePlan', function() use ($app) {
 $response = array();
 $data = json_decode($app->request->getBody());
 $db = new DbHandler();
 $column_names = array("category_id", "subcategory", "duration", "price");
$result = $db->UpdateTable( $data,$column_names,"plan","where plan_id=".$data->plan_id); 
  if ($result != NULL) {
	$result1 = $db->getMultipleRecord("select * from plan");
    $response["status"] = "success";
    $response["message"] = "Record updated successfully";
	$response["data"]=$result1;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to update data";
    echoResponse(201, $response);
  } 
});