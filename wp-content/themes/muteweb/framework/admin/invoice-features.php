<?php 
function invoice_custom_post_type() {
  $labels = array(
    'name'                => _x( 'Invoice Features Section', 'Post Type General Name', '' ),
    'singular_name'       => _x( 'Invoice Features Section', 'Post Type Singular Name', '' ),
    'menu_name'           => __( 'Invoice Features Section', '' ),
    'parent_item_colon'   => __( 'Parent Invoice Features', '' ),
    'all_items'           => __( 'All Invoice Features', '' ),
    'view_item'           => __( 'View Invoice Features', '' ),
    'add_new_item'        => __( 'Add New Invoice Features', '' ),
    'add_new'             => __( 'Add New', '' ),
    'edit_item'           => __( 'Edit Invoice Features', '' ),
    'update_item'         => __( 'Update Invoice Features', '' ),
    'search_items'        => __( 'Search Invoice Features', '' ),
    'not_found'           => __( 'Not Found', '' ),
    'not_found_in_trash'  => __( 'Not found in Trash', '' ),
  );
  $args = array(
    'label'               => __( 'invoiceFeatures', '' ),
    'description'         => __( 'Invoice Features News', '' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'excerpt', 'author', 'thumbnail', 'revisions','custom_fields' ),
    'taxonomies'          => array( 'genres' ),
    'hierarchical'        => false,
    'public'              => false,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 24,
    'can_export'          => true,
    'has_archive'         => false,
    'exclude_from_search' => false,
    'publicly_queryable'  => false,
    'capability_type'     => 'page',
  );
  register_post_type( 'invoiceFeatures', $args );
}
 
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
add_action( 'init', 'invoice_custom_post_type', 0 );
 
function invoice_feature_shortcode_func($atts, $content = null){
  $html='';
  $args = array(
      'post_type'=> 'invoiceFeatures',
      'orderby' => 'publish_date',
      'order' => 'ASC',
      'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  $post_length = count($the_query->posts);
  for($i=0;$i<$post_length;$i++){
      $img_url = get_the_post_thumbnail_url($the_query->posts[$i]->ID,'full');
      $html.='<div class="row __featuresContentRow">';
      $html.='<div class="col-sm-12 col-md-6 '.$class.'">';
      $html.='<figure class="figure">';
      $html.='<img class="figure-img img-fluid" src="'.$img_url.'" alt="" />';
      $html.='</figure>';
      $html.='</div>';
      $html.='<div class="col-sm-12 col-md-6">';
      $html.='<div class="__featuresContentWrap">';
      $html.='<h3 class="__featuresContentWrap__title">'.$the_query->posts[$i]->post_title.'</h3>';
      $html.='<p class="__featuresContentWrap__text">'.$the_query->posts[$i]->post_excerpt.'</p>';
      $html.='</div>';
      $html.='</div>';
      $html.='</div>';

  }
  return $html;
}
add_shortcode( 'invoice-features', 'invoice_feature_shortcode_func' );

/*******************************************/

function equally_important_post_type() {
  $labels = array(
    'name'                => _x( 'Invoice Equally Section', 'Post Type General Name' ),
    'singular_name'       => _x( 'Invoice Equally Section', 'Post Type Singular Name'),
    'menu_name'           => __( 'Invoice Equally Section'),
    'parent_item_colon'   => __( 'Parent Invoice Equally Section'),
    'all_items'           => __( 'All Invoice Equally Section'),
    'view_item'           => __( 'View Invoice Equally Section'),
    'add_new_item'        => __( 'Add New Invoice Equally Section'),
    'add_new'             => __( 'Add New', 'twentythirteen' ),
    'edit_item'           => __( 'Edit Invoice Equally Section'),
    'update_item'         => __( 'Update Invoice Equally Section'),
    'search_items'        => __( 'Search Invoice Equally Section'),
    'not_found'           => __( 'Not Found'),
    'not_found_in_trash'  => __( 'Not found in Trash'),
  );
  $args = array(
    'label'               => __( 'Invoice Equally Section'),
    'description'         => __( 'Invoice Equally Section news and reviews'),
    'labels'              => $labels,
    'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail',),
    'taxonomies'          => array( 'genres' ),
    'hierarchical'        => false,
    'public'              => false,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => 24,
    'can_export'          => true,
    'has_archive'         => false,
    'exclude_from_search' => false,
    'publicly_queryable'  => false,
    'capability_type'     => 'page',
  );
  register_post_type( 'qually_section', $args );

}
add_action( 'init', 'equally_important_post_type', 0 );

function equally_important_shortcode_func($atts, $content = null){
$html='';
$args = array(
    'post_type'=> 'qually_section',
    'orderby' => 'publish_date',
    'order' => 'ASC',
    'posts_per_page' => -1
);
$the_query = new WP_Query( $args );
$post_length = count($the_query->posts);
$html.='<div class="row m-auto w-75 extraSmallFeatureParent">';
for($i=0;$i<$post_length;$i++){
  $img_url = get_the_post_thumbnail_url($the_query->posts[$i]->ID,'full');
  $html.='<div class="col">';
  $html.='<figure class="figure">';
  $html.='<img class="figure-img img-fluid" src="'.$img_url.'" alt="" />';
  $html.='<figcaption class="figure-caption">'.$the_query->posts[$i]->post_title.'</figcaption>';
  $html.='</figure>';
  $html.='</div>';
}
$html.='</div>';
return $html;
}
add_shortcode( 'equally_important_shortcode', 'equally_important_shortcode_func' );
add_filter('get_sample_permalink_html', 'my_hide_permalinksnvoice', 10, 5);

function my_hide_permalinksnvoice($return, $post_id, $new_title, $new_slug, $post)
{
    if($post->post_type == 'invoiceFeatures') {
        return '';
    }
    return $return;
}
add_filter('get_sample_permalink_html', 'my_hide_permalinksqually_section', 10, 5);

function my_hide_permalinksqually_section($return, $post_id, $new_title, $new_slug, $post)
{
    if($post->post_type == 'qually_section') {
        return '';
    }
    return $return;
}




?>