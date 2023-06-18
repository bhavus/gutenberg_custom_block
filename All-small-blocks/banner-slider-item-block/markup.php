<?php
/**
 * Banner slider item block markup
 *
 * @package ChiaTheme\Blocks\Example
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */

?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore ?>>
	<?php echo ! empty( $content ) ? wp_kses_post( $content ) : ''; ?>
</div>
