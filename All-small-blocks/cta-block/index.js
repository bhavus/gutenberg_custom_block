/**
 * Call to action block
 */

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import block from './block.json';

/**
 * Register block
 */
registerBlockType( block, {
	icon: (
		<svg
			version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			width="96.000000pt"
			height="96.000000pt"
			viewBox="0 0 96.000000 96.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
				fill="#000000"
				stroke="none"
			>
				<path d="M296 701 l-102 -101 -53 0 c-42 0 -57 -5 -76 -25 -22 -21 -25 -33 -25 -95 0 -62 3 -74 25 -95 19 -20 34 -25 77 -25 l53 0 104 -100 c60 -58 111 -100 120 -98 14 3 16 38 16 318 0 296 -1 315 -18 318 -12 3 -52 -30 -121 -97z" />
				<path d="M612 708 c-19 -19 -14 -41 17 -84 69 -95 68 -192 -1 -290 -32 -44 -33 -70 -7 -87 26 -17 61 13 99 84 32 59 35 71 34 149 0 73 -4 92 -28 139 -45 86 -85 118 -114 89z" />
				<path d="M491 582 c-7 -14 -5 -26 10 -48 23 -35 24 -72 3 -102 -8 -12 -14 -32 -12 -45 5 -34 55 -30 82 6 29 40 30 134 0 174 -26 34 -68 42 -83 15z" />
			</g>
		</svg>
	),
	edit,
	save,
} );
