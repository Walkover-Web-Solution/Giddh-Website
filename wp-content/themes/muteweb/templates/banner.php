<?php /* Template Name: Banner */ ?>
<?php get_header(); ?>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() . '/assets/css/custom.css'; ?>">
<?php 
if ( have_posts() ) : while ( have_posts() ) : the_post(); 
	$img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
  $banner_sub_title = get_post_meta( get_the_ID(), 'banner_sub_title', true);
  $banner_title = get_post_meta( get_the_ID(), 'banner_title', true);
  $second_heading = get_post_meta( get_the_ID(), 'second_heading', true);
  $second_content = get_post_meta( get_the_ID(), 'second_content', true);
    $blog_title = get_post_meta( get_the_ID(), 'blog_title', true);
  $blog_link = get_post_meta( get_the_ID(), 'blog_link', true);

  $meta = get_post_meta( $post->ID, 'blog_image', true );
  ?>

	<section class="main-banner">
  <div class="container">
  <figure class="sub-banner-img figure">
    <img src="https://giddh.com/wp-content/themes/muteweb/assets/images/cloud_icon.svg" alt="" class="sky-small">
    <img src="https://giddh.com/wp-content/themes/muteweb/assets/images/cloud_icon.svg" alt="" class="sky-large">
  </figure>    
    <div class="row">
      <div class="col-md-7">
      <div class="banner_intro features_banner">
            <h2 class="banner-h1 text-indigo"><?php echo $banner_title;?></h2>
            <p class="pb-4 sub-heading"><?php echo $banner_sub_title;?></p>
            <div class="benner-btn">
              <!-- https://s3-ap-south-1.amazonaws.com/giddh-app-builds/giddh%20Setup%20{{apkVersion}}.exe -->
              <a class="btn btn-primary __downloadAppBtn" href="javascript:void(0)">Download Free</a> 
              <a class="talktosale" href="javascript:void(0)"
              onclick="Calendly.initPopupWidget({url: 'https://calendly.com/sales-accounting-software/talk-to-sale'});return false;"
              >Talk to Sales</a>
            </div>
        </div>
      </div>
  <!-- col end -->
  <div class="col-md-5">
    <figure class="right-section">
      <img src="<?php echo $img_url;?>" class="banner-img img-fluid" alt="" title="">
    </figure>
  </div>
  <!-- col end -->
  </div>
<!-- row end -->
  </div>
<!-- container end -->
</section>
<?php if ( get_the_ID() == 643 ) {
  $class="data-second";
}
 else {
  $class="";
 }
 ?>
<section class="bg-light-gray py-7 text-center reporting-sec <?php echo $class; ?>">
<div class="container">
<div class="row">
  <div class="col">
    <div class="middle-width">
      <h2 class="lead"><?php echo $second_heading;?></h2>
      <p class="fs-20"><?php echo $second_content;?></p>
    </div>
    <p>
      <a href="https://giddh.com/signup/" class="btn btn-primary btn-lg mt-4">Start Your Trial</a>
    </p>
  </div>
</div>
</div>
</section>
<section>


<?php the_content();?>

<!-- <section class="bg-light-gray py-5">
   <div class="container area-flex  blog_center_new">
     <div class="center-divbox d-flex m-auto w-75">
     <figure class="figure">
       <img class="figure-img" src="<?php echo $meta['image'];?>" alt="">
     </figure>
     <div class="sub-heading">
      <h3><?php echo $blog_title;?></h3>
      <a href="<?php echo $blog_link;?>" target="_blank" rel="noopener noreferrer">Read more...</a>
     </div>
     </div>
   </div>
</section> -->
<section class="intrested-secion">
<div class="container">
<div class="row">
               <div class="col-sm-12">
                   <div class="text-center">
<figure class="figure">
                   <img src="https://giddh.com/wp-content/themes/muteweb/assets/images/invoicing/footer.svg" class="peopel-img figure-img" alt="">
</figure>
                      <div class="reporting-blog-text">
                      <div class="footer-meta-heading"><h4> People interested in <span> <?php the_title()?> </span> also looked at</h4></div>
                      <div class="intresrt-links text-center mrT2">
                         <ul id="cardList">
                         <li>
                          <a href="<?php echo site_url(); ?>/feature/">All features</a>
                        </li>
                        <li>
                          <a href="<?php echo site_url(); ?>/multi-user-accounting-software/">Share Data</a>
                        </li>
                        <li>
                          <a href="<?php echo site_url(); ?>/multi-currency-accounting-software/">Multi-Currency</a>
                        </li>
                        <li>
                          <a href="<?php echo site_url(); ?>/invoicing-software/">Invoicing</a>
                        </li>
                        </ul>
                       </div>
                      </div>
                   </div>
               </div>
           </div>
</div>
</section>

<?php get_footer(); 
endwhile; 
						
						endif; ?>


