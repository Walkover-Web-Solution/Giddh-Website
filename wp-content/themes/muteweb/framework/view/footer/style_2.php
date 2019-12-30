<div class="top_footer" id="mob-app">
	<?php if($footer_in_grid == 'Yes' ) { ?>
			<div class="container">
		<?php } else{ ?>
			<div class="container-fluid">
		<?php } ?>	
		<div class="row">
			<div class="d-none d-md-block d-lg-block col-1"></div>
			<?php if ( is_active_sidebar( 'footer-col-1' ) ) { ?>
				<div class="col">
					<ul class="inner_logos preUl">
						<?php dynamic_sidebar( 'footer-col-1' ); ?>
					</ul>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-col-2' ) ) { ?>
				<div class="col">
					<ul class="preUl">
						<?php dynamic_sidebar( 'footer-col-2' ); ?>
					</ul>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-col-3' ) ) { ?>
				<div class="col">
				<ul class="preUl"><?php dynamic_sidebar( 'footer-col-3' ); ?></ul>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-col-4' ) ) { ?>
				<div class="col">
				<ul class="preUl"><?php dynamic_sidebar( 'footer-col-4' ); ?></ul>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-col-5' ) ) { ?>
				<div class="col">
				<ul class="preUl"><?php dynamic_sidebar( 'footer-col-5' ); ?></ul>
				</div>
			<?php } ?>
			<?php if ( is_active_sidebar( 'footer-newsletter' ) ) { ?>
				<div class="col">
					<?php dynamic_sidebar( 'footer-newsletter' ); ?>
					<!-- <?php if ( is_active_sidebar( 'social-icons' ) ) {  dynamic_sidebar( 'social-icons' ); } ?> -->
				</div>
			<?php } ?>
			<div class="d-none d-md-block d-lg-block col-1"></div>
		</div>
	</div>
</div>
<div class="btm_footer">
	<?php if($footer_in_grid == 'Yes' ) { ?>
			<div class="container">		
		<?php } else{ ?>
			<div class="container-fluid">
		<?php } ?>	
		<div class="row align-items-center">
			<div class="col">
				<?php if ( is_active_sidebar( 'footer-bottom' ) ) {  dynamic_sidebar( 'footer-bottom' ); } ?>
			</div>
			<div class="col">
				<?php if ( is_active_sidebar( 'social-icons' ) ) { ?>
				<ul class="d-flex justify-content-lg-end preUl">
					<?php dynamic_sidebar( 'social-icons' );  ?>
				</ul>
			<?php } ?>
			</div>
		</div>
	</div>
</div>
