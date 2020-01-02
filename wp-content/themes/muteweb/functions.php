<?php
    /**
 * Muteweb's functions and definitions
 *
 * @package Mute Web
 * @since Mute Web 1.0
 */
 
/**
 * First, let's set the maximum content width based on the theme's design and stylesheet.
 * This will limit the width of all uploaded images and embeds.
 */
define( 'Mute_root_path', get_stylesheet_directory() );
if ( ! isset( $content_width ) )
    $content_width = 800; /* pixels */
 
if ( ! function_exists( 'muteweb_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function muteweb_setup() {
 
    /**
     * Make theme available for translation.
     * Translations can be placed in the /languages/ directory.
     */
    load_theme_textdomain( 'muteweb_theme', get_template_directory() . '/languages' );
 
    /**
     * Add default posts and comments RSS feed links to <head>.
     */
    add_theme_support( 'automatic-feed-links' );
 
    /**
     * Enable support for post thumbnails and featured images.
     */
    add_theme_support( 'post-thumbnails' );
 
    /**
     * Add support for two custom navigation menus.
     */
    register_nav_menus( array(
        'primary'   => __( 'Primary Menu', 'muteweb_theme' ),
        'left'   => __( 'Left Menu', 'muteweb_theme' ),
        'right'   => __( 'Right Menu', 'muteweb_theme' ),
        'secondary' => __('Secondary Menu', 'muteweb_theme' )
    ) );
 	
 	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
	) );
    /**
     * Enable support for the following post formats:
     * aside, gallery, quote, image, and video
     */
    add_theme_support( 'post-formats', array ( 'aside', 'gallery', 'quote', 'image', 'video' ) );
}
endif; // myfirsttheme_setup
add_action( 'after_setup_theme', 'muteweb_setup' );
/**
 * Register widget area.
 *
 * @since Twenty Fifteen 1.0
 *
 * @link https://codex.wordpress.org/Function_Reference/register_sidebar
 */
function muteweb_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar 1', 'muteweb_theme' ),
        'id'            => 'sidebar-1',
    ) );
	register_sidebar( array(
		'name'          => __( 'Header Right', 'muteweb_theme' ),
		'id'            => 'header-right',
	) );
    register_sidebar( array(
        'name'          => __( 'Footer Col 1', 'muteweb_theme' ),
        'id'            => 'footer-col-1',
    ) );
    register_sidebar( array(
        'name'          => __( 'Footer Col 2', 'muteweb_theme' ),
        'id'            => 'footer-col-2',
    ) );
    register_sidebar( array(
        'name'          => __( 'Footer Col 3', 'muteweb_theme' ),
        'id'            => 'footer-col-3',
    ) );
    register_sidebar( array(
        'name'          => __( 'Footer Col 4', 'muteweb_theme' ),
        'id'            => 'footer-col-4',
    ) );
    register_sidebar( array(
        'name'          => __( 'Footer Newsletter', 'muteweb_theme' ),
        'id'            => 'footer-newsletter',
    ) );
     register_sidebar( array(
        'name'          => __( 'Bottom Footer', 'muteweb_theme' ),
        'id'            => 'footer-bottom',
    ) );
     register_sidebar( array(
        'name'          => __( 'Social Icons', 'muteweb_theme' ),
        'id'            => 'social-icons',
    ) );
     
}
add_action( 'widgets_init', 'muteweb_widgets_init' );
function mute_adding_styles() {
	// Load our main and vendors stylesheet.
    wp_enqueue_style( 'muteweb-vendor-style', get_template_directory_uri(). '/assets/css/vendor.min.css', array(), '1.5' );
    // load style
    wpcf7_enqueue_styles();
    wp_enqueue_style( 'muteweb-style', get_stylesheet_uri(), '', rand() );
    
    // load js
    wp_enqueue_script( 'muteweb-vendor-js', get_template_directory_uri() . '/assets/js/vendor.min.js', array(), '20141010', true );
    // load cf7
    wpcf7_enqueue_scripts();
    wp_enqueue_script( 'muteweb-front-script-js', get_template_directory_uri() . '/assets/js/front-script.js', array(), '201410103', true );
}
add_action( 'wp_enqueue_scripts', 'mute_adding_styles' );  
require_once(Mute_root_path.'/framework/admin/option.php');
// require_once(Mute_root_path.'/framework/admin/slider.php');
require_once(Mute_root_path.'/framework/admin/homeFunc.php');
require_once(Mute_root_path.'/framework/admin/gstrFunc.php');
require_once(Mute_root_path.'/framework/admin/invoice-features.php');
require_once(Mute_root_path.'/framework/admin/accounting-dashboard.php');
require_once(Mute_root_path.'/framework/admin/cloud_accounting_software.php');
require_once(Mute_root_path.'/framework/admin/conect-bank-reconcile.php');
require_once(Mute_root_path.'/framework/admin/financial-reporting.php');
require_once(Mute_root_path.'/framework/admin/import-data.php');
require_once(Mute_root_path.'/framework/admin/multi-currency-accounting-software.php');
require_once(Mute_root_path.'/framework/admin/multi-user-accounting-software.php');
require_once(Mute_root_path.'/framework/admin/inventory-management-software.php');
require_once(Mute_root_path.'/framework/admin/contact.php');
function wpb_set_post_views($postID) {
    $count_key = 'wpb_post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    }else{
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}
//To keep the count accurate, lets get rid of prefetching
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
function wpb_track_post_views ($post_id) {
    if ( !is_single() ) return;
    if ( empty ( $post_id) ) {
        global $post;
        $post_id = $post->ID;    
    }
    wpb_set_post_views($post_id);
}
add_action( 'wp_head', 'wpb_track_post_views');

