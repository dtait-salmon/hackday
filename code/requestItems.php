<?php
/* get the list of pages from the database */
	header("content-type:application/json");

	include 'connect.php';
	$arr = array();
	$sql = 'SELECT url, jsonld FROM pages';

	mysql_select_db($dbname);

	$retval = mysql_query( $sql, $conn );

	if(! $retval )
	{
	  die('Could not get data: ' . mysql_error());
	}

	$i = 0;
	while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
	{
	  $url = "{$row['url']}";
	  $json = "{$row['jsonld']}";
	  $arr['page'.$i] = array("url" => $url, "jsonld" => $json);
	  $i++;
	}
	echo json_encode($arr);
?>
