<?php /* Template Name: Test */ ?>
<?php get_header(); 
$addr = $_SERVER['REMOTE_ADDR'];
$a = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$addr));
$countrycode= $a['geoplugin_countryCode'];
print_r($countrycode);
if ($countrycode=='IN') {
  //
} else {
  $str = $_SERVER['REQUEST_URI'];
  print_r(strpos($str, '/ae'));
  if (strpos($str, '/ae') == false) {
   $url = $_SERVER['HTTP_HOST'].'/ae'.$_SERVER['REQUEST_URI'];
   header( 'Location: '.$url );
  }
}

?>