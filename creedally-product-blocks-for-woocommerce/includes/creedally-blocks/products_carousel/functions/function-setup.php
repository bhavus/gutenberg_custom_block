<?php
/**
 * Product Carousel
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Enqueue Frontend Assets
 */
add_action( 'enqueue_block_assets', 'creedally_products_carousel_assets' );
function creedally_products_carousel_assets() {
	wp_register_script(
		'creedally-products-carousel-scripts',
		plugins_url( 'assets/js/frontend.js', dirname(__FILE__) ),
		array( 'jquery', 'swiper' ),
		CREEDALLY_VERSION
	);

	wp_register_style(
		'creedally-products-carousel-styles',
		plugins_url( 'assets/css/frontend/style.css', dirname(__FILE__) ),
		array( 'swiper' ),
		filemtime(plugin_dir_path( dirname(__FILE__) ) . 'assets/css/frontend/style.css')
	);
}

/**
 * Enqueue Editor Assets
 */
add_action( 'enqueue_block_editor_assets', 'creedally_products_carousel_editor_assets' );
function creedally_products_carousel_editor_assets() {
	wp_register_script(
		'creedally-products-carousel-editor-scripts',
		plugins_url( 'block.js', dirname(__FILE__) ),
		array( 'wp-blocks', 'wp-components', 'wp-editor', 'wp-i18n', 'wp-element', 'jquery' ),
		CREEDALLY_VERSION
	);

	wp_register_style(
		'creedally-products-carousel-editor-styles',
		plugins_url( 'assets/css/backend/editor.css', dirname(__FILE__) ),
		array(),
		filemtime(plugin_dir_path( dirname(__FILE__) ) . 'assets/css/backend/editor.css')
	);
}

/**
 * Register Block
 */
register_block_type( 'creedally/products-carousel', array(
	'editor_script'		=> 'creedally-products-carousel-editor-scripts',
	'editor_style'		=> 'creedally-products-carousel-editor-styles',
	'script'			=> 'creedally-products-carousel-scripts',
	'style'				=> 'creedally-products-carousel-styles',
	'attributes'      => array(
		'productIDs'       => array(
			'type'    => 'string',
			'default' => '',
		),
		'align'            => array(
			'type'    => 'string',
			'default' => 'center',
		),
		'queryOrder'       => array(
			'type'    => 'string',
			'default' => '',
		),
		'columns'          => array(
			'type'    => 'integer',
			'default' => 3,
		),
		'queryDisplayType' => array(
			'type'    => 'string',
			'default' => 'all_products',
		),
		'queryProducts'    => array(
			'type'    => 'string',
			'default' => 'wc/v3/products?per_page=10',
		),
		'spaceBetween'     => array(
			'type'    => 'integer',
			'default' => 20,
		),
	),

	'render_callback' => 'creedally_render_frontend_products_carousel',
)
);
