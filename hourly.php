<?php


$date = "2015-02-04 00:00:00";
$time = strtotime($date);


for($x = 0; $x < 62000; $x++) { 
    $time = $time + 60*60;
    echo strftime('%Y-%m-%d %H:%M:%S', $time) . "<br/>";
}
?>