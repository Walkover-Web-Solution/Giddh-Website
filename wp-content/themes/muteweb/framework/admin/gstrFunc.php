<?php
function gstr_custom_posts() {
  // Set UI labels for Custom Post Type for GSTR Features page
  $labels = array(
    'name'                => _x( 'GSTR Features', 'Post Type General Name', '' ),
    'singular_name'       => _x( 'GSTR Features', 'Post Type Singular Name', '' ),
    'menu_name'           => __( 'GSTR Features', '' ),
    'parent_item_colon'   => __( 'Parent GSTR Features', '' ),
    'all_items'           => __( 'All GSTR Features', '' ),
    'view_item'           => __( 'View GSTR Features', '' ),
    'add_new_item'        => __( 'Add New GSTR Features', '' ),
    'add_new'             => __( 'Add New', '' ),
    'edit_item'           => __( 'Edit GSTR Features', '' ),
    'update_item'         => __( 'Update GSTR Features', '' ),
    'search_items'        => __( 'Search GSTR Features', '' ),
    'not_found'           => __( 'Not Found', '' ),
    'not_found_in_trash'  => __( 'Not found in Trash', '' ),
  );
  $args = array(
    'label'               => __( 'gstrFeatures', '' ),
    'description'         => __( 'GSTR Features News', '' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'excerpt', 'author', 'thumbnail', 'revisions' ),
    'taxonomies'          => array( 'genres' ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 24,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => false,
    'capability_type'     => 'page',
  );
  register_post_type( 'gstrFeatures', $args );
}
add_action( 'init', 'gstr_custom_posts', 0 );
function gstrFeaturesFunc( $atts, $content = null ) {
  $loop_data='';
  $args = array(
      'post_type'=> 'gstrFeatures',
      'orderby' => 'publish_date',
      'order' => 'ASC',
      'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  // echo "<pre>";
  // print_r(json_encode($the_query->posts[0]));
  // echo "</pre>";
  $post_length = count($the_query->posts);
  for($i=0;$i<$post_length;$i++){
      $img_url = get_the_post_thumbnail_url($the_query->posts[$i]->ID,'full');
      $loop_data.='<div class="col"><div class="thumbnail feature_thumbnail">';
      $loop_data.='<img src="'.$img_url.'" alt="" />';
      $loop_data.='<div class="caption">';
      $loop_data.='<h3>'.apply_filters( 'the_title', $the_query->posts[$i]->post_title ).'</h3>';
      $loop_data.='<p>'.apply_filters( 'the_title', $the_query->posts[$i]->post_excerpt ).'</p>';
      //$loop_data.='<h3>'.$the_query->posts[$i]->post_title.'</h3>';
      //$loop_data.='<p>'.$the_query->posts[$i]->post_excerpt.'</p>';
      $loop_data.='</div>';
      $loop_data.='</div></div>';
  }
  return $loop_data;
}

add_shortcode( 'gstr-features', 'gstrFeaturesFunc' );

?>