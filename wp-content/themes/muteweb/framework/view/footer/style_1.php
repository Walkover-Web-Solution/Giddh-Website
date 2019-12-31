<div class="top_footer" id="mob-app">
	<?php if($footer_in_grid == 'Yes' ) { ?>
			<div class="container">
		<?php } else{ ?>
			<div class="container-fluid">
		<?php } ?>	
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<div class="d-flex">
					<div class="flex-grow-0">
						
						<?php if ( is_active_sidebar( 'footer-newsletter' ) ) { ?>
							<div class="">
								<p class="mb-2">Desktop Apps</p>
								<ul class="inner_logos preUl">
									<?php dynamic_sidebar( 'footer-newsletter' ); ?>
								</ul>
							</div>
						<?php } ?> 

						<?php if ( is_active_sidebar( 'footer-col-2' ) ) { ?>
							<div class="">
								<ul class="preUl">
									<?php dynamic_sidebar( 'footer-col-2' ); ?>
								</ul>
							</div>
						<?php } ?>

						<?php if ( is_active_sidebar( 'footer-col-4' ) ) { ?>
							<div class="mt-5">
                            <div class="footer-dpn mb-3">
						      <div class="btn-group dropup">
						        <button type="button" class="btn btn-down dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						        	<?php 
								    if ( class_exists( 'WPGlobus' ) ) { ?>
						          <img src="<?php echo site_url(); ?>/wp-content/uploads/2019/11/earth.svg"> <?php echo WPGlobus::Config()->en_language_name[ WPGlobus::Config()->language ];         }?>

						        </button>
						        <div class="dropdown-menu">
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
						    </div>
							<ul class="preUl"><?php dynamic_sidebar( 'footer-col-4' ); ?></ul>
							</div>
						<?php } ?>
					</div>

					<!-- section 2 -->
					<div class="flex-grow-1">
						<?php if ( is_active_sidebar( 'footer-col-1' ) ) { ?>
							<div class="">
								<p class="mb-2">Mobile Apps</p>
								<ul class="inner_logos preUl">
									<?php dynamic_sidebar( 'footer-col-1' ); ?>
								</ul>
							</div>
						<?php } ?>
						<?php if ( is_active_sidebar( 'footer-col-3' ) ) { ?>
							<div class="">
								<ul class="preUl"><?php dynamic_sidebar( 'footer-col-3' ); ?></ul>
							</div>
						<?php } ?>
					</div>
				</div>

				<div class="d-flex mt-4">
				<?php if ( is_active_sidebar( 'footer-bottom' ) ) {  dynamic_sidebar( 'footer-bottom' ); } ?>
				</div>
			</div>
			<!-- end all content and links -->
			<div class="col-sm-12 col-md-6 contact-form-box">
				<h4>Contact Us</h4>
				<p class="mb-4">For complete accounting solution for your business</p>
				<!-- <?php // echo do_shortcode('[contact-form-7 id="281" title="contact form"]'); ?> -->
				<div class="footer-form" id="footer-contact">
					<script src='https://giddh.freshsales.io/web_forms/107a322374f7547d5957d9b38c19c33c9e212d45612a1c060d5b140bc59a8d9c/form.js' crossorigin='anonymous' id='fs_107a322374f7547d5957d9b38c19c33c9e212d45612a1c060d5b140bc59a8d9c'></script>
				</div>
			</div>

			
			
			
			
			
			<!-- <?php if ( is_active_sidebar( 'footer-col-5' ) ) { ?>
				<div class="col">
				<ul class="preUl"><?php dynamic_sidebar( 'footer-col-5' ); ?></ul>
				</div>
			<?php } ?>
			-->
		</div>
	</div>
</div>

<style type="text/css">
	.contact-form-box .fserv-container {
	    background: none !important;
	    box-shadow: none !important;
	}
	.contact-form-box input {
	    width: 100%;
	    padding: 10px 22px;
	    border: 1px solid #D9D9D9;
	    border-radius: 5px;
	    font-size: 16px;
	    min-height: 46px;
	}
	.contact-form-box textarea {
	    width: 100%;
	    padding: 10px 22px;
	    min-height: 100px;
	    border: 1px solid #D9D9D9;
	    border-radius: 5px;
	    font-size: 16px;
	}
	.contact-form-box .fserv-button-submit {
	    max-width: 185px;
	    border: 1px solid #1A237E;
	    border-radius: 25px;
	    margin-top: 15px;
	    font-size: 18px !important;
	    padding: 0px 36px;
	    font-family: 'Opel Sans';
	    text-transform: capitalize;
	    background: transparent;
	    height: 50px;
	    line-height: 49px;
	    color: #1A237E !important;
	    margin: 0px;
	}
	.contact-form-box .fserv-button-submit:hover {
		background: #1A237E !important;
	}
	.powered-by {
	    display: none !important;
	}
	.fserv-field+div:not(.fserv-field) {
	    border-top: 0px solid #e5e5e5;
	    margin-top: 0;
	    padding: 20px 0 0;
	    text-align: left;
	}
	.contact-form-box .fserv-field {
	    margin-left: 0px !important;
	    padding: 0px;
	    margin-right: 0px !important;
	}
	.fserv-container {
	    margin: 0px;
	}
	.fserv-container form {
    	padding-top: 0px;
	}
	.fserv-container {
	    padding-top: 0px;
	}
</style>

<!-- <?php if ( is_active_sidebar( 'social-icons' ) ) { ?>
	<?php dynamic_sidebar( 'social-icons' );  ?>
<?php } ?> -->