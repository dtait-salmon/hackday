<?php
/* Submit form */
	include 'connect.php';

	$url = $_POST["url"];
	$jsonld = $_POST["jsonStr"];

	echo $url;
	echo $jsonld;

	mysql_select_db($dbname);

	$checkSQL = mysql_query("SELECT * FROM pages WHERE url = '". $url . "'");
	$newSQL = "INSERT INTO pages (url, jsonld) VALUES ('".$url."', '".$jsonld."')";
	$updateSQL = "UPDATE pages SET jsonld ='".$jsonld."' WHERE url = '".$url."'";
	$matchFound = mysql_num_rows($checkSQL) > 0 ? true : false;

	if($matchFound){
		if (mysql_query($updateSQL, $conn)) {
			echo " Record Updated";
		} else {
			echo "Error: " . $sql . "<br>" . mysql_error($conn);
		}
	} else {
		if (mysql_query($newSQL, $conn)) {
			echo " New record created successfully";
		} else {
			echo "Error: " . $sql . "<br>" . mysql_error($conn);
		}
	}
?>
