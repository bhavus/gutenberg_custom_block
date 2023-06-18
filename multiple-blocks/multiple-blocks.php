<?php
/**
 * Plugin Name:       Multiple Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multiple-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
//function create_block_multiple_blocks_block_init() {
//	register_block_type( __DIR__ . '/build' );
//}
//add_action( 'init', 'create_block_multiple_blocks_block_init' );
function twitchstreams_multiple_blocks_block_init() {

    $blocks = array(
        'block-one/',
        'block-two/',
        'block-three/',
        'block-four/',
        'block-five/',

    );

    foreach( $blocks as $block ) {
        register_block_type( plugin_dir_path( __FILE__ ) . 'includes/blocks/' . $block );
    }
}
add_action( 'init', 'twitchstreams_multiple_blocks_block_init' );



