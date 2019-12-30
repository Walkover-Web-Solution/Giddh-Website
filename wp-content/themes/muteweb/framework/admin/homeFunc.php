<?php
function home_custom_posts() {
// Set UI labels for Custom Post Type
  $labels = array(
    'name'                => _x( 'All Features', 'Post Type General Name', '' ),
    'singular_name'       => _x( 'All Features', 'Post Type Singular Name', '' ),
    'menu_name'           => __( 'All Features', '' ),
    'parent_item_colon'   => __( 'Parent Features', '' ),
    'all_items'           => __( 'All Features', '' ),
    'view_item'           => __( 'View Features', '' ),
    'add_new_item'        => __( 'Add New Features', '' ),
    'add_new'             => __( 'Add New', '' ),
    'edit_item'           => __( 'Edit Features', '' ),
    'update_item'         => __( 'Update Features', '' ),
    'search_items'        => __( 'Search Features', '' ),
    'not_found'           => __( 'Not Found', '' ),
    'not_found_in_trash'  => __( 'Not found in Trash', '' ),
  );
    
// Set other options for Custom Post Type
    
  $args = array(
    'label'               => __( 'feature_posts', '' ),
    'description'         => __( 'Features news and Features', '' ),
    'labels'              => $labels,
    // Features this CPT supports in Post Editor
    'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
    // You can associate this CPT with a taxonomy or custom taxonomy. 
    'taxonomies'          => array( 'genres' ),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 21,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => false,
    'publicly_queryable'  => false,
    'capability_type'     => 'page'
  );
  // Registering your Custom Post Type
  register_post_type( 'feature_posts', $args );
// Set UI labels for Custom Post Type
  $labels = array(
    'name'                => _x( 'Testimonial', 'Post Type General Name', '' ),
    'singular_name'       => _x( 'Testimonial', 'Post Type Singular Name', '' ),
    'menu_name'           => __( 'Testimonial', '' ),
    'parent_item_colon'   => __( 'Parent Testimonial', '' ),
    'all_items'           => __( 'All Testimonial', '' ),
    'view_item'           => __( 'View Testimonial', '' ),
    'add_new_item'        => __( 'Add New Testimonial', '' ),
    'add_new'             => __( 'Add New', '' ),
    'edit_item'           => __( 'Edit Testimonial', '' ),
    'update_item'         => __( 'Update Testimonial', '' ),
    'search_items'        => __( 'Search Testimonial', '' ),
    'not_found'           => __( 'Not Found', '' ),
    'not_found_in_trash'  => __( 'Not found in Trash', '' ),
  );
    
// Set other options for Custom Post Type
    
  $args = array(
    'label'               => __( 'testimonials', '' ),
    'description'         => __( 'Testimonials news and Testimonials', '' ),
    'labels'              => $labels,
    // Features this CPT supports in Post Editor
    'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
    // You can associate this CPT with a taxonomy or custom taxonomy. 
    'taxonomies'          => array( 'genres' ),
    /* A hierarchical CPT is like Pages and can have
    * Parent and child items. A non-hierarchical CPT
    * is like Posts.
    */ 
    'hierarchical'        => false,
    'public'              => false,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 22,
    'can_export'          => true,
    'has_archive'         => false,
    'exclude_from_search' => false,
    'publicly_queryable'  => false,
    'capability_type'     => 'page'
  );
    
  // Registering your Custom Post Type
  register_post_type( 'testimonials', $args );

  // Security section Home page
  // Set UI labels for Custom Post Type
  $labels = array(
    'name'                => _x( 'Security Section', 'Post Type General Name', '' ),
    'singular_name'       => _x( 'Security Section', 'Post Type Singular Name', '' ),
    'menu_name'           => __( 'Security Section', '' ),
    'parent_item_colon'   => __( 'Parent Security', '' ),
    'all_items'           => __( 'All Security', '' ),
    'view_item'           => __( 'View Security', '' ),
    'add_new_item'        => __( 'Add New Security', '' ),
    'add_new'             => __( 'Add New', '' ),
    'edit_item'           => __( 'Edit Security', '' ),
    'update_item'         => __( 'Update Security', '' ),
    'search_items'        => __( 'Search Security', '' ),
    'not_found'           => __( 'Not Found', '' ),
    'not_found_in_trash'  => __( 'Not found in Trash', '' ),
  );
  $args = array(
    'label'               => __( 'securityFeatures', '' ),
    'description'         => __( 'Security Features News', '' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'excerpt', 'author', 'thumbnail', 'revisions' ),
    'taxonomies'          => array( 'genres' ),
    'hierarchical'        => false,
    'public'              => false,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 23,
    'can_export'          => true,
    'has_archive'         => false,
    'exclude_from_search' => false,
    'publicly_queryable'  => false,
    'capability_type'     => 'page'
  );
  register_post_type( 'securityFeatures', $args );
}
add_action( 'init', 'home_custom_posts', 0 );
// shortcode for features grid design on feature inner page
function all_features_shortcode( $atts, $content = null ) {
  $args = array(
  'post_type'=> 'feature_posts',
  'orderby' => 'publish_date',
  'order' => 'ASC',
  'posts_per_page' => -1
  );              

$the_query = new WP_Query( $args );
$length = count($the_query->posts);
  $html='<section id="features_page"><div class="container"><div class="row">';
  for($i=0;$i<$length;$i++){
    $url = get_post_meta($the_query->posts[$i]->ID, 'link_page', TRUE);

    $img_url = get_the_post_thumbnail_url($the_query->posts[$i]->ID,'full');
    $html.='<div class="col"><div class="feature_box"><a class="d-flex flex-column justify-content-center" href="'.apply_filters( 'the_title', $url ).'">';
    $html.='<figure class="figure"><img class="figure-img" src="'.$img_url.'"></figure>';
    $html.='<div class="feature-content">';
    $html.='<h3>'.apply_filters( 'the_title', $the_query->posts[$i]->post_title ).'</h3>';
    $html.='<p>'.apply_filters( 'the_title', $the_query->posts[$i]->post_excerpt ).'</p>';
    $html.='</div>';
    $html.='</a></div></div>';
  }
  $html.='</div></div></section>';
  return $html;
}
add_shortcode( 'all-features', 'all_features_shortcode' );

