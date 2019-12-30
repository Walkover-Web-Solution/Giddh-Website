<?php if($header_in_grid == 'Yes' ) { ?>
	<div class="container">		
<?php } else{ ?>
	<div class="container-fluid">
<?php } ?>		
	<div class="row align-items-center">
		<div class="col-sm-4">
			<div id="site-header-menu" class="site-header-menu">
				<?php if ( has_nav_menu( 'left' ) ) : ?>
					<nav id="site-navigation" class=" main-navigation" role="navigation">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'left',
								'menu_class'     => 'primary-menu text-center',
							 ) );
						?>
					</nav><!-- .main-navigation -->
				<?php endif; ?>
			</div><!-- .site-header-menu -->
		</div>
		<div class="col-sm-4">
			<a href="<?php echo site_url(); ?>" class="logo">
				<img src="<?php echo $header_logo; ?>">
			</a>
		</div>
		<div class="col-sm-4">
			<div id="site-header-menu" class="site-header-menu">
				<?php if ( has_nav_menu( 'right' ) ) : ?>
					<nav id="site-navigation-1" class=" main-navigation" role="navigation">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'right',
								'menu_class'     => 'primary-menu text-center',
							 ) );
						?>
					</nav><!-- .main-navigation -->
				<?php endif; ?>
			</div><!-- .site-header-menu -->
		</div>
	</div>
</div>