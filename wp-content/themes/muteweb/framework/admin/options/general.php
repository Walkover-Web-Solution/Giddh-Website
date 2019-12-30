<div class="wrap">
<h1>Muteweb General</h1>
<form method="post" action="options.php">
    <?php settings_fields( 'muteweb-settings-general' ); ?>
    <?php do_settings_sections( 'muteweb-settings-general' ); ?>
    <div class="qodef-page-form">
        <div class="qodef-page-form-section-holder">
            <h3 class="qodef-page-section-title">Container</h3>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Container width</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="container_width" value="<?php echo esc_attr( get_option('container_width') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="qodef-page-section-title">Font Family</h3>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Body </h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="body_font_family" value="<?php echo esc_attr( get_option('body_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H1 </h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h1_font_family" value="<?php echo esc_attr( get_option('h1_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H2 </h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h2_font_family" value="<?php echo esc_attr( get_option('h2_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H3 </h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h3_font_family" value="<?php echo esc_attr( get_option('h3_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H4 </h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h4_font_family" value="<?php echo esc_attr( get_option('h4_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H5 </h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h5_font_family" value="<?php echo esc_attr( get_option('h5_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H6 </h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h6_font_family" value="<?php echo esc_attr( get_option('h6_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Button </h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="button_font_family" value="<?php echo esc_attr( get_option('button_font_family') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="qodef-page-section-title">Background Color</h3>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Button</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="button_bg_color" value="<?php echo esc_attr( get_option('button_bg_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="qodef-page-section-title">Color</h3>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Body</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="body_color" value="<?php echo esc_attr( get_option('body_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Annocement</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="announce_color" value="<?php echo esc_attr( get_option('announce_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Anchor</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="anchor_color" value="<?php echo esc_attr( get_option('anchor_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>H1</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h1_color" value="<?php echo esc_attr( get_option('h1_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>H2</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h2_color" value="<?php echo esc_attr( get_option('h2_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>H3</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h3_color" value="<?php echo esc_attr( get_option('h3_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>H4</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h4_color" value="<?php echo esc_attr( get_option('h4_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>H5</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h5_color" value="<?php echo esc_attr( get_option('h5_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>H6</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h6_color" value="<?php echo esc_attr( get_option('h6_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Button</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="button_color" value="<?php echo esc_attr( get_option('button_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Header Menu</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="header_menu_color" value="<?php echo esc_attr( get_option('header_menu_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Footer Heading</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="footer_heading_color" value="<?php echo esc_attr( get_option('footer_heading_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Footer links</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="footer_anchor_color" value="<?php echo esc_attr( get_option('footer_anchor_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Footer Text</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="footer_text_color" value="<?php echo esc_attr( get_option('footer_text_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="qodef-page-section-title">Font Size</h3>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Body</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="body_font_size" value="<?php echo esc_attr( get_option('body_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Annocement</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="announce_font_size" value="<?php echo esc_attr( get_option('announce_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H1</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h1_font_size" value="<?php echo esc_attr( get_option('h1_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H2</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h2_font_size" value="<?php echo esc_attr( get_option('h2_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H3</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h3_font_size" value="<?php echo esc_attr( get_option('h3_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H4</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h4_font_size" value="<?php echo esc_attr( get_option('h4_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H5</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h5_font_size" value="<?php echo esc_attr( get_option('h5_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>H6</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="h6_font_size" value="<?php echo esc_attr( get_option('h6_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Button</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="button_font_size" value="<?php echo esc_attr( get_option('button_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Header Menu</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="header_menu_font_size" value="<?php echo esc_attr( get_option('header_menu_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Footer Heading</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="footer_heading_font_size" value="<?php echo esc_attr( get_option('footer_heading_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h2>Footer Text</h2>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field">
                                    <input type="text" name="footer_text_font_size" value="<?php echo esc_attr( get_option('footer_text_font_size') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <?php submit_button(); ?>
</form>
</div>