// home page features shortcode
function features_shortcode( $atts, $content = null ) {
  $args = array(
  'post_type'=> 'feature_posts',
  'orderby' => 'publish_date',
  'order' => 'ASC',
  'posts_per_page' => 11
  );              

$the_query = new WP_Query( $args );
$loop_data='<div class="container-fluid" id="features_home"><div class="row"><div class="col"><div class="d-flex flex-wrap">';
// print_r(json_encode($the_query));
for($i=0;$i<count($the_query->posts);$i++){
  $sub_heading_class="modal-heading-sub";

  $posted_id=apply_filters('the_ID', $the_query->posts[$i]->ID );
   $data_key=get_post_meta( $the_query->posts[$i]->ID,'link_page',true );
 
  // echo "==========".$data_key['link_page'][0];
  // echo "++++++aaaaaaaaaaaaaa"; 
   // echo apply_filters('link_page', $data_key);    
    
  $popResoonse='<div class='.$sub_heading_class.'>'.apply_filters( 'the_title', $the_query->posts[$i]->post_excerpt ).'</div>'.'<div>'.apply_filters( 'the_title', $the_query->posts[$i]->post_content ).'</div>';
  $loop_data.='<div data-link="'.apply_filters( 'the_title', get_post_meta($the_query->posts[$i]->ID, "link_page", true)).'" data-heading="'.apply_filters( 'the_title', $the_query->posts[$i]->post_title ).'" data-body="'.$popResoonse.'"  class="featuredpopup __hBox align-items-center d-flex justify-content-center">'.apply_filters( 'the_title', $the_query->posts[$i]->post_title ).'</div>';
}    
$loop_data.='</div></div></div></div>';
  return $loop_data;

}
add_shortcode( 'features', 'features_shortcode' );


// Home page security features
function securityFeaturesFunc( $atts, $content = null ) {
  $html='';
  $args = array(
      'post_type'=> 'securityFeatures',
      'orderby' => 'publish_date',
      'order' => 'ASC',
      'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  $post_length = count($the_query->posts);
  for($i=0;$i<$post_length;$i++){
      $img_url = get_the_post_thumbnail_url($the_query->posts[$i]->ID,'full');
      $html.='<div class="col"><div class="card">';
      $html.='<img class="card-img-top" src="'.$img_url.'" alt="" />';
      $html.='<div class="card-body">';
      $html.='<h5 class="card-title">'.$the_query->posts[$i]->post_title.'</h5>';
      $html.='<p class="card-text">'.$the_query->posts[$i]->post_excerpt.'</p>';
      $html.='</div>';
      $html.='</div></div>';
  }
  return $html;
}

add_shortcode( 'security-features', 'securityFeaturesFunc' );
// home page testimonial section
function testimonial_shortcode( $atts, $content = null ) {
  $loop_data='';
  $args = array(
      'post_type'=> 'testimonials',
      'orderby' => 'post_modified',
      'order' => 'DESC',
      'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  $post_length = count($the_query->posts);
  $random_number = mt_rand(0, $post_length-1);
  $loop_data.='<section class="container">';
  $loop_data.='<div class="row"><div class="col-12 text-center mb-md-5  mb-3">';
  $loop_data.='<p class="lead">Giddh Users</p>';
  $loop_data.='</div></div>';
  $loop_data.='<div class="row"><div class="col-12">';
  $loop_data.='<div class="card  testimonial_block border-0">';
  $img_url = get_the_post_thumbnail_url($the_query->posts[$random_number]->ID,'full');
  $loop_data.='<img src="'.$img_url.'" alt="" />';
  $loop_data.='<div class="card-body">';
  $loop_data.='<p class="card-text">'.$the_query->posts[$random_number]->post_content.'</p>';
  $name = get_post_meta( $the_query->posts[$random_number]->ID, 'person_name', true );
  $loop_data.='<h3>'.$name.'</h3>';
  $designation = get_post_meta( $the_query->posts[0]->ID, 'designation', true );
  $loop_data.='<h4>'.$designation.'</h4>';
  //$loop_data.='<div class="themeBtn"><a href="javascript:void(0)" class="vc_btn3 vc_btn3-size-md btn btn-outline-primary">Read all stories</a></div>';
  $loop_data.='</div>'; // end card body
  $loop_data.='</div>'; // end card
  $loop_data.='</div></div></section>'; // end container
  return $loop_data;
}
add_shortcode( 'testimonial', 'testimonial_shortcode' );