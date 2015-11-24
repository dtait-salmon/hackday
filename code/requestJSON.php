<?php
/* Request JSON-LD */

include 'connect.php';

$url = $_POST["url"];
$sql = "SELECT jsonld FROM pages WHERE url = '". $url . "'";
mysql_select_db($dbname);
$retval = mysql_query($sql, $conn );

if(! $retval ) {
  die('Could not get data: ' . mysql_error());
}

while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
{
  echo "{$row['jsonld']}";
}
