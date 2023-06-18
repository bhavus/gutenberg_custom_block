<?php
/**
 * Hero block markup
 *
 * @package EverbridgeTheme\Blocks\Hero
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */

$is_popup         = ! empty( $attributes['popup_video'] ) ? esc_attr( $attributes['popup_video'] ) : '';
$popup_video_url  = ! empty( $attributes['popup_video_url']['url'] ) ? esc_url( $attributes['popup_video_url']['url'] ) : '';
//$is_embed_url     = EverbridgeTheme\Core\is_youtube_embed_url( $popup_video_url );
$background_color = ! empty( $attributes['backgroundColor'] ) ? esc_attr( $attributes['backgroundColor'] ) : '#292d2f';

if ( wp_is_mobile() ) {
	$background_color .= 'c9';
}
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="hero-container">
		<div class="hero-content">
			<div class="slide-content" style="<?php echo ! empty( $background_color ) ? 'background-color:' . esc_attr( $background_color ) : ''; ?>">
				<?php echo ! empty( $content ) ? wp_kses_post( $content ) : ''; ?>
				<?php if ( isset( $attributes['popup_video'] ) && ! empty( $attributes['popup_video'] ) && isset( $popup_video_url ) && ! empty( $popup_video_url ) && ! empty( $is_embed_url ) ) { ?>
					<div class="hero-popup-video">
						<a id="hero_popup_button" href="<?php echo esc_url( $popup_video_url ); ?>" class="popup-video-link">
							<span class="play-button"></span>
						</a>
					</div>
				<?php } ?>
			</div>
		</div>
		<div class="hero-carousel">
			<div id="<?php echo esc_attr( uniqid( 'hero_slide_' ) ); ?>" class="hero-slides <?php echo empty( $is_popup ) ? 'hero-slider' : 'hero-popup'; ?>">
				<?php
				if ( isset( $attributes['background_image'] ) && is_array( $attributes['background_image'] ) ) {
					if ( $is_popup ) {
						$first_image = ! empty( $attributes['background_image'][0] ) ? $attributes['background_image'][0] : '';
						?>
						<div class="bg-image" style="background-image: url('<?php echo ! empty( $first_image['url'] ) ? esc_url( $first_image['url'] ) : ''; ?>')"></div>
						<?php
					} else {
						foreach ( $attributes['background_image'] as $key => $image ) {
							?>
							<div class="bg-image" style="background-image: url('<?php echo ! empty( $image['url'] ) ? esc_url( $image['url'] ) : ''; ?>')"></div>
							<?php
						}
					}
				}
				?>
			</div>
		</div>
	</div>
</div>
