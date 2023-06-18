<?php
/**
 * Post picker block.
 *
 * @package EverbridgeTheme\Blocks\post-picker
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */

$selected_post = ! empty( $attributes['selected_post']['id'] ) ? esc_html( $attributes['selected_post']['id'] ) : '';

if ( empty( $selected_post ) ) {
	return;
}

if ( 'publish' !== get_post_status( $selected_post ) ) {
	return;
}

$selected_taxonomy  = ! empty( $attributes['selected_taxonomy'] ) ? esc_html( $attributes['selected_taxonomy'] ) : '';
$selected_post_type = ! empty( $attributes['selected_post_type'] ) ? esc_html( $attributes['selected_post_type'] ) : '';
$hide_overline      = ! empty( $attributes['hide_overline'] ) ? esc_html( $attributes['hide_overline'] ) : '';
$hide_image         = ! empty( $attributes['hide_image'] ) ? esc_html( $attributes['hide_image'] ) : '';
$hide_headline      = ! empty( $attributes['hide_headline'] ) ? esc_html( $attributes['hide_headline'] ) : '';
$hide_excerpt       = ! empty( $attributes['hide_excerpt'] ) ? esc_html( $attributes['hide_excerpt'] ) : '';
$hide_link          = ! empty( $attributes['hide_link'] ) ? esc_html( $attributes['hide_link'] ) : '';

$thumbnail_url = get_the_post_thumbnail_url( $selected_post, 'post-thumbnail' );

$term_title    = EverbridgeTheme\Core\get_post_term_title( $selected_post, $selected_taxonomy );
$external_meta = EverbridgeTheme\Core\get_post_external_meta( $selected_post );

$summary = '';
if ( empty( $hide_excerpt ) ) {
	$summary = ! empty( $external_meta['description'] ) ? esc_html( $external_meta['description'] ) : '';
}

$link_text = ! empty( $external_meta['link_text'] ) ? esc_html( $external_meta['link_text'] ) : '';
$url       = ! empty( $external_meta['external_url'] ) ? esc_url( $external_meta['external_url'] ) : '';

$is_sub_heading = false;
if ( ! empty( $hide_overline ) || empty( $term_title ) ) {
	$is_sub_heading = true;
}
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
<div class="post-item-wrap">
	<article <?php post_class( '', $selected_post ); ?> id="post-<?php echo esc_html( $selected_post ); ?>">
		<?php if ( empty( $hide_overline ) && ! empty( $term_title ) ) { ?>
			<h6 class="sub-heading"><?php echo esc_html( $term_title ); ?></h6>
		<?php } ?>

		<div class="post-content <?php echo ! empty( $is_sub_heading ) ? 'no-sub-heading' : ''; ?>">
			<?php if ( empty( $hide_image ) && ! empty( $thumbnail_url ) ) { ?>
				<div class="image-wrap">
					<img src="<?php echo esc_url( $thumbnail_url ); ?>" alt="<?php echo esc_html( get_the_title( $selected_post ) ); ?>"/>
				</div>
			<?php } ?>

			<?php if ( empty( $hide_headline ) ) { ?>
				<h3 class="featured-title"><?php echo esc_html( get_the_title( $selected_post ) ); ?></h3>
			<?php } ?>

			<div class="featured-content">
				<?php echo wp_kses_post( $summary, $link_text, $url, '_blank', $hide_link, $hide_excerpt  ); ?>
			</div>
		</div>
	</article>
</div>
</div>
