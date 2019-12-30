<div class="logo-wrap">
	<?php if($header_in_grid == 'Yes' ) { ?>
		<div class="container">		
	<?php } else{ ?>
		<div class="container-fluid">
	<?php } ?>		
		<div class="row align-items-center">
			<div class="col-sm-4">
				<a href="<?php echo site_url(); ?>"  class="logo">
					<img src="<?php echo $header_logo; ?>">
				</a>
			</div>
			<div class="col-sm-8 header-info text-right">
				<?php if ( is_active_sidebar( 'header-right' ) ) : dynamic_sidebar( 'header-right' ); endif; ?>
			</div>
		</div>
	</div>	
</div>
<div class="primary-menu-wrap">
	<?php if($header_in_grid == 'Yes' ) { ?>
		<div class="container">		
	<?php } else{ ?>
		<div class="container-fluid">
	<?php } ?>	
		<div class="row">	
			<div class="col-sm-12">
				<div id="site-header-menu" class="site-header-menu text-left">
					<?php if ( has_nav_menu( 'primary' ) ) : ?>
						<nav id="site-navigation" class=" main-navigation text-center" role="navigation">
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