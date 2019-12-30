<?php get_header(); ?>
<?php $category = get_queried_object();
$categoryID = $category->term_id; 
$categoryTitle = $category->name; 
?>
<div class="mute-single">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1 class="page-title"><?php echo $categoryTitle ?></h1>

			</div>
		</div>
		<div class="post_main">
			<div class="row">
				<div class="col-sm-8">
					<div>
					<ul class="post-list">
						<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
							<li>
								<div class="post-img">
									<?php if ( has_post_thumbnail() ){
										$thumbUrl = get_the_post_thumbnail_url();
									} else{
										$thumbUrl = get_stylesheet_directory_uri().'/assets/images/no-thumb.png';
									} ?>
									<a href="<?php the_permalink() ?>"><img src="<?php echo $thumbUrl; ?>" alt="<?php the_title(); ?>"></a>
								</div>
								<div class="post-info">
									<h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3>
									<div class="post-excerpt">
										<?php  $content = get_the_content();
										$content = apply_filters('the_content', $content);
									    $trimmed_content = wp_trim_words( $content, 30, NULL );
									    echo $trimmed_content; ?>
									</div>
								</div>
							</li>
						<?php  endwhile; 
						
						endif;   ?>
						</ul>
					
						<?php // Previous/next page navigation.
						the_posts_pagination( array(
							'prev_text'          => __( 'Previous page', 'twentysixteen' ),
							'next_text'          => __( 'Next page', 'twentysixteen' ),
							'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>',
						) ); wp_reset_query(); ?>
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
	    						<?php foreach ( $terms as $term ) {
	    						 $termID = $term->term_id;
	    						 if($categoryID == $termID){
	    						 	$activeClass = 'active';
	    						 } else {
	    						 	$activeClass = '';
	    						 }
	    						 ?>
	        						<li class="<?php echo $activeClass; ?>">
	        							<a href="<?php echo get_term_link( $term ) ?>">
	        								<?php echo $term->name ?>
	        							</a>
	        						</li>
	    						<?php } ?>
    						</ul>
    					</div>
					<?php } ?>
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