<?php

/**
 * Plugin Name:       		CreedAlly Product Blocks for WooCommerce
 * Plugin URI:        		https://xyz.com/
 * Description:       		custom Blocks for WooCommerce.
 * Version:           		1.0.0
 * Author:            		CreedAlly
 * Author URI:        		https://xyz.com
 * text-domain:             creedally
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

define('CREEDALLY_VERSION', '1.5.1');
//define('CREEDALLY_SUFFIX', SCRIPT_DEBUG ? '' : '.min');

if ( ! function_exists( 'is_plugin_active' ) ) {
    require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
}

add_action( 'init', 'creedally_includes' );
function creedally_includes() {

	if ( !is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
		add_action( 'admin_notices', 'creedally_woocommerce_warning' );
	} else if( ! (is_plugin_active( 'gutenberg/gutenberg.php' ) || creedally_wp_version('>=', '6.0')) ) {
		add_action( 'admin_notices', 'creedally_gutenberg_warning' );
	} else {
		include_once dirname( __FILE__ ) . '/includes/creedally-blocks/index.php';
	}
}

function creedally_woocommerce_warning() {
	?>
	<div class="message error woocommerce-admin-notice woocommerce-st-inactive woocommerce-not-configured">
		<p><?php esc_html_e("Product Blocks for WooCommerce is enabled but not effective. It requires WooCommerce in order to work.", "creedally"); ?>.</p>
	</div>
	<?php
}

function creedally_gutenberg_warning() {
	?>

	<div class="message error woocommerce-admin-notice woocommerce-st-inactive woocommerce-not-configured">
		<p><?php esc_html_e("Product Blocks for WooCommerce plugin couldn't find the Block Editor Gutenberg installed as a plugin.", "creedally"); ?></p>
	</div>

	<?php
}

function creedally_wp_version( $operator = '>', $version = '6.0' ) {
	global $wp_version;
	return version_compare( $wp_version, $version, $operator );
}
