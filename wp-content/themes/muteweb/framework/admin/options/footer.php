<div class="wrap">
<h1>Muteweb Footer</h1>

<form method="post" action="options.php">
    <?php settings_fields( 'muteweb-settings-footer' ); ?>
    <?php do_settings_sections( 'muteweb-settings-footer' ); ?>
    <div class="qodef-page-form">
        <div class="qodef-page-form-section-holder">
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Footer in grid</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $footer_in_grid = get_option( 'footer_in_grid' ); ?>
                                    <label for="">Yes</label>
                                    <input type="radio" name="footer_in_grid" value="Yes"  <?php checked( 'Yes', $footer_in_grid ); ?> />
                                    <label>No</label>
                                    <input type="radio" name="header_in_grid" value="No" <?php checked( 'No', $footer_in_grid ); ?> />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Background</h2>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Footer Image</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $footer_bg_img = get_option( 'footer_bg_img' ); ?>
                                     
                                        <button class="button upload_media">Upload</button>
                                        <input type="hidden" name="footer_bg_img" class="upload_media_value" value="<?php echo esc_attr( get_option('footer_bg_img') ); ?>" />
                                        
                                        <img src="<?php echo $footer_bg_img; ?>">
                                        <a href="javascript:" class="remove_img" >Remove</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Top Footer Color</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <input type="text" name="top_footer_bg_color" value="<?php echo esc_attr( get_option('top_footer_bg_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Bottom Footer Color</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <input type="text" name="btm_footer_bg_color" value="<?php echo esc_attr( get_option('btm_footer_bg_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Footer style</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $footer_style = get_option( 'footer_style' ); ?>
                                     <select name="footer_style">
                                        <option value="style_1" <?php selected( "style_1" , $footer_style ); ?>>Style 1</option>
                                        <option value="style_2" <?php selected( "style_2" , $footer_style ); ?>>Style 2 </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Footer Logo</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $footer_logo = get_option( 'footer_logo' ); ?>
                                     
                                        <button class="button upload_media">Upload</button>
                                        <input type="hidden" name="footer_logo" class="upload_media_value" value="<?php echo esc_attr( get_option('footer_logo') ); ?>" />
                                        
                                        <img src="<?php echo $footer_logo; ?>">
                                        <a href="javascript:" class="remove_img" >Remove</a>
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