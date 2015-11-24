<?php
/* adds the sitemap.xml urls to database */

if (file_exists('../sitemap.xml')) {
        $sitemap = new DOMDocument();
        $sitemap->load("../sitemap.xml");
		$i = $sitemap->documentElement;

		foreach ($i->childNodes AS $item) {
		  $newItem = $item->firstChild->nodeValue;
      importURL($newItem);
		}
} else {
    exit('Failed to open test.xml.');
}

function importURL($newItem){
  include 'connect.php';

  mysql_select_db($dbname);

  $checkSQL = mysql_query("SELECT * FROM pages WHERE url = '". $newItem . "'");
  $sumbitSQL = "INSERT INTO pages (url, jsonld) VALUES ('".$newItem."', '')";

  $matchFound = mysql_num_rows($checkSQL) > 0 ? true : false;
  if($matchFound){
     echo 'this item already exists <br />';
  } else {
    if (mysql_query($sumbitSQL, $conn)) {
      echo $newItem . 'New record created successfully';
    } else {
      echo mysql_error($conn) . ' when trying to add ' . $newItem;
    }
  }
}
