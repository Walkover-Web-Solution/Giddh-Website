<?php 
function initInventoryFunc() {
  $labels = array(
    'name'                => _x( 'Inventory Management', 'Post Type General Name', '' ),
    'singular_name'       => _x( 'Inventory Management', 'Post Type Singular Name', '' ),
    'menu_name'           => __( 'Inventory Management', '' ),
    'parent_item_colon'   => __( 'Parent Inventory Management', '' ),
    'all_items'           => __( 'All Inventory Management', '' ),
    'view_item'           => __( 'View Inventory Management', '' ),
    'add_new_item'        => __( 'Add New Inventory Management', '' ),
    'add_new'             => __( 'Add New', '' ),
    'edit_item'           => __( 'Edit Inventory Management', '' ),
    'update_item'         => __( 'Update Inventory Management', '' ),
    'search_items'        => __( 'Search Inventory Management', '' ),
    'not_found'           => __( 'Not Found', '' ),
    'not_found_in_trash'  => __( 'Not found in Trash', '' ),
  );
  $args = array(
    'label'               => __( 'inventory_management', '' ),
    'description'         => __( 'Inventory Management News', '' ),
    'labels'              => $labels,
    'supports'            => array( 'title', 'excerpt', 'author', 'thumbnail', 'revisions' ),
    'taxonomies'          => array( 'genres' ),
    'hierarchical'        => false,
    'public'              => false,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,    
    'can_export'          => true,
    'has_archive'         =>  false,
    'rewrite' => array(
            "with_front" => false
        ),
    'exclude_from_search' => true,
    'publicly_queryable'  => false,
    'capability_type'     => 'page',
  );
  register_post_type( 'inventory_management', $args );
}
 
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
add_action( 'init', 'initInventoryFunc' );
 
function inventory_management_shortcode_func($atts, $content = null){
  $html='';
  $args = array(
      'post_type'=> 'inventory_management',
      'orderby' => 'publish_date',
      'order' => 'ASC',
      'posts_per_page' => -1
  );
  $the_query = new WP_Query( $args );
  $post_length = count($the_query->posts);
  for($i=0;$i<$post_length;$i++){
      $img_url = get_the_post_thumbnail_url($the_query->posts[$i]->ID,'full');
      $html.='<div class="row __featuresContentRow conect_bank_row">';
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
add_shortcode( 'inventory_management_features', 'inventory_management_shortcode_func' );


add_filter('get_sample_permalink_html', 'my_hide_permalinkss', 10, 5);

function my_hide_permalinkss($return, $post_id, $new_title, $new_slug, $post)
{
    if($post->post_type == 'inventory_management') {
        return '';
    }
    return $return;
}

?>