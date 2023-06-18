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

$columns = ! empty( $attributes['columns'] ) ? esc_attr( $attributes['columns'] ) : 3;
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="container">
		<div class="post-content-grid cols-<?php echo esc_attr( $columns ); ?>">
			<?php echo wp_kses_post( $content ); ?>
		</div>
	</div>
</div>
