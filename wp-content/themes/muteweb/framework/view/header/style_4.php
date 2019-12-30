<?php if($header_in_grid == 'Yes' ) { ?>
	<div class="container">		
<?php } else{ ?>
	<div class="container-fluid">
<?php } ?>		
	<div class="row align-items-center">
		<div class="col-sm-6 logo_side">
			<a href="<?php echo site_url(); ?>"  class="logo">
				<img src="<?php echo $header_logo; ?>">
			</a>
		</div>
		<div class="col-sm-6 text-right menu_side full_width_menu">
			<span class="menu_toggle">&#9776;</span>
			<div id="openNav" class="overlay">
				<div class="container">
		  			<a href="javascript:void(0)" class="menu_toggle_close">&times;</a>
					<div id="site-header-menu" class="site-header-menu text-left">
						<?php if ( has_nav_menu( 'primary' ) ) : ?>
							<nav id="site-navigation" class=" main-navigation" role="navigation">
								<?php
									wp_nav_menu( array(
										'theme_location' => 'primary',
										'menu_class'     => 'primary-menu',
									 ) );
								?>
							</nav><!-- .main-navigation -->
						<?php endif; ?>
					</div><!-- .site-header-menu -->
				</div>
			</div>
		</div>
	</div>
</div>