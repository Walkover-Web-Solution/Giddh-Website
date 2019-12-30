<?php
if($_GET['utm_source']) {
	setcookie('utm_source', $_GET['utm_source'], time()+2592000, '/', 'giddh.com', 1);
}
if($_GET['utm_medium']) {
	setcookie('utm_medium', $_GET['utm_medium'], time()+2592000, '/', 'giddh.com', 1);
}
if($_GET['utm_campaign']) {
	setcookie('utm_campaign', $_GET['utm_campaign'], time()+2592000, '/', 'giddh.com', 1);
}
if($_GET['utm_term']) {
	setcookie('utm_term', $_GET['utm_term'], time()+2592000, '/', 'giddh.com', 1);
}
if($_GET['utm_content']) {
	setcookie('utm_content', $_GET['utm_content'], time()+2592000, '/', 'giddh.com', 1);
}

$addr = $_SERVER['REMOTE_ADDR'];
$a = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$addr));
$countrycode= $a['geoplugin_countryCode'];
$res = json_encode($a);
echo("<script>console.log(JSON.stringify(".$res."))</script>");
echo("<script>console.log('".$countrycode.$addr."')</script>");
if ($countrycode === 'AE') { 
	$str = $_SERVER['REQUEST_URI'];
  foreach( WPGlobus::Config()->enabled_languages as $lang ) {
		if ( $lang == WPGlobus::Config()->language ) {
			continue;
		}
		$flag = WPGlobus::Config()->flags_url . WPGlobus::Config()->flag[ $lang ];
		if (strstr($str, '/ae') === false) {
			echo("<script>window.location.href = '".WPGlobus_Utils::localize_current_url( $lang )."';</script>");
		}
	}
}
?>
<!DOCTYPE html>
<html <?php language_attributes( ); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="pingback" href="<?php bloginfo( 'pingback_url' );  ?>" />
<?php if (get_the_ID()=="11" || get_the_ID()=="986") { ?>
	<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() . '/assets/css/custom.css?q='.rand(); ?>">
	<?php 
} ?>

<?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/assets/css/intlTelInput.css';?>">

<?php require_once(Mute_root_path.'/framework/view/option-style.php'); ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri() . '/assets/js/html5.js'; ?>" type="text/javascript"></script>
<![endif]-->
</head>
<body <?php body_class(); ?>>
	
		<?php 
			/*Header Options */
			
			$header_in_grid = get_option('header_in_grid');
			$header_type = get_option('header_type');
			$header_logo = get_option('header_logo');
			$header_style = get_option('header_style');
			$enable_announce_msg = get_option('enable_announce_msg');
			$announce_msg = get_option('announce_msg'); 
		?>
		<?php
			if (!empty($header_bg_color) || !empty($header_bg_img) ){
				$headerBgClass = 'header_bg';	
			}
		?>
		<?php if ($enable_announce_msg == 'on' ){ ?>
		<div class="annocement-bar text-center">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<?php echo $announce_msg ?>
					</div>
				</div>
			</div>
		</div>
		
		<div class="search_form">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<form role="search" method="get" class="search-form" action="/">
							<input type="search" class="search-field" placeholder="Search …" value="" name="s">
							<a href="javascript:" class="close-search"><i class="fa fa-close"></i></a>
						</form>
					</div>
				</div>
			</div>
		</div>
		<?php } ?>
	<?php 
	$header_type_class = '';
	if ($header_type == 'Fixed' ){ 
		$header_type_class = 'header_fixed';
	} elseif ($header_type == 'Sticky' ){ 
		$header_type_class = 'header_sticky';
	} elseif ($header_type == 'Sticky_homepage' ){ 
		$header_type_class = 'header_sticky_index';
	} elseif ($header_type == 'Fixed_on_scroll' ){ 
		$header_type_class = 'header_fixed_onscroll';
	} ?>

	<?php 
		$responsive_header = '';
		if ( $header_style != 'style_4' ){
			$responsive_header = 'desktop-header';
		}
	?>

	<header class="fixed-top navbar-light <?php echo $headerBgClass; ?> <?php echo $responsive_header; ?> <?php echo $header_style; ?> <?php echo $header_type_class; ?> site-header ">
		<?php if ($header_style == 'style_1' ){
			require_once(Mute_root_path.'/framework/view/header/style_1.php');
		} elseif ($header_style == 'style_2' ){
			require_once(Mute_root_path.'/framework/view/header/style_2.php');
		} elseif ($header_style == 'style_3' ){
			require_once(Mute_root_path.'/framework/view/header/style_3.php');
		} elseif ($header_style == 'style_4' ){
			require_once(Mute_root_path.'/framework/view/header/style_4.php');
		} elseif ($header_style == 'style_5' ){
			require_once(Mute_root_path.'/framework/view/header/style_5.php');
		}?>
	</header>
	<main class="site-main">