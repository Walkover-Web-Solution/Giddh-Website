<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <h1>
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h1>
        <?php the_content(); ?>
    </div>

<?php endwhile; else: ?>

    <h2> Post or Page not Found! </h2>

<?php endif; ?>
<div id="bottom-navi">
    <div><?php next_posts_link( '&laquo; Older posts' ); ?></div>
    <div><?php previous_posts_link( 'Newer posts &raquo;' ); ?></div>
</div>
<?php get_footer(); ?>