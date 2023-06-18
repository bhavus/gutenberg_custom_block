/**
 * Team-block
 */

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * WordPress dependencies
 */
import { postAuthor as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import initBlock from '../utils/init-block';
import metadata from './block.json';
import edit from './edit';

const { name } = metadata;
export { metadata, name };
/**
 * Internal dependencies
 */
import edit from './edit';

import block from './block.json';

/* Uncomment for CSS overrides in the admin */
// import './index.css';
export const settings = {
	icon,
	edit,
};

export const init = () => initBlock( { name, metadata, settings } );
/**
 * Register block
 */
registerBlockType(block, {
	edit,

});
