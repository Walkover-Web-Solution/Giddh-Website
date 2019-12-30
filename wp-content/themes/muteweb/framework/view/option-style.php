<?php 

	$container_width = get_option('container_width');

	$header_bg_color = get_option('header_bg_color');
	$header_bg_img = get_option('header_bg_img');
	$header_menu_bg_color = get_option('header_menu_bg_color');
	$announce_bg_color = get_option('announce_bg_color');
	$button_bg_color = get_option('button_bg_color');
	$footer_bg_img = get_option('footer_bg_img');
	$top_footer_bg_color = get_option('top_footer_bg_color');
	$btm_footer_bg_color = get_option('btm_footer_bg_color');

	$body_font_family_1 = get_option('body_font_family');
	$body_font_family_1 = explode(':', $body_font_family_1);
	$body_font_family = $body_font_family_1[0];
	$body_font_weight = $body_font_family_1[1];

	$h1_font_family_1 = get_option('h1_font_family');
	$h1_font_family_1 = explode(':', $h1_font_family_1);
	$h1_font_family = $h1_font_family_1[0];
	$h1_font_weight = $h1_font_family_1[1];

	$h2_font_family_1 = get_option('h2_font_family');
	$h2_font_family_1 = explode(':', $h2_font_family_1);
	$h2_font_family = $h2_font_family_1[0];
	$h2_font_weight = $h2_font_family_1[1];

	$h3_font_family_1 = get_option('h3_font_family');
	$h4_font_family_1 = explode(':', $h3_font_family_1);
	$h3_font_family = $h4_font_family_1[0];
	$h3_font_weight = $h4_font_family_1[1];

	$h4_font_family_1 = get_option('h4_font_family');
	$h4_font_family_1 = explode(':', $h4_font_family_1);
	$h4_font_family = $h4_font_family_1[0];
	$h4_font_weight = $h4_font_family_1[1];

	$h5_font_family_1 = get_option('h5_font_family');
	$h5_font_family_1 = explode(':', $h5_font_family_1);
	$h5_font_family = $h5_font_family_1[0];
	$h5_font_weight = $h5_font_family_1[1];

	$h6_font_family_1 = get_option('h6_font_family');
	$h6_font_family_1 = explode(':', $h6_font_family_1);
	$h6_font_family = $h6_font_family_1[0];
	$h6_font_weight = $h6_font_family_1[1];

	$button_font_family_1 = get_option('button_font_family');
	$button_font_family_1 = explode(':', $button_font_family_1);
	$button_font_family = $button_font_family_1[0];
	$button_font_weight = $button_font_family_1[1];

	$body_font_size = get_option('body_font_size');
	$announce_font_size = get_option('announce_font_size');
	$h1_font_size = get_option('h1_font_size');
	$h2_font_size = get_option('h2_font_size');
	$h3_font_size = get_option('h3_font_size');
	$h4_font_size = get_option('h4_font_size');
	$h5_font_size = get_option('h5_font_size');
	$h6_font_size = get_option('h6_font_size');
	$button_font_size = get_option('button_font_size');
	$header_menu_font_size = get_option('header_menu_font_size');
	$footer_heading_font_size = get_option('footer_heading_font_size');
	$footer_text_font_size = get_option('footer_text_font_size');

	$body_color = get_option('body_color');
	$announce_color = get_option('announce_color');
	$anchor_color = get_option('anchor_color');
	$h1_color = get_option('h1_color');
	$h2_color = get_option('h2_color');
	$h3_color = get_option('h3_color');
	$h4_color = get_option('h4_color');
	$h5_color = get_option('h5_color');
	$h6_color = get_option('h6_color');
	$button_color = get_option('button_color');
	$header_menu_color = get_option('header_menu_color');
	$footer_heading_color = get_option('footer_heading_color');
	$footer_anchor_color = get_option('footer_anchor_color');
	$footer_text_color = get_option('footer_text_color');

	$googleFontFamily = "";
	if (!empty($body_font_family)) {
		$googleFontFamily = $googleFontFamily.$body_font_family;
	}
	if (!empty($h1_font_family)) {
		$googleFontFamily = $googleFontFamily.'|'.$h1_font_family;
	}
	if (!empty($h2_font_family)) {
		$googleFontFamily = $googleFontFamily.'|'.$h2_font_family;
	}
	if (!empty($h3_font_family)) {
		$googleFontFamily = $googleFontFamily.'|'.$h3_font_family;
	}
	if (!empty($h4_font_family)) {
		$googleFontFamily = $googleFontFamily.'|'.$h4_font_family;
	}
	if (!empty($h5_font_family)) {
		$googleFontFamily = $googleFontFamily.'|'.$h5_font_family;
	}
	if (!empty($h6_font_family)) {
		$googleFontFamily = $googleFontFamily.'|'.$h6_font_family;
	}
	if (!empty($button_font_family)) {
		$googleFontFamily = $googleFontFamily.'|'.$button_font_family;
	}

?>
