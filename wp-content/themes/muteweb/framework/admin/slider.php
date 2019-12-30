<?php 
function custom_post_type() {
    $labels = array(
        'name'                => _x( 'Slider', 'Post Type General Name', 'muteweb' ),
        'singular_name'       => _x( 'Slider', 'Post Type Singular Name', 'muteweb' ),
        'menu_name'           => __( 'Slider', 'muteweb' ),
        'parent_item_colon'   => __( 'Parent Slider', 'muteweb' ),
        'all_items'           => __( 'All Sliders', 'muteweb' ),
        'view_item'           => __( 'View Slider', 'muteweb' ),
        'add_new_item'        => __( 'Add New Slider', 'muteweb' ),
        'add_new'             => __( 'Add New', 'muteweb' ),
        'edit_item'           => __( 'Edit Slider', 'muteweb' ),
        'update_item'         => __( 'Update Slider', 'muteweb' ),
        'search_items'        => __( 'Search Slider', 'muteweb' ),
        'not_found'           => __( 'Not Found', 'muteweb' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'muteweb' ),
    );
     
    $args = array(
        'label'               => __( 'slider', 'twentythirteen' ),
        'description'         => __( 'Sliders', 'twentythirteen' ),
        'labels'              => $labels,
        // Features this CPT supports in Post Editor
        'supports'            => array( 'title' ),
        // You can associate this CPT with a taxonomy or custom taxonomy. 
        'taxonomies'          => array( 'genres' ),
        /* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */ 
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'page',
    );
     
    // Registering your Custom Post Type
    register_post_type( 'slider', $args );
 
}
 
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
add_action( 'init', 'custom_post_type', 0 );
//hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_topics_hierarchical_taxonomy', 0 );
 
//create a custom taxonomy name it topics for your posts
 
function create_topics_hierarchical_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
 
  $labels = array(
    'name' => _x( 'Topics', 'taxonomy general name' ),
    'singular_name' => _x( 'Topic', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Topics' ),
    'all_items' => __( 'All Topics' ),
    'parent_item' => __( 'Parent Topic' ),
    'parent_item_colon' => __( 'Parent Topic:' ),
    'edit_item' => __( 'Edit Topic' ), 
    'update_item' => __( 'Update Topic' ),
    'add_new_item' => __( 'Add New Topic' ),
    'new_item_name' => __( 'New Topic Name' ),
    'menu_name' => __( 'Topics' ),
  );    
 
// Now register the taxonomy
 
  register_taxonomy('topics',array('slider'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'topic' ),
  ));
}
function slider_shortcode($atts){
	$topicId =  $atts['topicid'];
	$topicPager = get_field("enable_pager", "topics_" . $topicId);
	$topicArrows = get_field("enable_arrows", "topics_" . $topicId);
	$args = array( 
		'post_type' => 'slider', 
		'posts_per_page' => 10,
		 'tax_query' => array(
            array(
                'taxonomy' => 'topics',
                'field' => 'term_id',
                'terms' => $topicId
            ),
        ) 
	);
	$loop = new WP_Query( $args ); ?>
	<div class="mute-slider-wrap <?php echo 'pager-'.$topicPager .' arrows-'.$topicArrows  ?>">
	<div class="mute-slider owl-carousel owl-theme">
	<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
		
			<?php 
				$title = get_the_title();
				$subHeading = get_field('sub-heading');
				$text = get_field('text');
				$button = get_field('button');
				$link = get_field('link');
				$linkTarget = get_field('link_open_in_new_tab');
				$image = get_field('image');
				$verticalPosition = get_field('vertical_position');
				$horizontalPosition = get_field('horizontal_position');
				$textPosition = get_field('text_position');
				$content_background_color = get_field('content_background_color'); 
				$contentBg = '';
				if( $content_background_color ) {
					$contentBg = 'style="background-color: '.$content_background_color.'"';
				}
			?>
			<div class="slider-inner ">
				<?php if( $image ) { ?>
				<div class="slider-img">
					<img src="<?php echo $image ?>" alt="<?php echo $title ?>">
				</div>
				<?php } ?>
				<div class="slider-content">
					<div class="container">
						<div class="slider-content-iner <?php echo 'text-'.$textPosition.' hor-'.$horizontalPosition.' ver-'.$verticalPosition ?>">
							<div class="slider-content-wrap" <?php echo $contentBg; ?> >
								<?php if( $title ) { ?>
									<h1><?php echo $title ?></h1>
								<?php } ?>
								<?php if( $subHeading ) { ?>
									<h3><?php echo $subHeading ?></h3>
								<?php } ?>
								<?php if( $text ) { ?>
									<div class="slider-text">
										<?php echo $text ?>
									</div>
								<?php } ?>
								<?php if( $button ) { ?>
									<div class="slider-button">
										<a href="<?php echo $link ?>" title="<?php echo $title ?>" <?php if( $linkTarget == 'Yes' ) { ?> target="_blank" <?php } ?> >
											<?php echo $button ?>
										</a>
									</div>
								<?php } ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		
	<?php endwhile; ?>
	</div>
	</div>
<?php }
add_shortcode( 'slider', 'slider_shortcode' );
?>