<?php get_header(); ?>
<?php 
$currentTitle = get_the_title();
$currentID = get_the_ID();
?>
<div class="mute-single">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1 class="page-title"><?php echo $currentTitle; ?></h1>
				<div class="post_info">
					<div class="row">
						<div class="col-sm-6">
							<ul>
								<li><i class="fa fa-calendar"></i><?php echo get_the_date('M d, Y'); ?></li>
								<li><i class="fa fa-user-o"></i><?php the_author(); ?></li>
							</ul>
						</div>
						<div class="col-sm-6 text-right"></div>		
					</div>
				</div>	
				<div class="post_img">
					<img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
				</div>
			</div>
		</div>
		<div class="post_main">
			<div class="row">
				<div class="col-sm-8">
					<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); 
					the_content();  endwhile; endif; ?>
					<!-- <div class="mute-term">
						Category: 
						<ul class="term_list">
						<?php $category_detail=get_the_terms($currentID, "category");
						if (isset($category_detail)) {
							foreach($category_detail as $cd){
								echo '<li><a href="#">#'.$cd->name.'</a></li>' ;
							}
						}
						?>
						</ul>
					</div> -->
					<div class="mute-comment">
						
						<?php
						// If comments are open or we have at least one comment, load up the comment template.
						 if ( comments_open() || get_comments_number() ) :
						     comments_template();
						 endif;
						?>
					</div>
				</div>
				<div class="col-sm-4">
					<?php $terms = get_terms( 'category' );
						if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){ ?>
						<div class="fet_box">
							<h3 class="fet_lbl">
								Category
							</h3>
							<ul>
	    						<?php foreach ( $terms as $term ) { ?>
	        						<li>
	        							<a href="<?php echo get_term_link( $term ) ?>">
	        								<?php echo $term->name ?>
	        							</a>
	        						</li>
	    						<?php } ?>
    						</ul>
    					</div>
					<?php } ?>
					<?php 
					$terms = get_the_terms( $currentID , 'category' ); 
					$terms = array(); // temporary
					if (isset($terms)) {
						foreach( $terms as $term ) { 
								$relatecatID = $term->term_id; ?>
								<div class="fet_box">
								<h3 class="fet_lbl">
									Related Article
								</h3>
								<ul>
									<?php $recentpost = new WP_Query( array( 
										'post_type'=> 'post', 
										'posts_per_page' => 3,
										'tax_query' => array(
													array(
													'taxonomy' => 'category',
													'field' => 'term_id',
													'terms' => $relatecatID )
											) 
									) );
									while ( $recentpost->have_posts() ) : $recentpost->the_post();
										$postTitle = get_the_title();
									if($currentTitle != $postTitle){
										include(Mute_root_path.'/templates/loop-blog.php');
										}
									endwhile; wp_reset_query(); ?>
								</ul>
							</div>
								<?php break;
								unset($term);
						} 
					}?>
					<div class="fet_box">
						<h3 class="fet_lbl">
							Recent Article
						</h3>
						<ul>
							<?php $recentpost = new WP_Query( array( 'post_type'=> 'post', 'posts_per_page' => 3  ) );
							while ( $recentpost->have_posts() ) : $recentpost->the_post();
								$postTitle = get_the_title();
							 if($currentTitle != $postTitle){ 
							 	include(Mute_root_path.'/templates/loop-blog.php');
							  }
							endwhile; wp_reset_query(); ?>
						</ul>
					</div>
					<div class="fet_box">
						<h3 class="fet_lbl">
							Popular Article
						</h3>
						<ul>
							<?php   //wpb_get_post_views($currentID) ?>
							<?php $popularpost = new WP_Query( array( 'post_type'=> 'post', 'posts_per_page' => 5, 'meta_key' => 'wpb_post_views_count', 'orderby' => 'meta_value_num', 'order' => 'DESC'  ) );
							while ( $popularpost->have_posts() ) : $popularpost->the_post();
								$postTitle = get_the_title();
								if($currentTitle != $postTitle){ 
									include(Mute_root_path.'/templates/loop-blog.php');
								 }
							endwhile; wp_reset_query(); ?>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</div>	
</div>

<?php get_footer(); ?>