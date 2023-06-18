<?php
/**
 * Call to action block markup
 *
 * @package CreedallyPlugin\Blocks\Example
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */

$unique_id = esc_attr( uniqid( 'author_bg' ) );
?>
<div <?php echo get_block_wrapper_attributes(); // // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div id="<?php echo esc_attr( $unique_id ); ?>" class="author-wrapper" style="<?php echo ! empty( $attributes['backgroundImage'] ) ? 'background:url(' . esc_url( $attributes['backgroundImage'] ) . ')' : ''; ?>">
		<div class="author-row">
			<div class="author-content-wrap">
				<?php if ( ! empty( $attributes['authorImage'] ) ) : ?>
					<div class="author-image">
						<img src="<?php echo esc_url( $attributes['authorImage'] ); ?>" alt="<?php esc_attr_e( 'Call To Action', 'creedally-theme' ); ?>" />
					</div>
				<?php endif; ?>
				<div class="author-body-wrap">
					<?php if ( ! empty( $attributes['authorTitle'] ) ) : ?>
						<h2 class="author-title"><?php echo esc_html( $attributes['authorTitle'] ); ?></h2>
					<?php endif; ?>
					<?php if ( ! empty( $attributes['authorContent'] ) ) : ?>
						<p class="author-content"><?php echo wp_kses_post( $attributes['authorContent'] ); ?></h2></p>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</div>
<style>

<?php
	$background_color     = ! empty( $attributes['background_color'] ) ? esc_attr( $attributes['background_color'] . '9c' ) : '#292d2f9c';
	$bg_transparent_color = ! empty( $attributes['background_color'] ) ? esc_attr( $attributes['background_color'] ) : '#292d2f';
	printf( '#%1$s.author-wrapper:after, .author-wrapper:before{background: %2$s } #%1$s.author-wrapper:before{background: %3$s }', esc_attr( $unique_id ), esc_attr( $background_color ), esc_attr( $bg_transparent_color ) );


    if ( (bool) get_the_author_meta( 'description' ) ) : ?>
<div class="author-bio">
   <h2 class="author-title">
       <span class="author-heading">
           <?php
           printf(
               /* translators: %s: post author */
               __( 'Published by %s', 'pms' ),
               esc_html( get_the_author() )
           );
           ?>
           </span>
             </h2>
       <p class="author-description">
    <?php the_author_meta( 'description' ); ?>
    <a class="author-link" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author">
     <?php _e( 'View more posts', 'pms' ); ?>
                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                  </p><!-- .author-description -->
</div><!-- .author-bio -->
<?php endif; ?>

</style>
