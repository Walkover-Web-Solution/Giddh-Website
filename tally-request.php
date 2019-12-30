<?php
date_default_timezone_set('Asia/Kolkata');//or change to whatever timezone you want
		$log  = "Request  Come : FOR URL".$_SERVER['REQUEST_URI'].PHP_EOL.
				"-------------------------".PHP_EOL;
	//Save string to log, use FILE_APPEND to append.
	file_put_contents('./log_'.date("j.n.Y").'.log', $log, FILE_APPEND);
  if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $body = '';
    $fh   = @fopen('php://input', 'r');
    if ($fh)
    {
      while (!feof($fh))
      {
        $s = fread($fh, 1024);
        if (is_string($s))
        {
          $body .= $s;
        }
      }
      fclose($fh);
    }
  
   $urlx = $_SERVER['REQUEST_URI'];
   $rx = "(company/(.+)/import)Ui" ;
   preg_match($rx, $urlx, $data);
  

    $url = "http://giddh-prod.eu-west-1.elasticbeanstalk.com/company/".$data[1]."/import-master-data?isMaster=".$_GET['isMaster'];
    $ch = curl_init();
    curl_setopt_array($ch, array(
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_URL => $url,
        CURLOPT_POST => 1,
        CURLOPT_CUSTOMREQUEST=>'POST',
        CURLOPT_HTTPHEADER => array('Content-Type:text/plain','Auth-Key:'.$_SERVER['HTTP_AUTH_KEY']),
        CURLOPT_POSTFIELDS=>$body
    ));
    //$response = json_decode(curl_exec($ch) );
    $response = curl_exec($ch) ;
	if(curl_errno($ch)){
		echo 'Request Error:' . curl_error($ch);
		$log  = "Request  Error: FOR URL".$urlx.' Error details: '.curl_error($ch).PHP_EOL.
				"-------------------------".PHP_EOL;
		file_put_contents('./log_'.date("j.n.Y").'.log', $log, FILE_APPEND);
	} else {
			  //Something to write to txt log
		$log  = "Request  Success : FOR URL".$urlx.PHP_EOL.
				"-------------------------".PHP_EOL;
	//Save string to log, use FILE_APPEND to append.
	file_put_contents('./log_'.date("j.n.Y").'.log', $log, FILE_APPEND);

	}
    curl_close($ch);
    print_r($response);
  
  }  
?>
