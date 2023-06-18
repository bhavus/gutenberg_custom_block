<?php
/**
 * Blocks Setup
 */

 /**
  * Main Editor Styles and Scripts
  */
add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_style(
		'creedally-product-blocks-editor-styles',
		plugins_url( 'assets/backend/css/editor.css', dirname( dirname( __FILE__ ) ) ),
		array( 'wp-edit-blocks' ),
		CREEDALLY_VERSION
	);
	wp_enqueue_script(
		'creedally-product-blocks-editor-scripts',
		plugins_url( 'assets/backend/js/blocks.js', dirname( dirname( __FILE__ ) ) ),
		array( 'wp-blocks' ),
		CREEDALLY_VERSION
	);

	wp_localize_script( 'creedally-product-blocks-editor-scripts', 'creedally_pbw',
		array(
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'woo_placeholder_image'	=>	function_exists('wc_placeholder_img_src')? wc_placeholder_img_src() : ''
		)
	);
} );

add_action( 'wp_enqueue_scripts', 'creedally_register_external_libraries', 0 );
function creedally_register_external_libraries() {
	

	if ( has_block( 'creedally/products-carousel' ) ) {
		wp_register_style(
			'swiper',
			plugins_url( 'assets/frontend/swiper/css/swiper.min.css', dirname( dirname( __FILE__ ) ) ),
			array(),
			'6.4.1'
		);

		wp_register_script(
			'swiper',
			plugins_url( 'assets/frontend/swiper/js/swiper.min.js', dirname( dirname( __FILE__ ) ) ),
			array( 'jquery' ),
			'6.4.1',
			true
		);
	}
}


require_once dirname( __FILE__ ) . '/products_carousel/block.php';
