<?php
/**
 * Example block markup
 *
 * @package EverbridgeTheme\Blocks\Example
 *
 * @var array    $attributes         Block attributes.
 * @var string   $content            Block content.
 * @var WP_Block $block              Block instance.
 * @var array    $context            BLock context.
 */
echo "<pre>";
print_r($attributes);
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore //wp-block-pms-example ?>>
	<h2 class="wp-block-tenup-example__title">
		<?php echo wp_kses_post( $attributes['title'] ); ?>
	</h2>
    <h2 class="wp-block-tenup-example__content">
        <?php echo wp_kses_post( $attributes['content'] ); ?>
    </h2>
</div>
