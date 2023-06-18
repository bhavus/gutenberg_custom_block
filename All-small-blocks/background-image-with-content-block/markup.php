<?php
/**
 * Background image with content block markup
 *
 * @package ChiaTheme\Blocks\background-image-with-content-block
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */

?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="bg-img-content-wrap" style="background-image: url('<?php echo ! empty( $attributes['background_image']['url'] ) ? esc_url( $attributes['background_image']['url'] ) : ''; ?>');">
		<div class="container">
			<div class="bg-img-content">
				<div class="bg-image-right-content" >
					<?php if ( ! empty( $content ) ) { ?>
						<div class="content-lists">
							<?php echo wp_kses_post( $content ); ?>
						</div>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</div>
