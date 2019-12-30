
<?php get_header(); ?>
<?php $productID = get_the_ID(); ?>
<?php if (have_posts()) : ?>
<?php while (have_posts()) : the_post(); ?>
	<?php the_content(); ?>	
<?php endwhile; ?>
<?php endif;
wp_reset_query(); ?>	

<?php $productTitle = get_the_title(); ?>
<div class="pro_title" style="display: none;"> <?php echo $productTitle; ?> </div>
<script type="text/javascript">
	jQuery(document).ready(function(){
		var productTitle = jQuery('.pro_title').text();
		jQuery('.product_name').val(productTitle);
	});
</script>
<?php

$category = get_the_terms( get_the_ID(), 'product_cat' );     
$i=0;

foreach ( $category as $cat){
    $i++;
if($i==2) break;
    $args = array('post_type' => 'product',
        'tax_query' => array(
            array(
                'taxonomy' => 'product_cat',
                'field' => 'id',
                'terms' => $cat->term_id,
            ),
        ),
     );
     $loop = new WP_Query($args);
     if($loop->have_posts()) { ?>
     <div class=" rel_wrap">
        <div class="vc_row wpb_row section vc_row-fluid grid_section">
        <div class=" section_inner clearfix">
            <div class="section_inner_margin clearfix">
                <h2>Related Products</h2>
                <ul class="rel_slider owl-carousel owl-theme" id="rel_slider">
                    <?php while($loop->have_posts()) : $loop->the_post(); 
                        $loopId = get_the_ID();
                        if($productID != $loopId){?>
                        <li class="item">
                            <a href="<?php the_permalink(); ?>">
                                <div class="rel_img"><img src="<?php the_post_thumbnail_url();?>" /></div>
                                <h3><?php the_title(); ?></h3>     
                            </a>
                            
                        </li>
                        <?php } ?>
                        
                    <?php endwhile; ?>
                </ul>    
            </div>
        </div>
        </div>
    </div>
    <?php }
} ?>





<div class="logo-section">
<?php if ( is_active_sidebar( 'sponger-logo' ) ) :
    dynamic_sidebar( 'sponger-logo ' ); 
endif; ?>
</div>
<div class="get-touch">
<?php if ( is_active_sidebar( 'map-section' ) ) :
    dynamic_sidebar( 'map-section' ); 
endif; ?>
</div>
<?php get_footer(); ?>
