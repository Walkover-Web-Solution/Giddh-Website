<?php 
function initDataFunc() {
  $labels = array(
    'name'                => _x( 'Import Data', 'Post Type General Name', '' ),
    'singular_name'       => _x( 'Import Data', 'Post Type Singular Name', '' ),
    'menu_name'           => __( 'Import Data', '' ),
    'parent_item_colon'   => __( 'Parent Import Data', '' ),
    'all_items'           => __( 'All Import Data', '' ),
    'view_item'           => __( 'View Import Data', '' ),
    'add_new_item'        => __( 'Add New Import Data', '' ),
    'add_new'             => __( 'Add New', '' ),
    'edit_item'           => __( 'Edit Import Data', '' ),
    'update_item'         => __( 'Update Import Data', '' ),
    'search_items'        => __( 'Search Import Data', '' ),
    'not_found'           => __( 'Not Found', '' ),
    'not_found_in_trash'  => __( 'Not found in Trash', '' ),
  );
  $args = array(
    'label'               => __( 'import_data', '' ),
    'description'         => __( 'Import Data News', '' ),
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
    'has_archive'         => false,
    'exclude_from_search' => false,
    'publicly_queryable'  => false,
    'capability_type'     => 'page',
  );
  register_post_type( 'import_data', $args );
}
 
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
 
add_action( 'init', 'initDataFunc' );
 
function import_data_shortcode_func($atts, $content = null){
  $html='';
  $args = array(
      'post_type'=> 'import_data',
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
add_shortcode( 'import_data_features', 'import_data_shortcode_func' );
add_filter('get_sample_permalink_html', 'my_hide_import_data_user', 10, 5);

function my_hide_import_data_user($return, $post_id, $new_title, $new_slug, $post)
{
    if($post->post_type == 'import_data') {
        return '';
    }
    return $return;
}
?>