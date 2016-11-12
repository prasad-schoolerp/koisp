<?php 
//load carousal data from the carousal table where isDeleted is false
$app->get('/getCarousalData', function() {
  $db = new DbHandler();
  $result = $db->getMultipleRecord("select * from  carousal where isDeleted = 0");
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

//Mark a carousal image as deleted in the database
$app->post('/delteCarousalImage', function() use ($app) {
 $response = array();
 $data = json_decode($app->request->getBody());
 $db = new DbHandler();
$result = $db->executeQuery("UPDATE carousal SET isDeleted=1 WHERE id=".$data->id); 
  if ($result != NULL) {
    $response["status"] = "success";
    $response["message"] = "Data deteted successfully";
    $response["data"]=$result;
    echoResponse(200, $response);
  } else {
    $response["status"] = "error";
    $response["message"] = "Failed to delete data";
    echoResponse(201, $response);
  } 
});
