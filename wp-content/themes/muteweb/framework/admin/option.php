<?php add_action( 'admin_menu', 'muteweb_option_menu' );
function muteweb_option_menu(){
  $page_title = 'Mute web Option Page';
  $menu_title = 'Muteweb Options';
  $capability = 'manage_options';
  $menu_slug  = 'muteweb-option';
  $function   = 'muteweb_option_info';
  // $icon_url   = 'dashicons-media-code';
  $position   = 4;
  add_menu_page( $page_title,
                 $menu_title, 
                 $capability, 
                 $menu_slug, 
                 $function, 
                 $icon_url, 
                 $position );
 add_submenu_page($menu_slug, 'Header Option', 'Header', $capability, 'header', 'header_option');
 add_submenu_page($menu_slug, 'Footer Option', 'Footer', $capability, 'footer', 'footer_option');
  //call register settings function
	add_action( 'admin_init', 'register_muteweb_option_settings' );
}
function register_muteweb_option_settings() {
	// General Options
  register_setting( 'muteweb-settings-general', 'container_width' );
  // Font Family
	register_setting( 'muteweb-settings-general', 'body_font_family' );
  register_setting( 'muteweb-settings-general', 'h1_font_family' );
  register_setting( 'muteweb-settings-general', 'h2_font_family' );
  register_setting( 'muteweb-settings-general', 'h3_font_family' );
  register_setting( 'muteweb-settings-general', 'h4_font_family' );
  register_setting( 'muteweb-settings-general', 'h5_font_family' );
  register_setting( 'muteweb-settings-general', 'h6_font_family' );
  register_setting( 'muteweb-settings-general', 'button_font_family' );
  
  // Color
  register_setting( 'muteweb-settings-general', 'button_bg_color' );
  register_setting( 'muteweb-settings-general', 'body_color' );
  register_setting( 'muteweb-settings-general', 'announce_color' );
  register_setting( 'muteweb-settings-general', 'anchor_color' );
  register_setting( 'muteweb-settings-general', 'h1_color' );
  register_setting( 'muteweb-settings-general', 'h2_color' );
  register_setting( 'muteweb-settings-general', 'h3_color' );
  register_setting( 'muteweb-settings-general', 'h4_color' );
  register_setting( 'muteweb-settings-general', 'h5_color' );
  register_setting( 'muteweb-settings-general', 'h6_color' );
  register_setting( 'muteweb-settings-general', 'button_color' );
  register_setting( 'muteweb-settings-general', 'header_menu_color' );
  register_setting( 'muteweb-settings-general', 'footer_heading_color' );
  register_setting( 'muteweb-settings-general', 'footer_anchor_color' );
  register_setting( 'muteweb-settings-general', 'footer_text_color' );
  
  // Font size
  register_setting( 'muteweb-settings-general', 'body_font_size' );
  register_setting( 'muteweb-settings-general', 'announce_font_size' );
  register_setting( 'muteweb-settings-general', 'h1_font_size' );
  register_setting( 'muteweb-settings-general', 'h2_font_size' );
  register_setting( 'muteweb-settings-general', 'h3_font_size' );
  register_setting( 'muteweb-settings-general', 'h4_font_size' );
  register_setting( 'muteweb-settings-general', 'h5_font_size' );
  register_setting( 'muteweb-settings-general', 'h6_font_size' );
  register_setting( 'muteweb-settings-general', 'button_font_size' );
  register_setting( 'muteweb-settings-general', 'header_menu_font_size' );
  register_setting( 'muteweb-settings-general', 'footer_heading_font_size' );
  register_setting( 'muteweb-settings-general', 'footer_text_font_size' );


	// Header Options
  register_setting( 'muteweb-settings-header', 'enable_announce_msg' );
  register_setting( 'muteweb-settings-header', 'announce_msg' );
  register_setting( 'muteweb-settings-header', 'announce_bg_color' );
	register_setting( 'muteweb-settings-header', 'header_bg_color' );
	register_setting( 'muteweb-settings-header', 'header_bg_img' );
  register_setting( 'muteweb-settings-header', 'header_menu_bg_color' );
	register_setting( 'muteweb-settings-header', 'header_in_grid' );
	register_setting( 'muteweb-settings-header', 'header_type' );
	register_setting( 'muteweb-settings-header', 'header_logo' );
	register_setting( 'muteweb-settings-header', 'header_style' );

  // Footer Options
  register_setting( 'muteweb-settings-footer', 'footer_bg_img' );
  register_setting( 'muteweb-settings-footer', 'top_footer_bg_color' );
  register_setting( 'muteweb-settings-footer', 'btm_footer_bg_color' );
  register_setting( 'muteweb-settings-footer', 'footer_in_grid' );
  register_setting( 'muteweb-settings-footer', 'footer_style' );
  register_setting( 'muteweb-settings-footer', 'footer_logo' );
}
function muteweb_option_info(){
	require_once(Mute_root_path.'/framework/admin/options/general.php');
}
function header_option(){
	require_once(Mute_root_path.'/framework/admin/options/header.php');
}
function footer_option(){
  require_once(Mute_root_path.'/framework/admin/options/footer.php');
}
add_action('admin_footer', function() { 
    /*
    if possible try not to queue this all over the admin by adding your settings GET page val into next
    if( empty( $_GET['page'] ) || "my-settings-page" !== $_GET['page'] ) { return; }
    */
    ?>
    <script>
        jQuery(document).ready(function($){
            var custom_uploader;
              
      var target = '' ;
            jQuery('.upload_media').click(function(e) {
                e.preventDefault();
                target = jQuery(this).siblings('.upload_media_value');
        
        
                //If the uploader object has already been created, reopen the dialog
                if (custom_uploader) {
                    custom_uploader.open();
                    return;
                }
                //Extend the wp.media object
                custom_uploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Image',
                    button: {
                        text: 'Choose Image'
                    },
                    multiple: false
                });
                //When a file is selected, grab the URL and set it as the text field's value
                custom_uploader.on('select', function() {
                    attachment = custom_uploader.state().get('selection').first().toJSON();
                   // alert(target.attr('class'));
                    target.val(attachment.url);
                    target.siblings('img').attr('src',attachment.url);
                    
                });
                //Open the uploader dialog
                custom_uploader.open();
            }); 
            jQuery('.remove_img').click(function(e){
                e.preventDefault();
                jQuery(this).siblings('.upload_media_value').val('');
                jQuery(this).siblings('img').hide();
            });
            });      
        
    </script>
    <?php
    });
add_action('admin_enqueue_scripts', function(){
    /*
    if possible try not to queue this all over the admin by adding your settings GET page val into next
    if( empty( $_GET['page'] ) || "my-settings-page" !== $_GET['page'] ) { return; }
    */
    wp_enqueue_media();
});
?>