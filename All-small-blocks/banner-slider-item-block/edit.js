/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './editor.css';

const BannerSliderItemBockEdit = () => {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InnerBlocks
				allowedBlocks={['core/heading', 'core/paragraph', 'core/button']}
				template={[
					[
						'core/group',
						{ className: 'banner-slide-item' },
						[
							['core/heading', { placeholder: __('Heading', 'chia-theme') }],
							[
								'core/paragraph',
								{ placeholder: __('Description', 'chia-theme') },
							],
							['core/button', { placeholder: __('button', 'chia-theme') }],
						],
					],
				]}
			/>
		</div>
	);
};

export default BannerSliderItemBockEdit;
