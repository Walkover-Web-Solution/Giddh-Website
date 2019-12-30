<?php
/**
 * Plugin Name: Empty P Tag
 * Description: This plugin removes empty p and br tag from the content. 
 * Version: 1.0.0
 * Author: Husain Ahmed Qureshi
 * Author URI: https://husain25.wordpress.com
 * Author Email: husain.ahmed25@gmail.com
 * License: HAQV1
 */

   remove_filter('the_excerpt', 'wpautop');
   remove_filter('the_content', 'wpautop');
   remove_filter('widget_text_content', 'wpautop');
   
?>