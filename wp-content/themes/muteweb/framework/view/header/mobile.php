<?php if($header_in_grid == 'Yes' ) { ?>
	<div class="container">		
<?php } else{ ?>
	<div class="container-fluid">
<?php } ?>		
	<?php if ($header_style == 'style_5' ){ ?>
		<div class="row text-center header-info">
			<div class="col">
				<?php if ( is_active_sidebar( 'header-right' ) ) : dynamic_sidebar( 'header-right' ); endif; ?>
			</div>
		</div>	
	<?php } ?>
	<div class="row align-items-center">
		<div class="logo_side">
			<a href="<?php echo site_url(); ?>"  class="logo">
				<img src="<?php echo $header_logo; ?>">
			</a>
		</div>
		<div class="menu_side text-right">
			<div class="hamburger">
			  <div class="bar1"></div>
			  <div class="bar2"></div>
			  <div class="bar3"></div>
			</div>
		</div>
	</div>
</div>
<?php if ( has_nav_menu( 'primary' ) ) : ?>
	<nav id="site-navigation" class=" main-navigation" role="navigation">
		<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'menu_class'     => 'primary-menu text-right',
			 ) );
		?>
	</nav><!-- .main-navigation -->
<?php endif; ?>