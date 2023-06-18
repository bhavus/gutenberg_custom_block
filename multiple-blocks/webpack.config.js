const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		'block-one': './includes/blocks/block-one',
		'block-two': './includes/blocks/block-two',
		'block-three': './includes/blocks/block-three',
		'block-four': './includes/blocks/block-four',
		'block-five': './includes/blocks/block-five',

		
	},
};
