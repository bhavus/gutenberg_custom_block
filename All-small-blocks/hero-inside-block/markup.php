<?php
/**
 * Hero inside block.
 *
 * @package EverbridgeTheme\Blocks\Hero-inside
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */

?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="hero-inside-block">
		<div class="hero-inside-container">
			<?php echo ! empty( $content ) ? wp_kses_post( $content ) : ''; ?>
		</div>
	</div>
</div>
