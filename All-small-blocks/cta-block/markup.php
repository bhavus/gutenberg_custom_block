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

$unique_id = esc_attr( uniqid( 'cta_bg' ) );
?>
<div <?php echo get_block_wrapper_attributes(); // // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div id="<?php echo esc_attr( $unique_id ); ?>" class="cta-wrapper" style="<?php echo ! empty( $attributes['backgroundImage'] ) ? 'background:url(' . esc_url( $attributes['backgroundImage'] ) . ')' : ''; ?>">
		<div class="cta-row">
			<div class="cta-content-wrap">
				<?php if ( ! empty( $attributes['CTAImage'] ) ) : ?>
					<div class="cta-image">
						<img src="<?php echo esc_url( $attributes['CTAImage'] ); ?>" alt="<?php esc_attr_e( 'Call To Action', 'creedally-theme' ); ?>" />
					</div>
				<?php endif; ?>
				<div class="cta-body-wrap">
					<?php if ( ! empty( $attributes['CTATitle'] ) ) : ?>
						<h2 class="cta-title"><?php echo esc_html( $attributes['CTATitle'] ); ?></h2>
					<?php endif; ?>
					<?php if ( ! empty( $attributes['CTAContent'] ) ) : ?>
						<p class="cta-content"><?php echo wp_kses_post( $attributes['CTAContent'] ); ?></h2></p>
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
	printf( '#%1$s.cta-wrapper:after, .cta-wrapper:before{background: %2$s } #%1$s.cta-wrapper:before{background: %3$s }', esc_attr( $unique_id ), esc_attr( $background_color ), esc_attr( $bg_transparent_color ) );
?>
</style>
