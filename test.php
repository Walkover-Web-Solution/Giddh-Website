<?php 

function getDataFromAirtable($url){
  $ch = curl_init();  
  curl_setopt($ch,CURLOPT_URL,$url);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER,true); 
  $output=curl_exec($ch);
  curl_close($ch);
  return $output;
}
 
//echo getDataFromAirtable("https://api.airtable.com/v0/appHe7iYLh7pCr7kl/Table%201?api_key=key8GvzvRxyEb76av");
?> 