function wpb_get_post_views($postID){
    $count_key = 'wpb_post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0 View";
    }
    return $count.' Views';
}

// function allin_one_post_type() {
// } 
// add_action( 'init', 'allin_one_post_type', 0 );

function my_jquery_enqueue() {
    wp_deregister_script( 'jquery' );
}
add_action( 'wp_enqueue_scripts', 'my_jquery_enqueue' );
function add_file_types_to_uploads($file_types){ 
    $new_filetypes = array(); $new_filetypes['svg'] = 'image/svg+xml'; 
    $file_types = array_merge($file_types, $new_filetypes ); 
    return $file_types; 
} 
add_action('upload_mimes', 'add_file_types_to_uploads');

// to prevent wpcf7 to load files on all pages
// add_filter( 'wpcf7_load_js', '__return_false' );
// add_filter( 'wpcf7_load_css', '__return_false' );
function add_blog_image_meta_box() {
    add_meta_box(
        'blog_image_meta_box',
        'Your Fields', // $title
        'show_blog_image_meta_box',
        'page', 
        'normal',
        'high' 
    );
}
add_action( 'add_meta_boxes', 'add_blog_image_meta_box' );
function show_blog_image_meta_box() {
    global $post;  
        $meta = get_post_meta( $post->ID, 'blog_image', true ); ?>
  <input type="hidden" name="your_meta_box_nonce" value="<?php echo wp_create_nonce( basename(__FILE__) ); ?>">
  <p>
    <label for="blog_image[image]">Blog Image Upload</label><br>
    <input type="text" name="blog_image[image]" id="blog_image[image]" class="meta-image regular-text" value="<?php echo $meta['image']; ?>">
    <input type="button" class="button image-upload" value="Browse">
  </p>
  <div class="image-preview"><img src="<?php echo $meta['image']; ?>" style="max-width: 250px;"></div>
<script>
jQuery(document).ready(function ($) {
      var meta_image_frame;
      $('.image-upload').click(function (e) {
        var meta_image_preview = $(this).parent().parent().children('.image-preview');
        e.preventDefault();
        var meta_image = $(this).parent().children('.meta-image');
        if (meta_image_frame) {
          meta_image_frame.open();
          return;
        }
        meta_image_frame = wp.media.frames.meta_image_frame = wp.media({
          title: meta_image.title,
          button: {
            text: meta_image.button
          }
        });
        meta_image_frame.on('select', function () {
          var media_attachment = meta_image_frame.state().get('selection').first().toJSON();
          meta_image.val(media_attachment.url);
          meta_image_preview.children('img').attr('src', media_attachment.url);
        });
        meta_image_frame.open();
      });
    });
  </script>
  <?php }
function save_blog_image_meta( $post_id ) {   
    if ( isset($_POST['your_meta_box_nonce']) 
            && !wp_verify_nonce( $_POST['your_meta_box_nonce'], basename(__FILE__) ) ) {
            return $post_id; 
        }
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return $post_id;
    }
    if (isset($_POST['post_type'])) { //Fix 2
        if ( 'page' === $_POST['post_type'] ) {
            if ( !current_user_can( 'edit_page', $post_id ) ) {
                return $post_id;
            } elseif ( !current_user_can( 'edit_post', $post_id ) ) {
                return $post_id;
            }  
        }
    }
    $old = get_post_meta( $post_id, 'blog_image', true );
        if (isset($_POST['blog_image'])) { //Fix 3
            $new = $_POST['blog_image'];
            if ( $new && $new !== $old ) {
                update_post_meta( $post_id, 'blog_image', $new );
            } elseif ( '' === $new && $old ) {
                delete_post_meta( $post_id, 'blog_image', $old );
            }
        }
}
add_action( 'save_post', 'save_blog_image_meta' );


// redirecting when dubai ip
// add_action( 'wp', 'wpse47305_check_home' );
// function wpse47305_check_home() {
//     if ( is_front_page() ){
//     $a = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$_SERVER['REMOTE_ADDR']));
//         $countrycode= $a['geoplugin_countryCode'];
//         if($countrycode=="AE" || $countrycode=="AE"){
//             $url=site_url()."/ae/";
//             wp_redirect( $url );
//             exit;
//         }
//     }
// }
add_action( 'template_redirect', 'unlisted_jobs_redirect' );
function unlisted_jobs_redirect()
{
    // check if is a 404 error, and it's on your jobs custom post type
    if( is_404())
    {
        // then redirect to yourdomain.com/jobs/
        wp_redirect( home_url( '/page-not-found/' ) );
        exit();
    }
}

function getGoogleAuthUrl() {
    require_once ABSPATH.'vendor/autoload.php';
 
    // create Client Request to access Google API
    $client = new Google_Client();
    $client->setClientId(GOOGLE_CLIENT_ID);
    $client->setClientSecret(GOOGLE_CLIENT_SECRET);
    $client->setRedirectUri(GOOGLE_REDIRECT_URL);
    $client->setAccessType("offline");
    $client->addScope("email");
    $client->addScope("profile");
    
    return $client->createAuthUrl();
}