<div class="wrap">
<h1>Muteweb Header</h1>

<form method="post" action="options.php">
    <?php settings_fields( 'muteweb-settings-header' ); ?>
    <?php do_settings_sections( 'muteweb-settings-header' ); ?>
    <div class="qodef-page-form">
        <div class="qodef-page-form-section-holder">
            <div class="qodef-page-form-section">
                <?php $enable_announce_msg = get_option( 'enable_announce_msg' ); ?>
                <div class="qodef-field-desc">
                    <h3>Enable Announcement Msg</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <input type="checkbox" name="enable_announce_msg" <?php checked( 'on', $enable_announce_msg ); ?> />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Announcement Msg</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <textarea type="textarea" name="announce_msg"><?php echo esc_attr( get_option('announce_msg') ); ?> </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="qodef-page-section-title">Background</h3>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Announcement bg Color</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <input type="text" name="announce_bg_color" value="<?php echo esc_attr( get_option('announce_bg_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Header Background Color</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <input type="text" name="header_bg_color" value="<?php echo esc_attr( get_option('header_bg_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Menu Background Color</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <input type="text" name="header_menu_bg_color" value="<?php echo esc_attr( get_option('header_menu_bg_color') ); ?>" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Header Background image</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $headerBgImg = get_option( 'header_bg_img' ); ?>
                                     
                                        <button class="button upload_media">Upload</button>
                                        <input type="hidden" name="header_bg_img" class="upload_media_value" value="<?php echo esc_attr( get_option('header_bg_img') ); ?>" />
                                        
                                        <img src="<?php echo $headerBgImg; ?>">
                                        <a href="javascript:" class="remove_img" >Remove</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Header in grid</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $headerInGrid = get_option( 'header_in_grid' ); ?>
                                    <label for="">Yes</label>
                                    <input type="radio" name="header_in_grid" value="Yes"  <?php checked( 'Yes', $headerInGrid ); ?> />
                                    <label>No</label>
                                    <input type="radio" name="header_in_grid" value="No" <?php checked( 'No', $headerInGrid ); ?> />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Header type</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $headerType = get_option( 'header_type' ); ?>
                                     <select name="header_type">
                                        <option value="Regular" <?php selected( "Regular" , $headerType ); ?>>Regular</option>
                                        <option value="Sticky" <?php selected( "Sticky" , $headerType ); ?>>Sticky</option>
                                        <option value="Sticky_homepage" <?php selected( "Sticky_homepage" , $headerType ); ?>>Sticky on homepage only</option>
                                        <option value="Fixed" <?php selected( "Fixed" , $headerType ); ?>>Fixed</option>
                                        <option value="Fixed_on_scroll" <?php selected( "Fixed_on_scroll" , $headerType ); ?>>Fixed on scroll</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Header Logo</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $headerLogo = get_option( 'header_logo' ); ?>
                                        <button class="button upload_media ">Upload</button>
                                        <input type="hidden" name="header_logo" class="upload_media_value" value="<?php echo esc_attr( get_option('header_logo') ); ?>" />

                                        <img src="<?php echo $headerLogo; ?>">
                                        <a href="javascript:" class="remove_img" >Remove</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="qodef-page-form-section">
                <div class="qodef-field-desc">
                    <h3>Header style</h3>
                </div>
                <div class="qodef-section-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="field switch">
                                    <?php $headerStyle = get_option( 'header_style' ); ?>
                                     <select name="header_style">
                                        <option value="style_1" <?php selected( "style_1" , $headerStyle ); ?>>Style 1 (Logo on left * Menu on right)</option>
                                        <option value="style_2" <?php selected( "style_2" , $headerStyle ); ?>>Style 2 (Logo on center & Menu on bottom)</option>
                                        <option value="style_3" <?php selected( "style_3" , $headerStyle ); ?>>Style 3 (Logo on center & 2 menus)</option>
                                        <option value="style_4" <?php selected( "style_4" , $headerStyle ); ?>>Style 4 (Logo on left & enable mobile menu on desktop)</option>
                                        <option value="style_5" <?php selected( "style_5" , $headerStyle ); ?>>Style 5 (Logo on left & info on right & enable menu on bottom)</option>
                                    </select>
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