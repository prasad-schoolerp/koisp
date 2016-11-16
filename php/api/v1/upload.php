<?php
//print_r($_FILES);
if(is_array($_FILES)) {
	if(is_uploaded_file($_FILES['profile-file']['tmp_name'])) 
	{
		$sourcePath = $_FILES['profile-file']['tmp_name'];
		$targetPath = "../carousalImages/".$_GET['fileName'];
		if (!file_exists('../carousalImages')) {
			    mkdir('../carousalImages', 0777, true);
			}
		if(move_uploaded_file($sourcePath,$targetPath)) {

			echo "success";

		}
		else
		{
			echo "failed";
		}
	}
	else 
	{
		echo "Failed - Image size exceeds";
	}
}
else
{
	echo "failed - no files";
}
?>