<?php
/**
 * Register Cover Pattern.
 */

function register_prefix_cover_pattern() {
    register_block_pattern(
        'prefix-patterns/cover',
        array(
            'title'       => __( 'Creedally Pattern', 'my-plugin' ),
            'description' => __( 'CreedAlly Patterns', 'my-plugin' ),
            'categories'    => [ 'creedally' ],
            'content'     => '<!-- wp:media-text {"align":"","mediaType":"image","verticalAlignment":"center"} -->
<div class="wp-block-media-text is-stacked-on-mobile is-vertically-aligned-center"><figure class="wp-block-media-text__media"><img src="https://s.w.org/images/core/5.8/architecture-04.jpg" alt="Close-up, abstract view of architecture."/></figure><div class="wp-block-media-text__content"><!-- wp:heading {"textAlign":"center","level":3,"style":{"color":{"text":"#000000"}}} -->
<h3 class="has-text-align-center has-text-color" style="color:#000000"><strong>CreedAlly</strong></h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"align":"center","fontSize":"extra-small"} -->
<p class="has-text-align-center has-extra-small-font-size"><a href="https://creedally.com/">Shailesh Parmar ↗</a></p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text -->',
        )
    );
}
add_action( 'init', 'register_prefix_cover_pattern' );