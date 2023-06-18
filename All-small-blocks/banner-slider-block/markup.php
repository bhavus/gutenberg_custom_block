<?php
/**
 * Banner Slider block markup
 *
 * @package ChiaTheme\Blocks\Banner slider block
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */

$background_image = ! empty( $attributes['background_image'] ) ? esc_url( $attributes['background_image'] ) : '';
?>

<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore ?>>
	<div class="superhero banner-container" style="<?php echo ! empty( $background_image ) ? 'background:url(' . esc_attr( $background_image ) . ')no-repeat;background-size: cover;' : ''; ?>">
		<div class="superhero-bg-container">
			<div class="superhero-layout-container">
				<div class="chia-banner-slides">
					<?php echo ! empty( $content ) ? wp_kses_post( $content ) : ''; ?>
				</div>
			</div>
		</div>
	</div>
</div>
