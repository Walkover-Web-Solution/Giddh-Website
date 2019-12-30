<?php if($header_in_grid == 'Yes' ) { ?>
	<div class="container">		
<?php } else{ ?>
	<div class="container-fluid">
<?php } ?>		
	<div class="row">
		<div class="col-sm-12">
<nav class="js-mega-menu-basic navbar navbar-expand-lg">
<a href="<?php echo site_url(); ?>"  class="navbar-brand">
<?php 
$logo = get_template_directory_uri(). '/assets/images/logo.svg';
?>
  <img src="<?php echo $logo; ?>" alt='Giddh Logo' />
<!-- <object data="<?php echo $logo; ?>" type="image/svg+xml">
</object> -->
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
 <!--  <span class="navbar-toggler-icon"></span> -->
 <div class="humberger" onclick="myFunction(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
  <ul class="navbar-nav mx-auto" id="navBarBasic">
    <?php 

    if ( has_nav_menu( 'primary' ) ) : 
    $menuLocations = get_nav_menu_locations(); 
    // Get our nav locations (set in our theme, usually functions.php)
    // This returns an array of menu locations ([LOCATION_NAME] = MENU_ID);
    
    $menuID = $menuLocations['primary']; 

    // Get the *primary* menu ID
    $primaryNav = wp_get_nav_menu_items($menuID);

    foreach ( $primaryNav as $navItem ) {
      //  print_r($navItem->ID);
    	if($navItem->ID=="815"){

    		echo '<li 
      class="nav-item hs-has-mega-menu" 
      data-event="click"
      data-animation-in="fadeIn"
      data-animation-out="fadeOut"
      data-position="left">
      <a 
      aria-haspopup="true" 
      aria-expanded="false" 
      id="basicMegaMenu" href="javascript:void(0)" class="nav-link">'.apply_filters( 'the_title', $navItem->title ).'</a>

      <!-- Mega Menu -->
        <div class="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="basicMegaMenu">
          <div class="u-header__mega-menu-wrapper-v1">
            <ul class="row list-unstyled u-header__mega-menu-list">
              <li class="col-sm-12 col-lg u-header__mega-menu-col mb-3 mb-lg-0">
                <span class="u-header__sub-menu-title">Giddh product features</span>
                <ul class="list-unstyled">';
                $featuredNav = wp_get_nav_menu_items(4);
                foreach ( $featuredNav as $navfeaturedItem ) { 

                	echo '<li class="nav-item"><a class="nav-link" href="'.$navfeaturedItem->url.'" title="'.apply_filters( 'the_title', $navfeaturedItem->title ).'">'.apply_filters( 'the_title', $navfeaturedItem->title ).'</a></li>';
                }                                  
                echo '</ul>
                <!-- End Links -->
              </li>
            </ul>
            <!-- end menu sub items -->
          </div>
        </div>
      <!-- end mega menu -->
    </li>';
    	}else{
    	echo '<li class="nav-item"><a class="nav-link" href="'.$navItem->url.'" title="'.apply_filters( 'the_title', $navItem->title ).'">'.apply_filters( 'the_title', $navItem->title ).'</a></li>';		
    	}
      
    }
            // wp_nav_menu( array(
            //     'theme_location' => 'primary',
            //     'menu_class'     => 'primary-menu text-right',
            //  ) );
    ?>
    <?php endif; ?>
    
    </ul>
    <ul class="navbar-nav" id="lgMenus">
       <li class="nav-item">
        <div class="dropdown show dp-btn">
          <a class="btn round-btn dropdown-toggle" href="javascript:void(0)" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="<?php echo site_url(); ?>/wp-content/uploads/2019/11/earth.svg">
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">

    <?php 
    if ( class_exists( 'WPGlobus' ) ) {
        $flag = WPGlobus::Config()->flags_url . WPGlobus::Config()->flag[ WPGlobus::Config()->language ];
        echo '<span class="current-language">' . WPGlobus::Config()->en_language_name[ WPGlobus::Config()->language ]. '</span>';
        foreach( WPGlobus::Config()->enabled_languages as $lang ) {

          if ( $lang == WPGlobus::Config()->language ) {
            continue;
          }
          $flag = WPGlobus::Config()->flags_url . WPGlobus::Config()->flag[ $lang ];
          echo '<a class="dropdown-item" href="' . WPGlobus_Utils::localize_current_url( $lang ). '">';
          echo  WPGlobus::Config()->en_language_name[ $lang ];
          echo '</a>';

        }
    }
    ?>
          </div>
        </div>
      </li>
      <li class="nav-item"><a class="btn btn-primary" href="<?php echo site_url(); ?>/login/">Login</a></li>
	    <li class="nav-item ml-1"><a class="btn btn-outline-primary" href="<?php echo site_url();?>/signup/">Sign Up</a></li>
    </ul>
</div>
</nav>
		</div>
		
		
	</div>
</div>