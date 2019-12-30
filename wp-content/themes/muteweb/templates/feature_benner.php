<?php /* Template Name: Features Banner */ ?>
<?php get_header(); ?>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() . '/assets/css/custom.css'; ?>">
<?php
if ( have_posts() ) : while ( have_posts() ) : the_post(); 
	$img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
  $banner_sub_title = get_post_meta( get_the_ID(), 'banner_sub_title', true);
  $banner_title = get_post_meta( get_the_ID(), 'banner_title', true);

  $meta = get_post_meta( $post->ID, 'blog_image', true );
  ?>
	<section class="main-banner">
  <div class="container">
  <figure class="sub-banner-img figure">
    <img src="<?php echo site_url(); ?>/wp-content/themes/muteweb/assets/images/cloud_icon.svg" alt="" class="sky-small">
    <img src="<?php echo site_url(); ?>/wp-content/themes/muteweb/assets/images/cloud_icon.svg" alt="" class="sky-large">
  </figure>    
    <div class="row">
      <div class="col-md-7">
      <div class="banner_intro features_banner">
            <h2 class="banner-h1 text-indigo"><?php echo $banner_title;?></h2>
            <p class="pb-4 sub-heading"><?php echo $banner_sub_title;?></p>
            <div class="benner-btn">
              <a class="btn btn-primary" href="https://s3-ap-south-1.amazonaws.com/giddh-app-builds/giddh%20Setup%20{{apkVersion}}.exe">Download Free</a> <a class="talktosale" href="javascript:void(0);" data-toggle="modal" data-target="#talkToSales_dialog" rel="noopener noreferrer">Talk to Sales</a>
            </div>
        </div>
      </div>
  <!-- col end -->
  <div class="col-md-5">
    <figure class="right-section">
      <img src="<?php echo $img_url;?>" alt="All features" class="banner-img img-fluid">
    </figure>
  </div>
  <!-- col end -->
  </div>
<!-- row end -->
  </div>
<!-- container end -->
</section>

<?php the_content();?>

<?php get_footer(); 
endwhile; 
endif; ?>


