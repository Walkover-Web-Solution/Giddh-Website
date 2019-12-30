<li>
	<div class="fet_img">
		<?php if ( has_post_thumbnail() ){
			$thumbUrl = get_the_post_thumbnail_url();
		} else{
			$thumbUrl = get_stylesheet_directory_uri().'/assets/images/no-thumb.png';
		} ?>
		<img src="<?php echo $thumbUrl; ?>" alt="<?php the_title(); ?>">
	</div>
	<div class="fet_date"><?php echo get_the_date( 'F j, Y' ); ?></div>
	<div class="fet_title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
</li>