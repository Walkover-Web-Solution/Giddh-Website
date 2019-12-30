<?php
/**
 * Author Dude
 * Bootstrap shortcuts
 * @package Mute Web
 * @since Mute Web 1.0
 */
function add_shortcodes() {
  $shortcodes = array(
    'container-fluid',
    'container',
    'row',
    'col',
    'lead'
  );
  foreach ( $shortcodes as $shortcode ) {
    $function = 'bs_' . str_replace( '-', '_', $shortcode );
    add_shortcode( $shortcode, array( $this, $function ) );
  }
}
?>